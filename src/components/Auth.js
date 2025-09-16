import React from 'react'
import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <div>
      <div className="container my-3">
        <h1>User Account</h1>
        <p className="lead">Please enter username and password for the login or create account</p>
      </div>
      <Outlet />
    </div>
  );
}

export default Auth;