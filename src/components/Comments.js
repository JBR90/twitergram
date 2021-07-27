import React from "react";
import Comment from "./Comment";
// import "../styles/comment.css";

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          photoURL={comment.photoURL}
          comment={comment.comment}
          displayName={comment.displayName}
        />
      ))}
    </div>
  );
};

export default Comments;
