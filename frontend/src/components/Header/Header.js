import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import Button from "../Button/Button.js";
import "./header.css";
const Header = ({ logo, onIcon }) => {
  const [state, setState] = useState(false);
  const onBtnClick = () => {
    console.log("Button is clicked");
  };
  const onClickIcon = (ele) => {
    return () => {
      onIcon && onIcon(ele.title);
      console.log("Iam clicked", ele.title);
    };
  };
  return (
    <nav className="navBarItems">
      <div className="menu-icon">
        <img
          src={logo}
          width="80"
          height="80"
          alt="nav-logo"
          className="nav-logo-img"
        />
        <span className="navBar-logo">Pink Tulips</span>
      </div>

      <ul className={state ? "nav-menu-active" : "nav-menu"}>
        {MenuItems.map((ele, ind) => {
          return (
            <li key={ind} onClick={onClickIcon(ele)}>
              <a className={ele.cName} href={ele.url}>
                {ele.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button onClick={onBtnClick} className="sign-up-btn">
        Sign Up
      </Button>
    </nav>
  );
};

export default Header;
