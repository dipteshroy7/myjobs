import React, { useContext } from "react";

import "./JobCard.css";

import location_icon from "../../Assets/images/location_icon.svg";

import { MainContext } from "../../contexts/MainContext";

function JobCard({ title, description, location, id }) {
  const { user, setApplicantsData, setSpin } = useContext(MainContext);

  function viewApplications(id) {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", user.token);

    setSpin(true);

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("https://jobs-api.squareboat.info/api/v1/recruiters/jobs/" + id + "/candidates", requestOptions)
      .then((response) => response.json())
      .then(({ data, success }) => {
        if (success === false) {
          console.log("NO DATA");
        } else {
          if (data) setApplicantsData(data);
        }
        document.querySelector("html").style.overflow = "hidden";
        document.querySelector(".modal_background").style.display = "block";
        setSpin(false);
      })
      .catch((error) => {
        setSpin(false);
        console.log("error", error);
      });
  }

  return (
    <div key={id} id={id} className="card">
      <div className="card_heading">{title}</div>
      <div className="card_body">{description}</div>
      <div className="card_footer">
        <div className="location">
          <img src={location_icon} alt="" />
          <div>{location}</div>
        </div>
        <button onClick={() => viewApplications(id)}>View Applications</button>
      </div>
    </div>
  );
}

export default JobCard;
