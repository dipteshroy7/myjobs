import React from "react";
import "./WhyCard.css";

function WhyCard({title, txt}) {
  return (
    <div className="why_card">
      <div className="why_title">{title}</div>
      <div className="txt">{txt}</div>
    </div>
  );
}

export default WhyCard;
