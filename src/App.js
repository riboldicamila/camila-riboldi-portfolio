import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home"; // Import your Home component (and so on...)
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AboutMe from "./Components/AboutMe";
import MyWork from "./Components/MyWork/MyWork";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/my-work" element={<MyWork />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
