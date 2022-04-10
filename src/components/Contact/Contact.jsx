import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div className="contactCon">
      <div className="contactCon_left">
        <input
          type="text"
          className="contactCon_left_Name   "
          placeholder="Name"
        />
        <input
          type="text"
          className="contactCon_left_Email  "
          placeholder="Email"
        />
        <input
          type="text"
          className="contactCon_left_Message"
          placeholder="Message"
        />
        <a class="css-button">
          <span class="css-button-icon">
            <i class="fa fa-send-o" aria-hidden="true"></i>
          </span>
          <span class="css-button-text">send</span>
        </a>
      </div>
      <div className="contactCon_right">
        <div className="contactCon_right_Loc ri">
          <i class="fa-solid fa-location-dot" /> saudi arabia{" "}
        </div>
        <div className="contactCon_right_Number  ri ">
          <i class="fa-solid fa-phone" />
          +966 56 8688 135{" "}
        </div>
        <div className="contactCon_right_Email ri ">
          <i class="fa-solid fa-envelope" />
          amfqqq@gmail.com{" "}
        </div>
        <div className="contactCon_right_Logos  ri">
          <ul className="social-media-list">
            <li onClick={()=>window.open("https://github.com/qanx")} >
              <a   target="_blank" className="contact-icon">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            {/* <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa-brands fa-codepen"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa-brands fa-twitter" aria-hidden="true"></i>
              </a>
            </li> */}
            <li onClick={()=>window.open("https://www.linkedin.com/in/ali-alqahtani-989b418b")} >
              <a href="#" target="_blank" className="contact-icon">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
