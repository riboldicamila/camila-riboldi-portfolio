import React from 'react';
import './TextCard.css'; // Importing the CSS file for styling

const TextCard = () => {
  return (
    <div className="card">
      <div className="card-icon">Icon</div>
      <div className="card-title">Title</div>
      <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
  );
};

export default TextCard;
