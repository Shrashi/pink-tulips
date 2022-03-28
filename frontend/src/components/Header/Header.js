import React, { useState } from "react";
import { menuItems } from "./MenuItems";
import Button from "../Button/Button.js";
import SearchField from "../Field/SearchField";
import "./header.css";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  width: 100vw;
  box-shadow: 2px 4px 40px 0px rgba(59, 59, 166, 0.75);
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
  const navigate = useNavigate();
  const onBtnClick = () => {
    navigate("/signUp");
  };
  const onClickLogo = () => {
    navigate("/home");
  };
  const onClickIcon = ({ title, url }) => {
    return () => {
      onIcon && onIcon(title);
      navigate(url);
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
        <div className="navBar-logo" onClick={onClickLogo}>
          Pink Tulips
        </div>

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

      <ul className={state ? "nav-menu-active" : "nav-menu"}>
        {menuItems.map((ele, ind) => {
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
