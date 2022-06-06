import React, { useState, useEffect, useContext } from "react";
import "./Home.css";

import home from "../../Assets/images/home.svg";
import prev from "../../Assets/images/prev_btn.svg";
import next from "../../Assets/images/next_btn.svg";
import prevd from "../../Assets/images/prev_btn_disabled.svg";
import nextd from "../../Assets/images/next_btn_disabled.svg";
import writing from "../../Assets/images/writing.svg";

import { Navbar, JobCard, ApplicantModal } from "../../components";

import { MainContext } from "../../contexts/MainContext";

function Home() {
  const { user } = useContext(MainContext);
  const [pbtn, setPbtn] = useState(false);
  const [nbtn, setNbtn] = useState(true);
  const [pgn, setPgn] = useState(1);
  const [jobLimit, setJobLimit] = useState(0);
  const [data, setData] = useState([]);
  const [lightHeight, setLightHeight] = useState([]);

  function pageIns() {
    if (pgn === 1) setPbtn(true);
    setPgn(pgn + 1);
  }
  function pageDes() {
    if (pgn === 2) setPbtn(false);
    setPgn(pgn - 1);
  }
  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", user.token);

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page=" + pgn, requestOptions)
      .then((response) => response.json())
      .then(({ data, success }) => {
        if (success === false) {
          console.log("NO DATA");
        } else {
          setJobLimit(Math.floor(data.metadata.count / 20));
          setData(data.data);
          // setData([]);
        }
      })
      .catch((error) => console.log("error", error));
  }, [user.token, pgn]);

  useEffect(() => {
    if (data.length > 0) setTimeout(setLightHeight(document.querySelector(".container_bttm").clientHeight), 500);
  }, [data]);

  useEffect(() => {
    if (pgn === jobLimit) setNbtn(true);
    else setNbtn(false);
    if (pgn === jobLimit + 1) setNbtn(false);
    else setNbtn(true);
  }, [pgn, jobLimit]);

  return (
    <>
      <ApplicantModal />
      <div className="App">
        <div className="dark_section dark_home">
          <Navbar type="home" />
          <div className="container">
            <div className="home_row">
              <img src={home} alt="" />
              <span>Home</span>
              <div>Jobs posted by you</div>
            </div>
          </div>
        </div>
        {data.length > 0 && (
          <div className="light_section light_home" style={{ height: lightHeight + "px" }}>
            <div className="container" style={{ position: "relative" }}>
              <div className="container_bttm">
                <div className="card_container">
                  {data.map((d) => (
                    <JobCard
                      key={d.id}
                      title={d.title ? d.title : ""}
                      description={d.description ? d.description : ""}
                      location={d.location ? d.location : ""}
                      id={d.id}
                    />
                  ))}
                  <div className="dummy"></div>
                  <div className="dummy"></div>
                  <div className="dummy"></div>
                </div>
                <div className="pagination">
                  {pbtn ? <img src={prev} className="active" alt="" onClick={pageDes} /> : <img src={prevd} alt="" />}
                  <div className="page_num">{pgn}</div>
                  {nbtn ? <img src={next} className="active" alt="" onClick={pageIns} /> : <img src={nextd} alt="" />}
                </div>
              </div>
            </div>
          </div>
        )}
        {data.length === 0 && (
          <div className="light_section light_home empty_page">
            <img src={writing} alt="" />
            <div className="dtext">Your posted jobs will show here!</div>
            <button className="blue_btn">Post a Job</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
