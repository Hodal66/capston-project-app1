import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ComfirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="registerAnimation">
      <div className="container-frm">
        <Link to="/">
          <span className="close">❌</span>
        </Link>
        <form className="form-container">
          <h1 className="heading">Register</h1>

          <div className="main-content">
            <div className="input-section">
              <label for="firstName">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your Full Name"
                id="FirstName"
              />
              <label for="email" required>
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Your Email"
                id="Email"
              />
              <label for="password">password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="**********"
                id="password"
              />
              <label for="Comfirm">Comfirm password</label>
              <input
                type="password"
                value={ComfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="**********"
                id="Comfirm"
              />

              <input type="submit" value="Send" id="submit-button" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
