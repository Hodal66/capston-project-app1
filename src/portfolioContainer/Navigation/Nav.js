import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="header">
      <div className="header-top">
        <h1 className="header-top-mht">
          MHT
          <span className="header-top-span" a>
            Hodol
          </span>
        </h1>
      </div>
      <div className="header-menu">
        <div className="home">Home</div>
        <div>AboutMe</div>
        <div>Resume</div>
        <div>ContactMe</div>
        <div>SignIn</div>
      </div>
    </div>
  );
}

export default Nav;
