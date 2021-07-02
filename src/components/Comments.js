import React from "react";
import Comment from "./Comment";
import "../styles/comment.css";

const Comments = ({ comments }) => {
  //   const data = Array(comments);
  // console.log(comments);
  const amountOfComments = comments.length;
  //   console.log(JSON.parse(JSON.stringify(comments)));
  return (
    <div className="comments">
      {/* {comments.map((comment) => JSON.parse(JSON.stringify(comment)))} */}

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
