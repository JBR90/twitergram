import React, { useEffect, useState } from "react";
import "../styles/Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "../services/firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = db.collection("posts");
    postsRef.orderBy("createdAt", "desc").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
      console.log("triggered");
      // snapshot.forEach((doc) => {
      //   console.log(doc.id, "=>", doc.data());
      // });
    });
  }, []);

  console.log(posts);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      {posts.map((post) => (
        <Post
          id={post.id}
          key={post.id}
          displayName={post.data.displayName}
          username={post.data.username}
          verified={post.data.verified}
          text={post.data.text}
          avatar={post.data.avatar}
          image={post.data.image}
          comments={post.data.comments}
          likes={post.data.likes}
        />
      ))}
    </div>
  );
}

export default Feed;
