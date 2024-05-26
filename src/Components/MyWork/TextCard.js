import React from "react";
import "./TextCard.css";

const TextCard = ({ icon: Icon, title, text }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <Icon sx={{ fontSize: 30 }} />
      </div>
      <div className="card-title">{title}</div>
      <div className="card-text">{text}</div>
    </div>
  );
};

export default TextCard;
