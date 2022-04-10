import React, { useRef } from "react";
import logo from "./Untitled.png";
import "./topBar.css";
import {
Link, NavLink
} from "react-router-dom";
function TopBar() {
  
  const titleRef = useRef()

  return (
    <div className="topbar">
      <div className="topbar_left">
        <img src={logo} alt="" className="topbar_left_img" />
        <span className="topbar_left_logoText">qanx</span>
      </div>
      <div className="topBar_right">
      <input className="check" id="menu_toggle" type="checkbox" />
    <label className='menu_button_container' htmlFor="menu_toggle">
    <div className='menu_button'></div>
    </label>
        <ul className="topBar_right_list">
            <li className="topBar_right_listItem" >
              <NavLink activeClassName="active" to="/">
              Home
          </NavLink>
              </li>
            <li className="topBar_right_listItem" >
            <NavLink activeClassName="active"  to="/projects">
            Projects
          </NavLink>
            </li>
            <li className="topBar_right_listItem contactText">
            
            <NavLink activeClassName="active"  to="/contact">
            contact ME .
          </NavLink>
            </li>
        </ul>

      </div>
    </div>
  );
}

export default TopBar;
