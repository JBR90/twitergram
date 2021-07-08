import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  Favorite,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";
// import "../styles/Post.css";
import firebase from "firebase/app";
import db from "../services/firebase";

import ToogleComponent from "./ToggleComponent";
import TweetCommentForm from "./TweetCommentForm";
import Comments from "./Comments";
import { useAuth } from "../contexts/AuthContext";

const Post = ({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
  comments,
  id,
  likes,
}) => {
  // console.log("this is id in post", id);
  // console.log("this is comments in post", comments);
  const [showComments, setShowComments] = useState(false);
  const [likedPost, setLikedPost] = useState(false);
  const { currentUser, login, resetPassword } = useAuth();

  useEffect(() => {
    const liked = likes.find((user) => user === currentUser.uid);
    liked ? setLikedPost(true) : setLikedPost(false);
  }, [currentUser, likes]);

  const amountOfComments = comments.length;
  const amountOfLikes = likes.length;

  const handleShowComments = () => setShowComments(!showComments);

  const handleLikeButton = () => {
    const liked = likes.find((user) => user === currentUser.uid);
    const getTweet = db.collection("posts").doc(id);
    if (liked) {
      setLikedPost(false);
      const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
      getTweet.update({
        likes: arrayRemove(currentUser.uid),
      });
    } else {
      const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
      getTweet.update({
        likes: arrayUnion(currentUser.uid),
      });

      setLikedPost(true);
    }
  };

  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}:{" "}
              <span className="post__headerSpecial">
                {verified && <VerifiedUser className="post__badge" />}
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />

        <div className="post__footer">
          <div className="post__toggleComments">
            <ChatBubbleOutline
              className="post__icons"
              onClick={handleShowComments}
              fontSize="small"
            />
            <p>{amountOfComments > 0 ? amountOfComments : null}</p>
          </div>

          <Repeat className="post__icons" fontSize="small" />
          <div className="post__likes ">
            {likedPost ? (
              <Favorite
                className="post__icons"
                style={{ color: "red" }}
                onClick={handleLikeButton}
                fontSize="small"
              />
            ) : (
              <FavoriteBorder
                className="post__icons"
                onClick={handleLikeButton}
                fontSize="small"
              />
            )}
            <p>{amountOfLikes > 0 ? amountOfLikes : null}</p>
          </div>

          <Publish className="post__icons" fontSize="small" />
        </div>
        {showComments ? <TweetCommentForm id={id} /> : null}
        {showComments ? <Comments comments={comments} /> : null}
      </div>
    </div>
  );
};

export default Post;
