import React from "react";
import "./AboutMe.css";

import carrousel1 from "./AboutMeImages//web1.jpg";
import carrousel2 from "./AboutMeImages/web2.jpg";
import carrousel3 from "./AboutMeImages/web3.jpg";

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
