import React from 'react';
import './ImageWithText.css';

const ImageWithText = ({ image, text }) => {
  return (
    <div className="card-text">
      <img src={image} alt="Image" className="card-text-image" />
      <div className="card-text-overlay">
        <div className="card-text-overlay-text">{text}</div>
      </div>
    </div>
  );
};

export default ImageWithText;
