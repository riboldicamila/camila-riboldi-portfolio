import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./nav-logo.png";
import "./Navbar.css";
import PrimaryButton from "../Button/PrimaryButton";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarClass, setNavbarClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > scrollPosition) {
        setNavbarClass("navbar-slide-up");
      } else {
        setNavbarClass("navbar-slide-down");
      }
      setScrollPosition(currentScrollPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className={`navbar ${navbarClass}`}>
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
