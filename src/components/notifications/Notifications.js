import React, { useState, useEffect } from "react";
import NotificationLikes from "../notifications/NotificationLikes";
import useFirestore from "../../hooks/useFirestore";
import { useAuth } from "../../contexts/AuthContext";
import Header from "../Header";
import NotificationComments from "../notifications/NotificationComments";

const Notifications = () => {
  const users = useFirestore("users");
  const { currentUser } = useAuth();

  const { docs } = useFirestore("posts");

  const likedUserPosts = docs
    .filter((post) => post.data.userID === currentUser.uid)
    .filter((userPost) => userPost.data.likes.length > 0);

  const commentedUserPosts = docs
    .filter((post) => post.data.userID === currentUser.uid)
    .filter((userPost) => userPost.data.comments.length > 0);

  return (
    <div className="notifications">
      <Header text={"Notifications"} />
      <div className="notifications__container">
        <div className="notifications__likes">
          <Header text={"Likes"} />
          {likedUserPosts &&
            users &&
            likedUserPosts.map((post) => (
              <NotificationLikes
                key={post.id}
                userAvatar={post.data.avatar}
                text={post.data.text}
                likes={post.data.likes}
                users={users.docs}
              />
            ))}
        </div>
        <div className="notifications__comments">
          <Header text={"Comments"} />
          {commentedUserPosts &&
            users &&
            commentedUserPosts.map((post) => (
              <NotificationComments
                key={post.id}
                userAvatar={post.data.avatar}
                text={post.data.text}
                comments={post.data.comments}
                users={users.docs}
                id={post.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
