import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="mainContainer">
      <h1 className="mylogoMHT">
        MHT<span className="mylogoHodol">Hodol</span>
      </h1>
      <div className="menuList">
        <ul>
          <li className="Home">
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skils</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <Link to="/sign-in">
              <button className="btn btn-success navBtn">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
