import React from "react";
import MyWorkCard from "./MyWorkCard";
import TextCard from "./TextCard";

import swissMedia from "./swissMedia-html.png";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";

import "./MyWork.css";

function MyWork() {
  return (
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
          title="SwissMedia HTML || CSS"
          text="In this project, you'll find a website created with HTML and CSS, featuring experiments with Sass, Flexbox, and general frontend concepts.
          To develop this site, I started with wireframes and thoughtfully designed the layout of each tab and page. The final product is deployed and available at GitHub Pages.
          The project uses several libraries and technologies, including:
          HTML
          CSS
          Sass
          Bootstrap
          Google Fonts
          Animate.css
          Explore the various features and styles incorporated in this project!"
        />
        <MyWorkCard
          image={swissMedia}
          title="SwissMedia"
          text="dfjsljkgljdsjhds"
        />
        <MyWorkCard
          image={swissMedia}
          title="SwissMedia"
          text="dfjsljkgljdsjhds"
        />
      </div>
    </div>
  );
}

export default MyWork;
