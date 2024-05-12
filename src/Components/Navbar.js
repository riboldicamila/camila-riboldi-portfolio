import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-logo-container">
          {/* <img src={Logo} alt="" /> */}
        </div>
        <div className="navbar-links-container">
          <Link to="/">Home</Link> {/* Link to the root path for Home */}
          <Link to="/about">About</Link>
          <button className="primary-button">Linkedin</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
