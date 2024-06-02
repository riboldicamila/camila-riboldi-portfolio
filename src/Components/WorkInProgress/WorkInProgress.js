import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import LinearProgress from "@mui/joy/LinearProgress";

import "../WorkInProgress/WorkInProgress.css";
import AnimatedLine from "../AnimatedLine/AnimatedLine";

function WorkInProgress({ text }) {
  return (
    <div
      className="in-progress"
      style={{ textAlign: "center", paddingTop: "50px" }}
    >
      <animated.div>
        <h2>Work in Progress...</h2>
        <p>{text}</p>
      </animated.div>
      <LinearProgress
        variant="plain"
        color="warning"
        className="line-in-progress"
      />
    </div>
  );
}

export default WorkInProgress;
