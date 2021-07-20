import React from "react";
import useFirestore from "../hooks/useFirestore";
import { Avatar } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

const NotificationLike = ({ like, users, numberOfLikes }) => {
  console.log("in likes", users);

  const user = users.filter((user) => user.data.id === like);

  console.log("tis is a ", user[0]);

  return (
    <div className="notificationLike">
      {/* {like && users ? <h1>{like}</h1> : <h1>loading</h1>} */}

      {/* <h1>{users}</h1> */}
      {like && users && (
        <div className="notificationLike__userLikes">
          <div className="notificationLike__userAvatar">
            <Tooltip title={user[0].data.username} aria-label="username">
              <Avatar src={user[0].data.avatar} />
            </Tooltip>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationLike;
