import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AboutMe from "./Components/AboutMe/AboutMe";
import MyWork from "./Components/MyWork/MyWork";
import WorkInProgress from "./Components/WorkInProgress/WorkInProgress";
import "./App.css";
import "animate.css/animate.min.css";
import "balloon-css";

function App() {
  const isMobile = window.innerWidth < 768;

  function isPageUnderConstruction() {
    const underConstructionRoutes = [""];
    const currentRoute = window.location.pathname;

    return underConstructionRoutes.includes(currentRoute);
  }

  if (isMobile || isPageUnderConstruction()) {
    return <WorkInProgress text="Check it out in computer screen size!" />;
  }

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
