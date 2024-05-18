import React from "react";

import "./Home.css";
import homePicture from "./home-picture-2.jpg";
import git from "./git.jpg";
import html from "./html.png";
import scrum from "./scrum.png";
import css from "./CSS-Logo.png";

import PrimaryButton from "../Button/PrimaryButton";

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
          development a holistic spin. <br /> While I mostly geek out over
          front-end stuff, I've dabbled in backend and databases too. <br /> I
          enjoy teamwork, and I dig using Agile methods like Scrum to get things
          done.
        </p>

        <PrimaryButton href="none" className="home-btn" text="Know More" />
      </div>
      <div className="banner-2">
        <img src={scrum} alt="Background" className="icon-image" />
        <img src={css} alt="Background" className="icon-image" />
        <img src={html} alt="Background" className="icon-image" />
        <img src={git} alt="Background" className="icon-image" />
      </div>
    </div>
  );
}

export default Home;
