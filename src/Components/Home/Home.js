import React, { useEffect, useState, useRef } from "react";

import "./Home.css";
import homePicture from "./home-picture-7.jpg";
import profilePicture from "./profile-picture.png";

import git from "./git.png";
import html from "./html.png";
import scrum from "./scrum.png";
import css from "./CSS-Logo.png";
import js from "./JavaScript.png";
import react from "./react+.png";

import PrimaryButton from "../Button/PrimaryButton";

import useIntersectionObserver from "@react-hook/intersection-observer";

function Home() {
  const bannerRef = useRef(null);
  const { isIntersecting } = useIntersectionObserver(bannerRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  });

  return (
    <div className="home">
      <div className="image-with-text-overlay">
        <img src={homePicture} alt="Background" className="background-image" />
        <div className="text-overlay animate__animated animate__fadeInLeft">
          <h2>New creations, new challenges.</h2>
        </div>
        <div>
          <img
            src={profilePicture}
            alt="Background"
            className="picture-overlay"
          />
        </div>
      </div>
      <div className="banner">
        <h2>Worldwide. Based in Buenos Aires, Argentina.</h2>
        <p>
          I'm all about crafting user-friendly experiences and giving software
          development a holistic spin. <br /> While I mostly geek out over
          front-end stuff, I've dabbled in backend and databases too. <br /> I
          enjoy teamwork, and I dig using Agile methods like Scrum to get things
          done.
        </p>

        <PrimaryButton href="none" className="home-btn" text="Know More" />
      </div>
      <div
        className={`banner-technologies ${isIntersecting ? "" : "hidden"}`}
        ref={bannerRef}
      >
        <img src={scrum} alt="Background" className="icon-image" />
        <img src={git} alt="Background" className="icon-image" />
        <img src={css} alt="Background" className="icon-image" />
        <img src={html} alt="Background" className="icon-image" />
        <img src={js} alt="Background" className="icon-image" />
        <img src={react} alt="Background" className="icon-image" />
      </div>
    </div>
  );
}

export default Home;
