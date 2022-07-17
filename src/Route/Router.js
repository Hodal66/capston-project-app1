import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import LandingPage from "../view/LandingPage";
import Register from "../view/RegisterPage";
import SignIn from "../view/SignIn";
function Router() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Router;
