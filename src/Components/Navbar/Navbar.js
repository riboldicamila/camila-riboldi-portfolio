import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="logo-image" />
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about-me" className="nav-link">
            About Me
          </Link>
          <Link to="/my-work" className="nav-link">
            Work
          </Link>
          <a
            href="https://www.linkedin.com/in/camila-riboldi/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-button"
          >
            Linkedin
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
