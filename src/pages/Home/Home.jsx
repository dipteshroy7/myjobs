import React, { useState } from "react";
import "./Home.css";

import home from "../../Assets/images/home.svg";
import prev from "../../Assets/images/prev_btn.svg";
import next from "../../Assets/images/next_btn.svg";
import prevd from "../../Assets/images/prev_btn_disabled.svg";
import nextd from "../../Assets/images/next_btn_disabled.svg";
// import writing from "../../Assets/images/writing.svg";

import { Navbar } from "../../components";

function Home() {
  const [bts, setBts] = useState([false, true]);
  const [pgn, setPgn] = useState(1);

  function pageIns() {
    if (pgn === 1) setBts([true, bts[1]]);
    setPgn(pgn + 1);
  }
  function pageDes() {
    if (pgn === 2) setBts([false, bts[1]]);
    setPgn(pgn - 1);
  }

  return (
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
      <div className="light_section light_home">
        <div className="container">
          <div className="card_container">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="dummy"></div>
            <div className="dummy"></div>
            <div className="dummy"></div>
          </div>
          <div className="pagination">
            {bts[0] ? <img src={prev} className="active" alt="" onClick={pageDes} /> : <img src={prevd} alt="" />}
            <div className="page_num">{pgn}</div>
            {bts[1] ? <img src={next} className="active" alt="" onClick={pageIns} /> : <img src={nextd} alt="" />}
          </div>
        </div>
      </div>
      {/* <div className="light_section light_home empty_page">
        <img src={writing} alt="" />
        <div className="dtext">Your posted jobs will show here!</div>
        <button className="blue_btn">Post a Job</button>
      </div> */}
    </div>
  );
}

export default Home;
