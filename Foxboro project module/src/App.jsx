import React from "react";
import Forgot from "./pages/Forgot/forgot";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import User from "./pages/UserProfile/userProfile";
import ResetPassword from "./pages/Forgot/resetPassword";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Login /> />
          <Route path="/signup" element=<Signup /> />
          <Route path="/reset" element=<ResetPassword /> />
          <Route path="/forgot" element=<Forgot /> />
          <Route path="/user" element=<User /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
