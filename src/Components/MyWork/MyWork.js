import React from "react";
import "./MyWork.css";
import MyWorkCard from "./MyWorkCard";

import university from "../uba-photo.jpg";
import TextCard from "./TextCard";

function MyWork() {
  return (
    <div className="my-work-tab">
      <div className="banner">
        <h2>Lets get creative!</h2>
      </div>

      <div className="knowledge-cards">
        <TextCard />
        <TextCard />
        <TextCard />
        <TextCard />
      </div>

      <div className="card-block">
        <MyWorkCard
          image={university}
          title="SwissMedia"
          text="dfjsljkgljdsjhds"
        />
        <MyWorkCard
          image={university}
          title="SwissMedia"
          text="dfjsljkgljdsjhds"
        />
        <MyWorkCard
          image={university}
          title="SwissMedia"
          text="dfjsljkgljdsjhds"
        />
      </div>
    </div>
  );
}

export default MyWork;
