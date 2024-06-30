import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo-yellow.png";
import "./Navbar.css";
import PrimaryButton from "../Button/PrimaryButton";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarClass, setNavbarClass] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`navbar ${navbarClass}`}>
      <nav className="navbar-container">
        <div className="navbar-logo">
          <a href="/home">
            <img src={Logo} alt="Logo" className="logo-image" />
          </a>
        </div>
        <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about-me" className="nav-link animate__pulse">
            About Me
          </Link>
          <Link to="/my-work" className="nav-link">
            Work
          </Link>
          <PrimaryButton
            href="https://www.linkedin.com/in/camila-riboldi/"
            text="Linkedin"
          />
        </div>
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
