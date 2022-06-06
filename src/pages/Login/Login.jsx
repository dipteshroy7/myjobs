import React from "react";
import "./Login.css";

import { Navbar, LoginModal } from "../../components";

function Login() {

  return (
    <div className="App">
      <div className="dark_section dark_login">
        <Navbar type="login" />
        <LoginModal />
      </div>
      <div className="light_section light_login"></div>
    </div>
  );
}

export default Login;
