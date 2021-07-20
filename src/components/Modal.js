import React from "react";
import { motion } from "framer-motion";
import Comments from "../components/Comments";
import Post from "../components/Post";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MicNoneTwoTone } from "@material-ui/icons";
import ModalHeader from "./ModalHeader";
// import * as styles from "../sass/components/_modal.scss";

// const useStyles = makeStyles((theme) => ({
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//     border: "none !important",
//   },
// }));

const Modal = ({ setSelectedImg, selectedImg, setShowFeed, setShowGrid }) => {
  //   const classes = useStyles();
  const handleClick = (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains("backdrop")) {
      console.log("Selected IMG", selectedImg);
      setSelectedImg(null);
    }
  };

  const handleLink = (e) => {
    // setShowGrid(false);
    // setShowFeed(true);
    setSelectedImg(null);
  };

  console.log(selectedImg.data.image);
  return (
    <div className="modal">
      <motion.div
        className="backdrop"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="backdrop__card"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
        >
          <div className="modal__header">
            <ModalHeader
              avatar={selectedImg.data.photo}
              displayName={selectedImg.data.displayName}
            />

            {/* <h1 className="modal__user">{selectedImg.data.displayName}</h1> */}
          </div>
          {selectedImg.data.image !== "" ? (
            <motion.img
              src={selectedImg.data.image}
              alt="enlarged pic"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
            />
          ) : null}
          <div className="modal__body">
            <p className="modal__text">{selectedImg.data.text}</p>
            <a
              className="modal__link"
              id="link"
              onClick={(e) => handleLink()}
              href={`#${String(selectedImg.id)}`}
            >
              See Post
            </a>
          </div>
          {/* <h1>{post.text}</h1>
        {/* <Comments comments={selectedImg.comments} /> */}{" "}
          {/* */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Modal;
