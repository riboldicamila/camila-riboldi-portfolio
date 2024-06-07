import React, { useState } from "react";
import MyWorkCard from "./MyWorkCard";
import TextCard from "./TextCard";

import swissMedia from "./swissMedia-html.png";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import WorkInProgress from "../WorkInProgress/WorkInProgress";
import PortfolioProject from "../MyWork/portfolio-project.png";
import CoorporateProject from "../MyWork/coding.jpg";

import "./MyWork.css";

function MyWork() {
  const [show, setShow] = useState();

  return show ? (
    <WorkInProgress
      text={
        "Stay tuned, in the next iterations, some tabs such as 'Work' will be added, and responsiveness will be improved."
      }
    />
  ) : (
    <div className="my-work-tab">
      <div className="banner">
        <h2>Check out some of my work!</h2>
      </div>

      <div className="knowledge-cards">
        <TextCard
          icon={Diversity2Icon}
          title={"Teamwork is Essential"}
          text={
            "My bachelor's degree gave me a solid grasp of how organizations work and why teamwork matters."
          }
        />
        <TextCard
          icon={TravelExploreIcon}
          title={"Don't Limit Yourself"}
          text={
            "Technology is always evolving. I believe in finding what you love but also staying open to new technologies."
          }
        />
        <TextCard
          icon={AutoAwesomeIcon}
          title={"Listening is Key"}
          text={
            "Don't build something unnecessary. Understand the real needs first."
          }
        />
        <TextCard
          icon={BrokenImageIcon}
          title={"Design and Usability"}
          text={" Know your user, try to break things, then fix them."}
        />
      </div>

      <div className="card-block">
        <MyWorkCard
          image={swissMedia}
          title="SwissMedia"
          text="In this project, you'll find a website created with HTML and CSS, featuring experiments with Sass, Flexbox, and general frontend concepts.
          To develop this site, I started with wireframes and thoughtfully designed the layout of each tab and page. The final product is deployed and available at GitHub Pages.
          The project uses several libraries and technologies, including:
          HTML,
          CSS,
          Sass,
          Bootstrap,
          Google Fonts,
          Animate.css.
          Explore the various features and styles incorporated in this project!"
          findMore={
            "https://riboldicamila.github.io/swissmedia-basic-html-saas/"
          }
        />
        <MyWorkCard
          image={PortfolioProject}
          title="My portfolio"
          text="In this project, you'll find a portfolio website created with React and Material UI, showcasing experiments with various frontend technologies and concepts. Is deployed and available on Vercel.
                The project leverages several libraries and technologies, including:
                React, Functional Components, Hooks,
                Material UI,
                Emotion,
                GSAP,
                Animate.css,
                React Router DOM,
                React Material UI Carousel,
                Google Fonts.
                Explore the various features and styles incorporated in this project and see how different animations and interactions enhance the user experience!"
          findMore={"https://camila-riboldi.vercel.app/"}
        />
        <MyWorkCard
          image={CoorporateProject}
          title="Corporate Projects"
          text="In my career, I've worked on corporate projects both with CMS and build from scratch applications. I'm experienced in React, using both functional and class components, and I've used tools like Bootstrap, React Router, and various hooks. I've applied these skills to build functional and user-friendly interfaces for different projects. "
          findMore={"https://camila-riboldi.vercel.app/"}
        />
      </div>
    </div>
  );
}

export default MyWork;
