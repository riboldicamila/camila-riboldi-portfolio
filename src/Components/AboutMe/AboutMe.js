import React from "react";
import HomeCard from "../Home/HomeCard";
import "./AboutMe.css";

import university from "./uba-photo.jpg";
import languages from "./languages-photo.jpg";
import courses from "./courses-photo.jpg";
import carrousel1 from "./web1.jpg";
import carrousel2 from "./web2.jpg";
import carrousel3 from "./web3.jpg";

import CarouselPhotos from "../Carrosel/CarouselPhotos";
import AnimatedLine from "../AnimatedLine/AnimatedLine";

function AboutMe() {
  const items = [
    {
      src: carrousel1,
      altText: "Image 1 description",
    },
    {
      src: carrousel2,
      altText: "Image 1 description",
    },
    {
      src: carrousel3,
      altText: "Image 1 description",
    },
  ];

  const coursesText = [
    "Advanced React - Coursera by Meta",
    "React Js 35hs - Coderhouse",
    "Web Development | html-css-saas 38hs - Coderhouse",
    "UX Design: From Concept to Prototype - University of Michigan",
    "Technical Support Fundamentals - Coursera",
    "Marketing Fundamentals 30hs - Capacitarte",
    "Coding Bootcamp: OOP Fundamentals based on TDD (test driven development)",
  ];

  const languagues = [
    "I am an Argentinean native Spanish speaker. My second language is English, with a C1 proficiency level certified by the IGCSE and TOEFL exams. Also, I look forward to improving my Portuguese, which is currently at a beginner level.",
  ];

  return (
    <>
      <AnimatedLine />
      <div className="about-me-container">
        <h2 className="about-me-title"> Get to know me</h2>
        <div className="card-container">
          <HomeCard
            image={university}
            title="Bachelor in Information Systems"
            text="The Bachelor in Information Systems program ( 5 ½ years program) is a comprehensive journey merging business management with technological innovation. 
        The curriculum is divided into distinct phases. The initial two years focus on economics, finance, and management principles, providing a holistic understanding of the business landscape.
        Later stages emphasize Information Technology (IT) management. Learning about IT strategy, project management, and programming foundations."
          />
          <HomeCard
            image={languages}
            title="Courses and Trainnings"
            text={coursesText}
            className="trainning-card"
          />
          <HomeCard
            image={courses}
            title="Languages for Communication"
            text={languagues}
          />
        </div>
      </div>
      <div>
        <CarouselPhotos items={items} />
      </div>
    </>
  );
}

export default AboutMe;
