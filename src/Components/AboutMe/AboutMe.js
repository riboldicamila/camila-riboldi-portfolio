import React from "react";

import carrousel1 from "./AboutMeImages//web1.jpg";
import carrousel3 from "./AboutMeImages/web3.jpg";

import Bachelor from "./AboutMeImages/uba-white-logo.png";
import Work from "./AboutMeImages/work-logo.png";
import Idea from "./AboutMeImages/logo-skills.png";
import Idiomas from "./AboutMeImages/language.png";
import Arrow from "./AboutMeImages/arrow.png";

import AnimatedLine from "../AnimatedLine/AnimatedLine";
import ImageWithText from "./ImageWithText";
import InformationCard from "../InformationCard/InformationCard";
import EmailForm from "./EmailForm/EmailForm";

import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <AnimatedLine />
      <div className="about-me-tab">
        <div className="about-me-container">
          <div className="about-me-presentation">
            <h2 className="about-me-title"> My journey</h2>
            <div>
              Software development working with React <br /> and Python in full
              stack team.
            </div>
          </div>

          <div className="image-container">
            <ImageWithText image={carrousel1} text="Plan" />
            <ImageWithText image={carrousel3} text="Code" />
          </div>
        </div>

        <div className="journey-container-2">
          <InformationCard
            title="Bachelor's in Information Systems from UBA"
            text="⬻ Ranked 2nd in the QS Latin America University. "
            secoundText=" ⬻ The program spans 5 ½ years and offers a comprehensive journey that merges business management with technological innovation."
            imageUrl={Bachelor}
          />
          <img src={Arrow} alt="Logo" className="arrow" />
          <InformationCard
            title="Skills and Training"
            text="⬻ Dedicating over 60 hours to mastering React Js with both
              CoderHouse and Meta courses."
            secoundText="⬻ Understanding of web development fundamentals,
              including HTML, CSS, and SASS, through a 38-hour course."
            thirdText="⬻ Bootcamps for Object Orented Programming and
              courses for backend languages such as Python."
            imageUrl={Idea}
          />
          <img src={Arrow} alt="Logo" className="arrow" />
          <InformationCard
            title="Languages and Proficiency"
            text="⬻ Native Spanish speaker."
            secoundText="⬻ C1 level English proficiency, enabling fluent communication both orally and in writing, certified by TOEFL and IGCSE English exams."
            thirdText="⬻ Elementary level of Portuguese, allowing engagement in basic conversations."
            imageUrl={Idiomas}
          />
          <img src={Arrow} alt="Logo" className="arrow" />

          <InformationCard
            title="Work Experience"
            text="⬻ +2 years of experience working in multinational companies, improving skills in software development. "
            secoundText="⬻ Undestanding of team work and dynamics, worked with both in person and online-virtual teams, to maintain and also develop from zero applications."
            imageUrl={Work}
          />
        </div>

        <div id="email" className="message-container">
          <div>
            <ImageWithText image={carrousel1} />
          </div>
          <EmailForm />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
