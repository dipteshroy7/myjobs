import React from "react";
import "./Login.css";

import { Navbar, LoginModal } from "../../components";

// import { MainContext } from "../../contexts/MainContext";

function Login() {
  // const { user, setUser } = useContext(MainContext);

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
