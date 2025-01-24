import React from "react";
import Forgot from "./pages/Forgot/forgot";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import User from "./pages/UserProfile/userProfile";
import Organization from "./pages/Organization/oraganization";

import ResetPassword from "./pages/Forgot/resetPassword";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Login /> />
          <Route path="/reset" element=<ResetPassword /> />
          <Route path="/forgot" element=<Forgot /> />
          <Route path="/user" element=<User /> />
          <Route path="/organization" element=<Organization /> />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
