import React from "react";
import Login from "../login/Login";
import Home from "../home/Home";

function Container({ isLoggedIn }) {
  return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
}

export default Container;
