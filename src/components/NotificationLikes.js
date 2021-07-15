import React from "react";
import NotificationLike from "./NotificationLike";
import { Avatar } from "@material-ui/core";

const NotificationLikes = ({ userAvatar, text, likes, users }) => {
  return (
    <div className="notificationLikes">
      <div className="notificationLikes__likedPosts">
        <div className="notficationLikes__userAvatar">
          <Avatar src={userAvatar} />
        </div>
        <div className="notificationLikes__post">{text}</div>
      </div>
      {likes.map((like) => (
        <NotificationLike key={like} like={like} users={users} />
      ))}
    </div>
  );
};

export default NotificationLikes;
