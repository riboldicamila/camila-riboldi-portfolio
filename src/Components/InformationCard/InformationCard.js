import React from "react";
import "./InformationCard.css";

const InformationCard = ({ title, text, imageUrl, secoundText, thirdText }) => {
  return (
    <div className="information-card">
      <div className="information-card-content">
        <h1 className="information-card-title">{title}</h1>
        <p className="information-card-text">{text}</p>
        <p className="information-card-text">{secoundText}</p>
        <p className="information-card-text">{thirdText}</p>

      </div>
      <div className="information-card-bottom">
        <img src={imageUrl} alt="Card" className="information-card-image" />
      </div>
    </div>
  );
};

export default InformationCard;
