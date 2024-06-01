import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "../WorkInProgress/WorkInProgress.css";

function WorkInProgress({text}) {
  return (
    <div className="in-progress" style={{ textAlign: "center", paddingTop: "50px" }}>
      <animated.div>
        <h2>Work in Progress...</h2>
        <p>{text}</p>
      </animated.div>
      <animated.div style={{ marginTop: "20px" }}>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
            stroke="#0080ff"
            opacity="0.5"
          />
        </svg>
      </animated.div>
    </div>
  );
}

export default WorkInProgress;
