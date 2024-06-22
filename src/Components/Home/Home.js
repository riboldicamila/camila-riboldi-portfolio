import React, { useRef } from "react";

import homePicture from "./HomeImages/home-picture-7.jpg";
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
          <h2>Crafting Solutions: Let's Create!</h2>
          <h3>Get to know my journey</h3>
        </div>
      </div>
      <div className="banner">
        <h2>Worldwide. Based in Buenos Aires, Argentina.</h2>
        <div>
          My name is Camila. I'm a software developer who specializes in{" "}
          <span className="highlight">web development - frontend</span>. I
          understand both the business and the technological perspectives and I
          work to unify those to deliver the best product to the clients.
        </div>
        <PrimaryButton href="none" className="home-btn" text="Know More" />
      </div>

      <div className="home-tab secound-banner">
        <div className="card">
          <div className="title">What can I Help With</div>
          <div className="text">
            By organizing your color variables in a separate CSS file and
            importing them where needed, you can maintain a consistent color
            scheme across your project and make it easier to update colors in
            the future.
          </div>
        </div>

        <div className="card">
          <div className="title">What can I Help With</div>
          <div className="text">
            By organizing your color variables in a separate CSS file and
            importing them where needed, you can maintain a consistent color
            scheme across your project and make it easier to update colors in
            the future.
          </div>
        </div>
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
