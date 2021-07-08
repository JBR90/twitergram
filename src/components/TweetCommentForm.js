import React, { useState } from "react";
// import "../styles/TweetComments.css";
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

      console.log(id);
      // db.collection("posts").doc(id).update(tweetCommentObject);
      const res = getTweet.update({
        comments: firebase.firestore.FieldValue.arrayUnion({
          comment: tweetComment,
          userId: currentUser.uid,
          photoURL: currentUser.photoURL,
          displayName: currentUser.displayName,
        }),
      });

      console.log(res);
      // console.log(getTweet);
    } catch (err) {
      console.log(err);
    }

    console.log(tweetCommentObject);
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
