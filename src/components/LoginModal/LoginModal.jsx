import React, { useContext } from "react";
import "./LoginModal.css";
import { toast } from "react-toastify";

import { MainContext } from "../../contexts/MainContext";

function LoginModal() {
  const { setUser, setSpin } = useContext(MainContext);

  function handleLogin(e) {
    e.preventDefault();
    // let data = { email: "squareboat@gmail.com", password: "squareboat" };
    // let data = { email: "sb@gmail.com", password: "squareboat" };

    let user_email = document.getElementById("input_email").value;
    let user_pass = document.getElementById("input_pass").value;

    let data = { email: user_email, password: user_pass };

    setSpin(true);

    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      redirect: "follow",
    };

    fetch("https://jobs-api.squareboat.info/api/v1/auth/login", requestOptions)
      .then((response) => response.json())
      .then(({ data, success }) => {
        if (success === false) {
          document.querySelector(".unsuccessfull_txt").style.display = "block";
        } else {
          document.querySelector(".unsuccessfull_txt").style.display = "none";
          setUser(data);
          toast("You have successfully logged in.");
        }
        setSpin(false);
      })
      .catch((error) => {
        setSpin(false);
        console.log("error", error);
      });
  }

  return (
    <div className="login_modal">
      <form onSubmit={handleLogin}>
        <div className="heading">Login</div>
        <div className="title">Email address</div>
        <input id="input_email" className="input_field" type="email" placeholder="Enter your email" required />
        <div className="title">Password</div>
        <input id="input_pass" className="input_field" type="password" placeholder="Enter your password" required />
        <button type="submit" className="blue_btn">
          Login
        </button>
        <span className="unsuccessfull_txt">Incorrect email address or password.</span>
      </form>
    </div>
  );
}

export default LoginModal;
