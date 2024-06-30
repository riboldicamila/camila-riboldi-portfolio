import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const AnimatedLine = () => {
  const lineRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    const text = textRef.current;
    const screenWidth = window.innerWidth;

    const lineWidth = line.getBoundingClientRect().width;
    const textWidth = text.getBoundingClientRect().width;

    gsap.fromTo(
      line,
      { x: -lineWidth },
      { x: screenWidth, ease: "none", repeat: -1, duration: 20 }
    );

    gsap.fromTo(
      text,
      { x: -textWidth },
      { x: screenWidth, ease: "none", repeat: -1, duration: 20 }
    );
  }, []);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "30px",
      }}
    >
      <div
        ref={lineRef}
        style={{
          position: "absolute",
          height: "10px",
          width: "100%",
          backgroundColor: "black",
        }}
      />
      <div
        ref={textRef}
        style={{ position: "absolute", top: "10px", whiteSpace: "nowrap" }}
      >
        Welcome, let's create!
      </div>
    </div>
  );
};

export default AnimatedLine;
