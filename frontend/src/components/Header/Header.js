import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import Button from "../Button/Button.js";
import SearchField from "../Field/SearchField";
import "./header.css";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const NavStyled = styled.nav`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.background.primary} 0%,
    ${({ theme }) => theme.background.secondary} 100%
  );
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
`;
const SIWrapperStyled = styled.div`
  width: 40px;
  height: 36.8px;
  background: ${({ theme }) => theme.background.secondary};
`;
const SearchIconStyled = styled(FaSearch)`
  height: 30px;
  width: 30px;
  margin: 4px;
`;
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
    <NavStyled>
      <div className="menu-icon">
        <img
          src={logo}
          width="80"
          height="80"
          alt="nav-logo"
          className="nav-logo-img"
        />
        <div className="navBar-logo">Pink Tulips</div>

        <SearchField
          size="60"
          height="50"
          defaultValue="Search..."
          name="search-field"
        />
        <SIWrapperStyled>
          <SearchIconStyled></SearchIconStyled>
        </SIWrapperStyled>
      </div>

      {/* <div className="search-field-bar">
        <SearchField
          size="60"
          height="50"
          defaultValue="Search..."
          name="search-field"
        />
        <Button buttonSize="btn--medium">Search</Button>
      </div> */}
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
    </NavStyled>
  );
};

export default Header;
