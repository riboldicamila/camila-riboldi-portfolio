import React, { useRef } from "react";
import { FaCheck } from "react-icons/fa";

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

  const sentences = [
    "Team player - understanding both business and tech needs.",
    "Collecting requirements for the application that needs to be developed.",
    "Estimating time for tasks, especially those related to frontend development.",
    "Planning with agile methodologies in mind, determining what to do in each iteration.",
    "Thinking ahead of the client - considering what functionality is truly needed.",
    "Focusing on UX/UI experience.",
    "Maintaining an open mindset, as needs evolve along with technologies.",
    "Always learning and improving my skills.",
  ];

  const sentencesTechnologies = [
    "Creating CSS, SASS, and HTML pages.",
    "Frameworks such as Bootstrap, Material UI, and internal company-specific frameworks.",
    "Strongest skill: React JS. Class and Functional Components.",
    "Knowledge with React Hooks.",
    "Libraries such as React Router DOM and React Icons.",
    "Frontend testing: React Testing Library (RTL) and Jest.",
    "I can integrate any needed library or framework as required.",
    "Foundations in backend with Object-Oriented Programming (OOP).",
    "SQL. Python. JavaScript"
  ];

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
          <div className="up-title">Skills</div>
          <div className="title">What can I Help With</div>
          <div className="text">
            {sentences.map((sentence, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <FaCheck style={{ marginRight: "8px", color: "green" }} />
                <span>{sentence}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="up-title">Technologies</div>
          <div className="title">What I have worked With</div>
          <div className="text">
            {sentencesTechnologies.map((sentence, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <FaCheck style={{ marginRight: "8px", color: "green" }} />
                <span>{sentence}</span>
              </div>
            ))}
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
