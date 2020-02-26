import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="btns-container">
        <span className="btns">
          <Link to="/dashboard/admin">Admin</Link>
        </span>
        <span className="btns">
          <Link to="/dashboard/teacher">Teacher</Link>
        </span>
        <span className="btns">
          <Link to="/dashboard/parent">Parent</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
