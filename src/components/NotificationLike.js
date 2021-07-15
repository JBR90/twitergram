import React from "react";
import useFirestore from "../hooks/useFirestore";

const NotificationLike = ({ like, users }) => {
  console.log(users);
  const user = users.filter((user) => user.data.id === like);
  console.log(user);
  return (
    <div>
      <div className="notifications__userLikes">
        <div className="notifications__userAvatar">{user.avatar}</div>
      </div>
    </div>
  );
};

export default NotificationLike;
