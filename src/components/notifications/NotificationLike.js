import React from "react";

import { Avatar } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

const NotificationLike = ({ like, users, numberOfLikes }) => {
  const user = users.filter((user) => user.data.id === like);

  return (
    <div className="notificationLike">
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
