import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Footer.css";
import IconWithText from "../IconText/IconText";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-info">
          <h2>CONTACT ME:</h2>
          <div className="decorative-icons">
            <IconWithText text="Email: cami.riboldi@gmail.com" />
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
          <h2>MENU:</h2>
          <div className="decorative-icons">
            <IconWithText text={<Link to="/">Home</Link>} />
            <IconWithText text={<Link to="/about">About Me</Link>} />
            <IconWithText text={<Link to="/work">Work</Link>} />
          </div>
        </div>
        <div>
          <a href="#top" className="back-to-top">
            Back to Top
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Camila Riboldi. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
