import React from "react";
import "./TextCard.css"; // Importing the CSS file for styling

const TextCard = ({ icon: Icon, title, text }) => {
  return (
    <div className="card">

      <div className="card-icon"> <Icon /></div>
      <div className="card-title">{title}</div>
      <div className="card-text">{text}</div>
    </div>
  );
};

export default TextCard;
