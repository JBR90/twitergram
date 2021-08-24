import React from "react";
import NotificationComment from "./NotificationComment";

import { ChatBubbleOutline } from "@material-ui/icons";

const NotificationComments = ({ userAvatar, text, comments, users, id }) => {
  const numberOfComments = comments.length;

  return (
    <div className="notificationLikes">
      <div className="notificationLikes__likedPosts">
        <div className="notficationLikes__userAvatar">
          {/* <Avatar src={userAvatar} /> */}
        </div>
        <div className="notificationLikes__post">{text}</div>
      </div>
      <div className="notificationLikes__container">
        <div className="notificationLikes__numberOfLikes">
          <p>{numberOfComments}</p>
          <ChatBubbleOutline />
        </div>
        {comments &&
          comments.map((comment, index) => (
            <NotificationComment
              className="notificationLikes__item"
              key={index}
              comment={comment}
              users={users}
              numberOfComments={numberOfComments}
            />
          ))}
      </div>
    </div>
  );
};

export default NotificationComments;
