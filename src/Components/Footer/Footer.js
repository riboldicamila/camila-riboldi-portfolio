import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";
import IconWithText from "../IconText/IconText";

export default function Footer() {
  const footerBottomRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (footerBottomRef.current) {
      const rect = footerBottomRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTopAndNavigate = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-info">
          <h2>LET´S CONNECT</h2>
          <div className="decorative-icons">
            <IconWithText text="cami.riboldi@gmail.com" />
            <IconWithText
              text={
                <Link to="https://www.linkedin.com">
                  <LinkedInIcon />
                </Link>
              }
            />
          </div>
        </div>
        <div className="menu-info">
          <h2>MENU</h2>
          <div className="decorative-icons">
            <IconWithText
              text={
                <span onClick={() => scrollToTopAndNavigate("/")}>Home</span>
              }
            />
            <IconWithText
              text={
                <span onClick={() => scrollToTopAndNavigate("/about-me")}>
                  About Me
                </span>
              }
            />
            <IconWithText
              text={
                <span onClick={() => scrollToTopAndNavigate("/my-work")}>
                  Work
                </span>
              }
            />
          </div>
        </div>
        <div>
          <a href="#top" className="back-to-top">
            Back to Top
          </a>
        </div>
      </div>
      <div
        className={`footer-bottom ${isVisible ? "visible" : ""}`}
        ref={footerBottomRef}
      >
        <p>© 2024 Camila Riboldi. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
