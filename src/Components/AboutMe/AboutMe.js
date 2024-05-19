import React from "react";
import HomeCard from "../Home/HomeCard";
import "./AboutMe.css";

import university from "./uba-photo.jpg";
import languages from "./languages-photo.jpg";
import courses from "./courses-photo.jpg";
import universitycarousel from "./uba-carousel-photo.jpg";
import uicarousel from "./ux.jpg";

import CarouselPhotos from "../Carrosel/CarouselPhotos";

function AboutMe() {
  const items = [
    {
      src: universitycarousel,
      altText: "Image 1 description",
      text: "trial hello",
    },
    {
      src: uicarousel,
      altText: "Image 1 description",
      text: "trial hello",
    },
    {
      src: uicarousel,
      altText: "Image 1 description",
      text: "trial hello",
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
    "Native Spanish Speaker",
    "English C1 Level: IGCSE and TOFLC Exam ",
    "Begginer level in Portuguese",
  ];

  return (
    <>
      <div>
        <CarouselPhotos items={items} />
      </div>
      <div className="card-container">
        <HomeCard
          image={university}
          title="Bachelor in Information Systems | 5 ½ years program"
          text="The Bachelor in Information Systems program is a comprehensive journey merging business management with technological innovation. 
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
    </>
  );
}

export default AboutMe;
