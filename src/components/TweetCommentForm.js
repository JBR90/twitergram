import React, { useState } from "react";

import { useAuth } from "../contexts/AuthContext";
import db from "../services/firebase";
import firebase from "firebase/app";

const TweetCommentForm = ({ id }) => {
  const [tweetComment, setTweetComment] = useState("");
  const { currentUser } = useAuth();

  const handleTweetComment = async (e) => {
    e.preventDefault();
    const tweetCommentObject = [
      {
        comment: tweetComment,
        userId: currentUser.uid,
        photoURL: currentUser.photoURL,
      },
    ];

    try {
      const getTweet = db.collection("posts").doc(id);

      const res = getTweet.update({
        comments: firebase.firestore.FieldValue.arrayUnion({
          comment: tweetComment,
          userId: currentUser.uid,
          photoURL: currentUser.photoURL,
          displayName: currentUser.displayName,
        }),
      });
    } catch (err) {}

    setTweetComment("");
  };

  return (
    <div className="tweetCommentForm">
      <form onSubmit={(e) => handleTweetComment(e)}>
        <div className="tweetCommentForm__input">
          <input
            value={tweetComment}
            onChange={(e) => setTweetComment(e.target.value)}
            placeholder="Comment"
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default TweetCommentForm;
