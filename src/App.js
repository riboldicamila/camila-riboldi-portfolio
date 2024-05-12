import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home"; // Import your Home component (and so on...)
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar /> {/* Render the Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Map '/' path to Home */}
        {/* Add routes for other components (Testimonials, Contact, etc.) */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;