import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "../WorkInProgress/WorkInProgress.css";

function WorkInProgress() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);


  const spinnerAnimation = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    config: { duration: 1000 },
    reset: isLoading, 
  });

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <animated.div >
        <h2>Work in Progress...</h2>
        <p>Check it out in computer screen size!</p>
      </animated.div>
      {isLoading && (
        <animated.div style={{ ...spinnerAnimation, marginTop: "20px" }}>
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
      )}
    </div>
  );
}

export default WorkInProgress;
