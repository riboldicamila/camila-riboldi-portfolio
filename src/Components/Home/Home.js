import React from "react";

import "./Home.css";
import homePicture from "./home-picture.jpg";

function Home() {
  return (
    <div className="home">
      <div className="image-with-text-overlay">
        <img src={homePicture} alt="Background" className="background-image" />
        <div className="text-overlay">
          <h2>New creations, new challenges.</h2>
        </div>
      </div>
      <div className="banner">
        <p>Phrase of Choice</p>
        <p>Phrase of Choice</p>
        <p>Phrase of Choice</p>
      </div>
    </div>
  );
}

export default Home;
