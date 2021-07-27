import React from "react";
import { motion } from "framer-motion";

import ModalHeader from "./ModalHeader";

const Modal = ({ setSelectedImg, selectedImg, setShowFeed, setShowGrid }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const handleLink = (e) => {
    setSelectedImg(null);
  };

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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Modal;
