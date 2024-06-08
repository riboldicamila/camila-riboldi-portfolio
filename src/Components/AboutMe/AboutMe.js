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
import ImageWithText from "./ImageWithText";

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
      </div>

      <div className="card-container">
        <HomeCard
          image={university}
          title="Bachelor in Information Systems"
          text=" Holding a degree from UBA University, ranked 2nd in the QS Latin
              America University Rankings 2024 and 71st worldwide. This Bachelor
              in Information Systems program spans 5 ½ years and offers a
              comprehensive journey that merges
              business management with technological innovation
              . The program provides a great understanding of business needs and
              requirements, emphasizing IT management. Gainning the skills to
              negotiate with clients and understand their needs, giving skills
              that complements the coding."
        />
        <HomeCard
          image={languages}
          title="Skills and Trainnings"
          text="I improved my React skills through courses by Meta and Coderhouse, 
             dedicating over 60 hours to mastering React Js. Additionally, I gained a solid understanding of web development fundamentals,
         including HTML, CSS, and SASS, through a 38-hour course. From a design perspective, I grasped the fundamentals through a program at the University of Michigan,
          understanding UX Design from concept to prototype.
          Backend related, I completed a Coding Bootcamp emphasizing Object-Oriented Programming fundamentals based on Test Driven Development principles, which greatly improved
           my problem-solving skills and code quality and later on I complemented that with a Python certification from Udemy."
          className="trainning-card"
        />
        <HomeCard
          image={courses}
          title="Communication as a pilar"
          text="Communication forms the foundation for understanding requirements and user needs. Given the global nature of technology, it's crucial to mention that I am a native Spanish speaker and also hold a C1 level of English proficiency, enabling me to fluently communicate both orally and in writing. This proficiency is certified by TOEFL and IGCSE English exams I have taken. Additionally, I have an elementary level of Portuguese, allowing me to engage in basic conversations and I'm eager to enhance my proficiency further if required for client interactions."
        />
      </div>
      <div className="image-container">
        <ImageWithText image={carrousel1} text={"Plan"} />
        <ImageWithText image={carrousel2} text={"Code"} />
        <ImageWithText image={carrousel3} text={"Refine"} />
        {/* <CarouselPhotos items={items} /> */}
      </div>
    </>
  );
}

export default AboutMe;
