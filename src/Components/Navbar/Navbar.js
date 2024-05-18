import React from "react";
import { Link } from "react-router-dom";
import Logo from "./nav-logo.png";
import "./Navbar.css";
import PrimaryButton from "../Button/PrimaryButton";

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
          <Link to="/about-me" className="nav-link animate__pulse">
            About Me
          </Link>
          <Link to="/my-work" className="nav-link">
            Work
          </Link>
        </div>
        <div>
          <PrimaryButton
            href="https://www.linkedin.com/in/camila-riboldi/"
            text="Linkedin"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
