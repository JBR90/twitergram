import React from "react";
import ImageGrid from "../imageGrid/ImageGrid";
import Feed from "../tweets/Feed";
import Modal from "../imageGrid/Modal";

const Home = ({ selectedImg, setSelectedImg }) => {
  return (
    <div className="home">
      <div className="container__item">
        <Feed />
      </div>
      <div id="imageGrid" className={`container__item `}>
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </div>
  );
};

export default Home;
