import React from "react";
import useFirestore from "../hooks/useFirestore";
import { Avatar } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

const NotificationComment = ({ comment, users, numberOfComments }) => {
  const user = users.filter((user) => user.data.id === comment.userId);

  console.log("tis is a comment user ", user[0]);
  console.log("tis is a comment user ", user[0]);

  return (
    <div className="notificationLike">
      {/* {like && users ? <h1>{like}</h1> : <h1>loading</h1>} */}

      {/* <h1>{users}</h1> */}
      {comment && users && (
        <div className="notificationLike__userLikes">
          <div className="notificationLike__userAvatar">
            <Tooltip
              title={`${user[0].data.username} : ${comment.comment}`}
              aria-label="username"
            >
              <Avatar src={user[0].data.avatar} />
            </Tooltip>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationComment;
