import React, { useState, useEffect } from "react";
import NotificationLikes from "./NotificationLikes";
import useFirestore from "../hooks/useFirestore";
import { useAuth } from "../contexts/AuthContext";
import Header from "./Header";

const Notifications = () => {
  //   const [nodes, setNodes] = useState({});
  //   const [isLoading, setLoading] = useState(true);
  const users = useFirestore("users");
  const { currentUser } = useAuth();

  const { docs } = useFirestore("posts");

  // get post from user

  //   useEffect(() => {
  //     getAllNodes();
  //   }, []);

  console.log("docs", docs);
  console.log("USERSs", users.docs);
  console.log("user", currentUser);

  const likedUserPosts = docs
    .filter((post) => post.data.userID === currentUser.uid)
    .filter((userPost) => userPost.data.likes.length > 0);

  console.log("liked postS", likedUserPosts);

  // filter posts with likes
  // Display post
  // Get users from likes
  // display users profile next to post

  return (
    <div className="notifications">
      <Header text={"Notifications"} />
      <div className="notifications__container">
        <div className="notifications__likes">
          <Header text={"Likes"} />
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
        <div className="notifications__comments">
          <Header text={"Comments"} />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
