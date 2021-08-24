import { Avatar, button } from "@material-ui/core";
import React, { useState } from "react";
import db from "../../services/firebase";

import firebase from "firebase/app";

import { useAuth } from "../../contexts/AuthContext";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const { currentUser } = useAuth();

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      username: currentUser.displayName,
      displayName: currentUser.displayName,
      avatar: currentUser.photoURL,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      userID: currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      comments: [],
      likes: [],
    });
    setTweetImage("");
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={currentUser.photoURL} />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          className="tweetBox__imageInput"
          type="Text"
          value={tweetImage}
          placeholder="Optional: Enter image url"
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <button onClick={sendTweet} className="tweetBox__button">
          Tweet
        </button>
      </form>
    </div>
  );
};

export default TweetBox;
