import React from "react";
import "./ApplicantCard.css";

function ApplicantCard({ email, name, skills }) {
  return (
    <div className="applicant_card">
      <div className="applicant_top">
        <div className="name_circle">{name.charAt(0).toUpperCase()}</div>
        <div className="applicant_info">
          <div className="applicant_name">{name}</div>
          <div className="applicant_email">{email}</div>
        </div>
      </div>
      <div className="applicant_bottom">
        <div className="skills_title">Skills</div>
        <div className="applicant_skills">{skills}</div>
      </div>
    </div>
  );
}

export default ApplicantCard;
