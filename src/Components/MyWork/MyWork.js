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
import MinamalisticWeb from "../MyWork/minimalistic-web.png";
import DailyPanel from "../MyWork/daily-panel.png";

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
      <div className="knowledge-cards">
        <TextCard
          icon={Diversity2Icon}
          title="Frontend - UI"
          text={
            "React. Funcional and class components. Hooks. React Query. Testing with: RTL-Jest"
          }
        />
        <TextCard
          icon={TravelExploreIcon}
          title="Backend & DB"
          text={
            "Implementation of services in backend layers, connection to database. Python and SQL."
          }
        />
        <TextCard
          icon={AutoAwesomeIcon}
          title="Agile metodologies"
          text="Scrum in a 15+ people worldwide team. Using Jira for tracking, integrated with Bitbucket."
        />
        <TextCard
          icon={BrokenImageIcon}
          title="Design and Usability"
          text="Past roles mainly focused on frontend and UI improvements."
        />
      </div>

      <div className="card-block">
        <MyWorkCard
          image={DailyPanel}
          projectName="Daily Panel"
          technologies="React, Functional Components, API connections, Axios, Hooks, Material UI, React Router DOM, Google Fonts"
          purpose="App in progress. "
          deployment="Vercel"
          findMore={"https://daily-panel-rosy.vercel.app/"}
        />

        <MyWorkCard
          image={PortfolioProject}
          projectName="Projects & Portfolio"
          technologies="React, Functional Components, Hooks, Material UI, Emotion, GSAP, Animate.css, React Router DOM, React Material UI Carousel, Google Fonts"
          purpose="Design and build a professional landing page using React, incorporating libraries and routing for a dynamic user experience."
          deployment="Vercel"
          findMore={"https://camila-riboldi.vercel.app/"}
        />

        <MyWorkCard
          image={MinamalisticWeb}
          projectName="Minimal Web Design"
          technologies="React, CSS, Bootstrap, React Icons"
          purpose="Practice with React, creating a minimalist design and page. Without routing."
          deployment="Vercel"
          findMore={"https://minimalistic-web-sample.vercel.app/"}
        />

        <MyWorkCard
          image={swissMedia}
          projectName="Swiss Media"
          technologies="HTML, CSS, Sass, Bootstrap, Google Fonts, Animate.css"
          purpose="Responsive websites, create your own website design. Basic html & css. Use of diverse libraries."
          deployment="GitHub Pages"
          findMore={
            "https://riboldicamila.github.io/swissmedia-basic-html-saas/"
          }
        />

        <MyWorkCard
          image={CoorporateProject}
          projectName="Corporate projects"
          technologies="React, Css, Internal Companies owned component libraries based on bootstrap, Python, SQL, Scrum, Jira, Bitbucket. CD/CI (pipelines automatization tools such as jenkins). "
          findMore={"https://camila-riboldi.vercel.app/"}
        />
      </div>
    </div>
  );
}

export default MyWork;
