import React from "react";
import "./AboutMe.css";

import carrousel1 from "./web1.jpg";
import carrousel2 from "./web2.jpg";
import carrousel3 from "./web3.jpg";

import AnimatedLine from "../AnimatedLine/AnimatedLine";
import ImageWithText from "./ImageWithText";

function AboutMe() {
  return (
    <>
      <AnimatedLine />
      <div className="about-me-container">
        <h2 className="about-me-title"> Get to know me</h2>
      </div>

      <div className="about-me-cards-container">
        <ImageWithText
          image={carrousel1}
          text={"Plan"}
          subtitle={"Bachelor in Information Systems"}
          description={
            <p>
              Holding a degree from UBA University, ranked 2nd in the QS Latin
              America University Rankings 2024 and 71st worldwide. This Bachelor
              in Information Systems program spans 5 ½ years and offers a
              comprehensive journey that merges{" "}
              <strong>business management with technological innovation</strong>
              . The program provides a great understanding of business needs and
              requirements, emphasizing IT management. Gainning the skills to
              negotiate with clients and understand their needs, giving skills
              that complements the coding."
            </p>
          }
        />
        <ImageWithText
          image={carrousel2}
          text={"Code"}
          subtitle="Skills for coding"
          description="I improved my React skills through courses by Meta and Coderhouse, dedicating over 60 hours to mastering React Js. Additionally, I gained a solid understanding of web development fundamentals,
         including HTML, CSS, and SASS, through a 38-hour course. From a design perspective, I grasped the fundamentals through a program at the University of Michigan,
          understanding UX Design from concept to prototype. On the business side, I acquired a foundational understanding of marketing principles through a 30-hour course at Capacitarte.
          Backend related, I completed a Coding Bootcamp emphasizing Object-Oriented Programming fundamentals based on Test Driven Development principles, which greatly improved
           my problem-solving skills and code quality and later on I complemented that with a Python certification from Udemy."
        />
        <ImageWithText
          image={carrousel3}
          text={"Refine"}
          subtitle="Communication as a pilar"
          description="Communication forms the foundation for understanding requirements and user needs. Given the global nature of technology, it's crucial to mention that I am a native Spanish speaker and also hold a C1 level of English proficiency, enabling me to fluently communicate both orally and in writing. This proficiency is certified by TOEFL and IGCSE English exams I have taken. Additionally, I have an elementary level of Portuguese, allowing me to engage in basic conversations and I'm eager to enhance my proficiency further if required for client interactions."
        />
      </div>
    </>
  );
}

export default AboutMe;
