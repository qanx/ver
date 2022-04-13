import React from "react";
import "./projects.css";
import img1 from './Screenshot 2022-04-13 024551.jpg'
function Projects() {
  return (
    <div className="projectsContainer">
      <h1 className="projectsContainer_title">Projects : </h1>
    <div className="projects">
      <div className="project p1">
        <div className="project_img">
          <img src={img1} />
        </div>
        <div className="project_text">
          <h3>URL shortener</h3>
          <p>
          ShortURL allows to reduce long links,
          I used MERN Stack to build this project,
          </p>
        </div>
        <div className="project_butoon">
          <a onClick={()=>window.open("https://u.qanx.me/")} class="css-button">
            <span class="css-button-icon">
              <svg
                width="16"
                height="16"
                viewBox="2 2 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.887 9.2l-.964-.165A2.5 2.5 0 105.5 14h10a1.5 1.5 0 00.237-2.982l-1.038-.164.216-1.028a4 4 0 10-7.843-1.587l-.185.96zm9.084.341a5 5 0 00-9.88-1.492A3.5 3.5 0 105.5 15h9.999a2.5 2.5 0 00.394-4.968c.033-.16.06-.324.077-.49z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span class="css-button-text">its alive</span>
          </a>
        </div>
      </div>
      <div className="project">
        <div className="project_img">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"  />
        </div>
        <div className="project_text">
          <h3> Blog</h3>
          <p>
            a simple blog allows to Do CRUD operations, creating 
            posts reading, deleting and updaing.

          </p>
        </div>
        <div className="project_butoon">
          <a   onClick={()=>window.open("https://github.com/qanx/Blog-MERN-Stack")} class="css-button">
            <span class="css-button-icon">
              <svg
                width="16"
                height="16"
                viewBox="2 2 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.887 9.2l-.964-.165A2.5 2.5 0 105.5 14h10a1.5 1.5 0 00.237-2.982l-1.038-.164.216-1.028a4 4 0 10-7.843-1.587l-.185.96zm9.084.341a5 5 0 00-9.88-1.492A3.5 3.5 0 105.5 15h9.999a2.5 2.5 0 00.394-4.968c.033-.16.06-.324.077-.49z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span class="css-button-text">github</span>
          </a>
        </div>
      </div>
      <div className="project">
        <div className="project_img">
          <img src="https://www.propatel.com/wp-content/uploads/2019/09/coding-and-testing-programming-of-software.jpg" />
        </div>
        <div className="project_text">
          <h3> this one Also</h3>
          <p>
            using only pure css building this website,
            and of course there will be new projects.
          </p>
        </div>
        <div className="project_butoon">
          <a onClick={()=>window.open("https://github.com/qanx/ver")} class="css-button">
            <span class="css-button-icon">
              <svg
                width="16"
                height="16"
                viewBox="2 2 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.887 9.2l-.964-.165A2.5 2.5 0 105.5 14h10a1.5 1.5 0 00.237-2.982l-1.038-.164.216-1.028a4 4 0 10-7.843-1.587l-.185.96zm9.084.341a5 5 0 00-9.88-1.492A3.5 3.5 0 105.5 15h9.999a2.5 2.5 0 00.394-4.968c.033-.16.06-.324.077-.49z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span class="css-button-text">github</span>
          </a>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Projects;
