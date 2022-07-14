import React from "react";
import ContactMeHeader from "../layout/ContactMeHeader";
import "./ContactMe.css";


function ContactMe() {
  return (
    <div>
      <ContactMeHeader />
        
    <div className="ContactContainer">
      <div className="GetInTouch">
        {/* <Typical
        loop={Infinity}
        steps={[
          "Hey!🌝Wellcome to my site!!🥰",1000,
          "I Hope That You are going to Write 👏",1000,
          "You the Best Luky to choose Me 🎲",1000,
          "Let Work Together We Can Achieve more",1000,
          "Stay With Me ☂︎",1000,

        ]}/> */}
        <h1>Get In Touch with Me 💌</h1>
        <div className="socialMedia">
            <a href="/">
                <i className="fa fa-facebook-square" />
            </a>

            <a href="/">
                <i className="fa fa-youtube-square" />
            </a>

            <a href="/">
                <i className="fa fa-instagram" />
            </a>

            <a href="/">
                <i className="fa fa-instagram" />
            </a>

        </div>
        <div className="your-email">
            <h6>Send your Email Here!🌞</h6>
        </div>
        <div className="myImage">

        </div>
      </div>
      <div className="FormContainer">
        <form>
          <h5>Thank you for contacting Hodal</h5>
          <div className="InputContainer">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="InputContainer">
            <label>Email</label>
            <input type="email"  />
          </div>
          <div className="InputContainer">
            <label>Message</label>
            <textarea rows="2" cols="10"  />
          </div>
          <div>
            <input type="submit" value="Send 🚀" />
          </div>
          
        </form>
      </div>
    </div>
    </div>
  );
}

export default ContactMe;
