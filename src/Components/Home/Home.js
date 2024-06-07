import React, { useRef } from "react";

import homePicture from "./home-picture-7.jpg";

import git from "./git.png";
import html from "./html.png";
import scrum from "./scrum.png";
import css from "./CSS-Logo.png";
import js from "./JavaScript.png";
import react from "./react+.png";
import python from "./python.png";
import sql from "./sql.png";

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
    <div className="home">
      <div className="image-with-text-overlay">
        <img src={homePicture} alt="Background" className="background-image" />
        <div className="text-overlay animate__animated animate__fadeInLeft">
          <h2>Developing with a holistic view.</h2>
          <h3>Get to know my journey</h3>
        </div>
        {/* <div>
          <img
            src={profilePicture}
            alt="Background"
            className="picture-overlay"
          />
        </div> */}
      </div>
      <div className="banner">
        <h2>Worldwide. Based in Buenos Aires, Argentina.</h2>
        <p>
          I'm a{" "}
          <span className="yellow-underline">
            software developer with a focus on frontend
          </span>
          , curious about UX and UI. <br /> I have some knowledge of backend and
          databases, and I hold a bachelor's degree <br /> in Information
          Systems. I enjoy teamwork and am committed to creating <br />{" "}
          user-friendly experiences while continuously learning and expanding my
          skills.
        </p>

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
