import React from "react";
import { motion } from "framer-motion";
import useFirestore from "../hooks/useFirestore";
import Header from "./Header";

export default function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore("posts");
  console.log("this is docs", docs);

  return (
    <>
      <Header text={"Gram"} />
      <div className="imageGrid">
        {docs &&
          docs.map((doc) => (
            <motion.div
              className="imageGrid__wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              s
              onClick={() => setSelectedImg(doc)}
            >
              <motion.img
                src={doc.data.image}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
    </>
  );
}
