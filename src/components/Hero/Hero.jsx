import React from "react";
import hero from "./hero.png";
import "./hero.css";
function Hero() {
  return (
    <div className="Hero">
      <div className="Hero_left">
        <div className="Hero_left_title">Real Coding</div>
        <div className="Hero_left_prograph">
          <p>
          Hello ! 
          I'm web developer  "MERN Stack"
          </p>
        </div>
        <div className="Hero_left_buttons">
          <a onClick={()=>window.open("https://docs.google.com/document/d/1WhjexzqDB6VlpCEsYmtTnEqR3qG8deYkTuvkGFxgQec/edit?usp=sharing")} className="css-button">
            <span className="css-button-icon">
              <svg
                width="16"
                height="16"
                viewBox="2 2 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.828 5h3.982a2 2 0 011.992 2.181l-.637 7A2 2 0 0115.174 16H4.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L2.5 5a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 0011.828 5zm-8.322.12C3.72 5.042 3.95 5 4.19 5h5.396l-.707-.707A1 1 0 008.172 4H4.5a1 1 0 00-1 .981l.006.139z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span className="css-button-text">my resume</span>
          </a>

          <a onClick={()=> window.location.replace("/contact")} className="css-button">
            <span className="css-button-icon">
              <svg
                width="16"
                height="16"
                viewBox="2 2 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.243 8.929l.514-.858L10 12.417l7.243-4.346.514.858L10 13.583 2.243 8.93z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M9.184 12.68l-6.432 3.752-.504-.864 6.432-3.752.504.864zm1.632 0l6.432 3.752.504-.864-6.432-3.752-.504.864z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M10.47 3.318a1 1 0 00-.94 0l-6 3.2A1 1 0 003 7.4V16a1 1 0 001 1h12a1 1 0 001-1V7.4a1 1 0 00-.53-.882l-6-3.2zm-1.41-.883a2 2 0 011.882 0l6 3.2A2 2 0 0118 7.4V16a2 2 0 01-2 2H4a2 2 0 01-2-2V7.4a2 2 0 011.059-1.765l6-3.2z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span  className="css-button-text">contact</span>
          </a>

          {/* <button className="projects">Projects</button>
          <button className="contact">Contact</button> */}
        </div>
      </div>
      <div className="Hero_right">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
