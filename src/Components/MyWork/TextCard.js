import React from "react";
import "./TextCard.css";

const TextCard = ({ icon: Icon, title, text }) => {
  return (
    <div className="text-card">
      <div className="text-card-icon">
        <Icon sx={{ fontSize: 30 }} />
      </div>
      <div className="text-card-title">{title}</div>
      <div className="text-card-text">{text}</div>
    </div>
  );
};

export default TextCard;
