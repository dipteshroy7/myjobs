import React from "react";

import "./Spinner.css";

import spin from "../../Assets/images/spin.gif";

function Spinner() {
  return (
    <div className="spinner_background" style={{display: "none"}}>
      <div className="spinner_container" />
      <img className="spinner" src={spin} alt="" />
    </div>
  );
}

export default Spinner;
