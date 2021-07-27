import React from "react";
import NotificationLike from "./NotificationLike";
import { Avatar } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";

const NotificationLikes = ({ userAvatar, text, likes, users }) => {
  const numberOfLikes = likes.length;

  return (
    <div className="notificationLikes">
      <div className="notificationLikes__likedPosts">
        <div className="notficationLikes__userAvatar">
          <Avatar src={userAvatar} />
        </div>
        <div className="notificationLikes__post">{text}</div>
      </div>
      <div className="notificationLikes__container">
        <div className="notificationLikes__numberOfLikes">
          <p>{numberOfLikes}</p>
          <Favorite />
        </div>
        {likes &&
          likes.map((like) => (
            <NotificationLike
              className="notificationLikes__item"
              key={like}
              like={like}
              users={users}
              numberOfLikes={numberOfLikes}
            />
          ))}
      </div>
    </div>
  );
};

export default NotificationLikes;
