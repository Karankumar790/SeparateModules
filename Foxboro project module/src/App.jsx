import React from "react";
import User from "./pages/UserProfile/userProfile";
import Forgot from "./pages/Forgot/forgot";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ResetPassword from "./pages/Forgot/resetPassword";
function App() {
  return (
    <div>
      {/* <User/> */}
      {/* <Forgot/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/reset" element=<ResetPassword /> />
          <Route path="/forgot" element=<Forgot /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
