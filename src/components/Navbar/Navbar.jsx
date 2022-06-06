import React, { useState, useContext } from "react";
import "./Navbar.css";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";

import logo from "../../Assets/images/MyJobs.png";
import down from "../../Assets/images/caret_down.svg";

import { MainContext } from "../../contexts/MainContext";

function Navbar({ type }) {
  const { user, setUser } = useContext(MainContext);

  const [showLogout, setShowLogout] = useState(false);

  return (
    <nav>
      <div className="nav_container">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        {type === "index" && (
          <Link to="/login">
            <button className="login_btn">Login/Signup</button>
          </Link>
        )}
        {type === "home" && (
          <div className="profile" onMouseMove={() => setShowLogout(true)} onMouseLeave={() => setShowLogout(false)}>
            <div className="name_circle">{user.name.toUpperCase().charAt(0)}</div>
            <img src={down} alt="" />
            <Link to="/">
              <div
                className="logout_hover"
                onClick={() => {
                  setUser(null);
                  toast("You have successfully logged out.");
                }}
                style={{ display: showLogout ? "block" : "none" }}
              >
                Logout
                <div className="arrow"></div>
                <div className="shield"></div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
