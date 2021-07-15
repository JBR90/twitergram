import React from "react";
import NotificationLikes from "./NotificationLikes";
import useFirestore from "../hooks/useFirestore";
import { useAuth } from "../contexts/AuthContext";

const Notifications = () => {
  // get post from user
  const { docs } = useFirestore("posts");
  const { currentUser } = useAuth();
  const users = useFirestore("users");

  console.log("docs", docs);
  console.log("USERSs", users.docs);
  console.log("user", currentUser);

  const likedUserPosts = docs
    .filter((post) => post.data.userID === currentUser.uid)
    .filter((userPost) => userPost.data.likes.length > 0);

  console.log(likedUserPosts);

  // filter posts with likes
  // Display post
  // Get users from likes
  // display users profile next to post

  return (
    <div className="notifications">
      {likedUserPosts.map((post) => (
        <NotificationLikes
          key={post.id}
          userAvatar={post.data.avatar}
          text={post.data.text}
          likes={post.data.likes}
          users={users.docs}
        />
      ))}
    </div>
  );
};

export default Notifications;
