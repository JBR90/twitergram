import Post from "./Post";
import Header from "./Header";
import TweetBox from "./TweetBox";

import useFirestore from "../hooks/useFirestore";

function Feed() {
  const { docs } = useFirestore("posts");

  return (
    <div className="feed">
      <Header text={"Feed"} />

      <TweetBox />

      {docs.map((doc) => (
        <Post
          id={doc.id}
          key={doc.id}
          displayName={doc.data.displayName}
          username={doc.data.username}
          verified={doc.data.verified}
          text={doc.data.text}
          avatar={doc.data.avatar}
          image={doc.data.image}
          comments={doc.data.comments}
          likes={doc.data.likes}
        />
      ))}
      <div id="element_target"></div>
    </div>
  );
}

export default Feed;
