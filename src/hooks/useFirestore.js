import { useState, useEffect } from "react";
import { projectFirestore } from "../services/firebase";
import db from "../services/firebase";

// const getLikesFirestore = (user) => {
//   const [likes, setLikes] = useState([]);
//   useEffect(() => {
//     const liked = likes.find((user) => user === currentUser.uid);
//     liked ? setLikedPost(true) : setLikedPost(false);
//   }, [currentUser, likes]);
// };

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setDocs(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { docs };
};

export default useFirestore;
