import React from "react";
import "./ImageWithText.css";

const ImageWithText = ({ image, text, subtitle, description }) => {
  return (
    <div className="about-me-card">
      <div className="card-text">
        <img src={image} alt="Image" className="card-text-image" />
        <div className="card-text-overlay">
          <div className="card-text-overlay-text">{text}</div>
        </div>
      </div>
      <div className="text-container">
        <div className="text-subtitle">{subtitle}</div>
        <div className="text-description">{description}</div>
      </div>
    </div>
  );
};

export default ImageWithText;
