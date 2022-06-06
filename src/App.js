import React, { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { Landing, Login, Home } from "./pages";

import { Spinner } from "./components";

import { MainContext } from "./contexts/MainContext";

function App() {
  let usd = localStorage.getItem("user");
  if (usd) usd = JSON.parse(usd);
  const [user, setUser] = useState(usd);
  const [applicantsData, setApplicantsData] = useState(null);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    if (user === null) localStorage.removeItem("user");
    else localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    if (spin) document.querySelector(".spinner_background").style.display = "block";
    else document.querySelector(".spinner_background").style.display = "none";
  }, [spin]);

  return (
    <MainContext.Provider
      value={{
        spin,
        setSpin,
        user,
        setUser,
        applicantsData,
        setApplicantsData,
      }}
    >
      <Router>
        <Routes>
          <Route path="/*" element={<Navigate replace to="/" />} />
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={user === null ? <Login /> : <Navigate replace to="/home" />} />
          <Route path="/home" element={user ? <Home /> : <Navigate replace to="/login" />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={2000} />
      <Spinner />
    </MainContext.Provider>
  );
}

export default App;
