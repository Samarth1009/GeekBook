import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <form action="" className="container">
        <h1 style={{ textAlign: "center" }}>GeekBook</h1>
        Username
        <div>
          <input className="login_input" type="text" size="50" />
        </div>
        Password
        <div>
          <input className="login_input" type="password" />
        </div>
        <div>
          <input type="checkbox" />
          Remember me
        </div>
        <input type="submit" value="Login" className="login_btn" />
        Not having an account? &nbsp;
        <Link to="/signUp">sign up</Link>
      </form>
    </div>
  );
};
export default Login;
