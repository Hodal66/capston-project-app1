import React, { useState } from "react";
import "../App.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="sign-in">
      <Link to="/">
        <span className="close">❌</span>
      </Link>
      <div className="container-frm">
        <form className="form-container">
          <h1 className="heading">Now Sign-In</h1>

          <div className="main-content">
            <div className="input-section">
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

              <p className="ForgotPassword">Forgot password ?</p>
              <Link to="/register">
                <p className="OrsignUp"> You don't Have an account ?</p>
              </Link>

              <input type="submit" value="Send" id="submit-button" />
              <div className="using-google">
                <FcGoogle className="icons" />
                <span> Or Sing-in With google</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

// import React from "react";

// function SignIn() {
//   return <div>SignIn</div>;
// }

// export default SignIn;
