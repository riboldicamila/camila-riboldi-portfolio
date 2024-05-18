import React from "react";
import HomeCard from "../Home/HomeCard";
import "./AboutMe.css";

import university from "./uba-photo.jpg";
import languages from "./languages-photo.jpg";
import courses from "./courses-photo.jpg";

function AboutMe() {
  return (
    <div className="card-container">
      <HomeCard
        image={university}
        title="Bachelors Degree"
        text="bkakabakabka"
      />
      <HomeCard
        image={languages}
        title="Courses and Trainnings"
        text="bkakabakabka"
      />
      <HomeCard
        image={courses}
        title="Languages for Communication"
        text="bkakabakabka"
      />
    </div>
  );
}

export default AboutMe;
