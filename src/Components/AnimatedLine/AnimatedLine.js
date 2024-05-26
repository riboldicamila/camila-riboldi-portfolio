import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const AnimatedLine = () => {
  const lineRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    const text = textRef.current;

    gsap.fromTo(
      line,
      { x: '-100%' },
      { x: '100%', ease: 'none', repeat: -1, duration: 20 }
    );

    gsap.to(text, {
      x: () => line.getBoundingClientRect().width,
      ease: 'none',
      repeat: -1,
      duration: 20,
    });
  }, []);

  return (
    <div style={{ position: 'relative', height: '10px' }}>
      <div ref={lineRef} style={{ height: '10px', backgroundColor: 'black' }} />
      <div ref={textRef} style={{ position: 'absolute', top: '-20px', whiteSpace: 'nowrap' }}>
        Welcome, let's create!
      </div>
    </div>
  );
};

export default AnimatedLine;