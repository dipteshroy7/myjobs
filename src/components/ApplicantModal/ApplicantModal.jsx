import React, { useContext } from "react";

import "./ApplicantModal.css";

import cross from "../../Assets/images/cross.svg";
import curriculum from "../../Assets/images/curriculum.svg";

import { ApplicantCard } from "../";

import { MainContext } from "../../contexts/MainContext";

function ApplicantModal() {
  const { applicantsData, setApplicantsData } = useContext(MainContext);

  function closeModal() {
    document.querySelector("html").style.overflow = "auto";
    document.querySelector(".modal_background").style.display = "none";
    setApplicantsData(null);
  }

  return (
    <div className="modal_background">
      <div className="modal_container">
        <div className="application_modal">
          <div className="application_modal_heading">
            <span>Applicants for this job</span>
            <img src={cross} alt="" style={{ cursor: "pointer" }} onClick={closeModal} />
          </div>
          <div className="applications">
            {applicantsData ? "Total " + applicantsData.length + " applications" : "0 applications"}
          </div>
          {applicantsData ? (
            <div className="application_box active">
              {applicantsData.map((data) => (
                <ApplicantCard key={data.id} email={data.email} name={data.name} skills={data.skills} />
              ))}
            </div>
          ) : (
            <div className="application_box">
              <img className="curriculum" src={curriculum} alt="" />
              <span>No applications available!</span>
            </div>
          )}
        </div>
        <div className="dot">.</div>
      </div>
      <div className="transperent"></div>
    </div>
  );
}

export default ApplicantModal;
