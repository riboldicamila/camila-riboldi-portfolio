import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-info">
          <p>Contact me at: example@email.com</p>
          <p>
            <Link to="https://www.linkedin.com">LinkedIn</Link>
          </p>
          <p>© 2024 Your Name. All Rights Reserved.</p>
        </div>
        <div className="empty-middle"></div>
        <div className="back-to-top">
          <a href="#top">Back to Top</a>
        </div>
      </div>
    </footer>
  );
}
