import React from "react";
import ImageGrid from "./ImageGrid";
import Feed from "./Feed";
import Modal from "./Modal";

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
