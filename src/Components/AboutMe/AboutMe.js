import React from "react";
import HomeCard from "../Home/HomeCard";
import "./AboutMe.css";

import university from "./uba-photo.jpg";
import languages from "./languages-photo.jpg";
import courses from "./courses-photo.jpg";
import carrousel1 from "./web1.jpg";
import carrousel2 from "./web2.jpg";
import carrousel3 from "./web3.jpg";

import Bachelor from "./AboutMeImages/graduation.jpg";
import Work from "./AboutMeImages/coorporate.jpg";
import Idea from "./AboutMeImages/idea.png";
import Idiomas from "./AboutMeImages/idiomas.png";
import Arrow from "./AboutMeImages/arrow.png";

import AnimatedLine from "../AnimatedLine/AnimatedLine";
import ImageWithText from "./ImageWithText";

function AboutMe() {
  return (
    <>
      <AnimatedLine />
      <div className="about-me-tab">
        <div className="about-me-container">
          <h2 className="about-me-title"> My journey</h2>
          <div>Better done than perfect.</div>
          <div>
            On the path of creating and learning, what matters is always
            progressing.
          </div>
        </div>

        <div className="journey-container">
          <div className="journey-card">
            <img src={Bachelor} alt="Logo" className="logo-image" />
            <h2>Bachelor in Information Systems from UBA</h2>
            <div>Ranked 2nd in the QS Latin America University.</div>
            <div>
              The program spans 5 ½ years and offers a comprehensive journey
              that merges business management with technological innovation.
            </div>
          </div>
          <img src={Arrow} alt="Logo" className="logo-image" />{" "}
          <div className="journey-card">
            <img src={Idea} alt="Logo" className="logo-image" />
            <h2>Skills and Training</h2>
            <div>
              Dedicating over 60 hours to mastering React Js with both
              CoderHouse and Meta courses.
            </div>
            <div>
              Gained a solid understanding of web development fundamentals,
              including HTML, CSS, and SASS, through a 38-hour course.
              Participated in bootcamps for Object Orented Prgramming and
              courses for backend languages such as Python.
            </div>
          </div>
          <img src={Arrow} alt="Logo" className="logo-image" />{" "}
          <div className="journey-card">
            <img src={Idiomas} alt="Logo" className="logo-image" />
            <h2>Let´s Connect -find a language in common-</h2>
            <div>Spanish | English | Portuguese </div>
            <div>
              I am a native Spanish speaker and also hold a C1 level of English
              proficiency, enabling me to fluently communicate both orally and
              in writing. This proficiency is certified by TOEFL and IGCSE
              English exams I have taken. Additionally, I have an elementary
              level of Portuguese, allowing me to engage in basic conversations.
            </div>
            <div></div>
          </div>
          <img src={Arrow} alt="Logo" className="logo-image" />{" "}
          <div className="journey-card">
            <img src={Work} alt="Logo" className="logo-image" />
            <h2>Working in corporate</h2>
            <div>2 ½ years of experience.</div>
            <div>
              In the last two and a half years, I have been working in
              multinational companies, improving my skills in software
              development.
            </div>
          </div>
        </div>

        {/* <div className="card-container">
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
          title="Communication as a pillar"
          text="Communication forms the foundation for understanding requirements and user needs. Given the global nature of technology, it's crucial to mention that I am a native Spanish speaker and also hold a C1 level of English proficiency, enabling me to fluently communicate both orally and in writing. This proficiency is certified by TOEFL and IGCSE English exams I have taken. Additionally, I have an elementary level of Portuguese, allowing me to engage in basic conversations and I'm eager to enhance my proficiency further if required for client interactions."
        />
      </div> */}
        <div className="image-container">
          <ImageWithText image={carrousel1} text={"Plan"} />
          <ImageWithText image={carrousel2} text={"Code"} />
          <ImageWithText image={carrousel3} text={"Refine"} />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
