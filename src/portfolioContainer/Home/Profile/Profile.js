import React from "react";
import Typical from "react-typical";
import "./Profile.css";
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100008621834637&sk=archive">
                <i className=" fa fa-facebook-square"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCLpUS5vXGIujnI7pp59ksxw/featured">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCLpUS5vXGIujnI7pp59ksxw/featured">
                <i className=" fa fa-instagram"></i>
              </a>

              <a href="#tt">
                <i className=" fa fa-twitter"></i>
              </a>
            </div>
            <div className="profile-details">
              <span className="primary-text">
                Hello, I'M <span className="highlighted-text">Hodal</span>
              </span>
            </div>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 🤡",
                    1000,
                    "Full stack develloper 💻",
                    1000,
                    "Cross Platform V 🌐",
                    1000,
                    "MERN Stark Dev 😎",
                    1000,
                    "React/React Native Dev ⁉📲",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building application with front-end and back-end
                operation
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>

            <a href="ehizcv.pdf" download="Hodal ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
