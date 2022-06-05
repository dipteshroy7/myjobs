import React from "react";
import "./Home.css";

import home from "../../Assets/images/home.svg";

import { Navbar } from "../../components";

function Home() {
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
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card dummy"></div>
            <div className="card dummy"></div>
            <div className="card dummy"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
