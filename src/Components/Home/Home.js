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
        <h2>Worldwide. As for today, based in Buenos Aires, Argentina.</h2>
        <p>
          I'm all about crafting user-friendly experiences and giving software
          development a holistic spin. While I mostly geek out over front-end
          stuff, I've dabbled in backend and databases too. I enjoy teamwork,
          and I dig using Agile methods like Scrum to get things done.
        </p>
      </div>
    </div>
  );
}

export default Home;
