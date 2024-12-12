import React, { useRef } from "react";

import homePicture from "./HomeImages/background-12.jpg";
import git from "./HomeImages/git.png";
import html from "./HomeImages/html.png";
import scrum from "./HomeImages/scrum.png";
import css from "./HomeImages/CSS-Logo.png";
import js from "./HomeImages/JavaScript.png";
import react from "./HomeImages/react+.png";
import python from "./HomeImages/python.png";
import sql from "./HomeImages/sql.png";

import PrimaryButton from "../Button/PrimaryButton";
import useIntersectionObserver from "@react-hook/intersection-observer";

import "./Home.css";

function Home() {
  const bannerRef = useRef(null);
  const { isIntersecting } = useIntersectionObserver(bannerRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  });

  return (
    <div className="home-tab">
      <div className="image-with-text-overlay">
        <img src={homePicture} alt="Background" className="background-image" />
        <div className="text-overlay animate__animated animate__fadeInLeft">
          <h2>Crafting Solutions ⤍ developer</h2>
          <h3> Get to know my journey</h3>
        </div>
      </div>
      <div className="banner">
        <h2>Worldwide. Based in Argentina & Italy.</h2>
        <div>
          My name is Camila. I'm a{" "}
          <span className="highlight"> software developer </span> and I
          especially enjoy working on web development—frontend-related tasks, as
          well as backend and database connections when needed. With a
          technology management academic background, I have a good understanding
          of both business and technological perspectives and I use that deliver
          best as possible what is needed.
        </div>
        <PrimaryButton href="none" className="home-btn" text="Know More" />
      </div>

      <div
        className={`banner-technologies ${isIntersecting ? "" : "hidden"}`}
        ref={bannerRef}
      >
        <div className={`home-carrousel ${isIntersecting ? "show" : "hidden"}`}>
          <img src={scrum} alt="Background" className="icon-image" />
          <img src={git} alt="Background" className="icon-image" />
          <img src={css} alt="Background" className="icon-image" />
          <img src={html} alt="Background" className="icon-image" />
          <img src={js} alt="Background" className="icon-image" />
          <img src={react} alt="Background" className="icon-image" />
          <img
            src={python}
            alt="Background"
            className="icon-image"
            style={{ marginLeft: "20px" }}
          />
          <img
            src={sql}
            alt="Background"
            className="icon-image"
            style={{ marginLeft: "40px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
