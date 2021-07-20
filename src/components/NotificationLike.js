import React from "react";
import useFirestore from "../hooks/useFirestore";
import { Avatar } from "@material-ui/core";

const NotificationLike = ({ like, users, numberOfLikes }) => {
  console.log("in likes", users);

  const user = users.filter((user) => user.data.id === like);

  console.log("tis is a ", user[0]);

  return (
    <div>
      {/* {like && users ? <h1>{like}</h1> : <h1>loading</h1>} */}

      {/* <h1>{users}</h1> */}
      {like && users && (
        <div className="notifications__userLikes">
          <p>Likes {numberOfLikes}</p>
          <div className="notifications__userAvatar">
            <Avatar src={user[0].data.avatar} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationLike;
