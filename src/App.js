import React, { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { Landing, Login, Home } from "./pages";

import { MainContext } from "./contexts/MainContext";

function App() {
  let usd = localStorage.getItem("user");
  if (usd) usd = JSON.parse(usd);
  const [user, setUser] = useState(usd);

  useEffect(() => {
    if (user === null) localStorage.removeItem("user");
    else localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <MainContext.Provider
      value={{
        user,
        setUser,
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
    </MainContext.Provider>
  );
}

export default App;
