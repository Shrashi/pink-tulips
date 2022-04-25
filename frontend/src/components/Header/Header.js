import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { menuItems } from "./menuItems";
import Button from "../Button/Button.js";
import SearchField from "../Field/SearchField";
import DrawerButton from "../SideDrawer/DrawerButton";
import useDimension from "../../hooks/useDimension";
import "./header.css";

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
  @media (max-width: 768px) {
    width: 100%;
    display: block;
    height: 140px;
  }
`;
const SIWrapperStyled = styled.div`
  width: 40px;
  height: 36.8px;
  background: ${({ theme }) => theme.background.secondary};
  @media (max-width: 768px) {
    background: ${({ theme }) => theme.background.primary};
  }
`;
const SearchIconStyled = styled(FaSearch)`
  height: 30px;
  width: 30px;
  margin: 4px;
`;
const StyledSearchField = styled(SearchField)`
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = ({ logo, onIcon, drawerClickHandler }) => {
  const [state, setState] = useState(false);
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();
  const [windowWidth, windowHeight, screenSize] = useDimension();
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

  const onChangeSearchField = (e) => {
    setSearchField(e.target.value);
  };
  const HeaderComp =
    screenSize === "xs" || screenSize === "sm"
      ? MobileHeaderMenu
      : DesktopHeaderMenu;
  return (
    <NavStyled>
      <HeaderComp
        logo={logo}
        onChangeSearchField={onChangeSearchField}
        onClickLogo={onClickLogo}
        searchField={searchField}
      />

      <div className="drawer-button-wrapper">
        <DrawerButton onClickDrawer={drawerClickHandler} />
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

const DesktopHeaderMenu = ({
  logo,
  onClickLogo,
  searchField,
  onChangeSearchField,
}) => {
  return (
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

      <StyledSearchField
        size="60"
        height="50"
        defaultValue="Search..."
        name="search-field"
        value={searchField}
        onChangeField={onChangeSearchField}
      />
      <SIWrapperStyled>
        <SearchIconStyled></SearchIconStyled>
      </SIWrapperStyled>
    </div>
  );
};

const MobileHeaderMenu = ({
  logo,
  onClickLogo,
  searchField,
  onChangeSearchField,
}) => {
  return (
    <div>
      <div className="mobile-header-logo">
        <span className="navBar-logo" onClick={onClickLogo}>
          Pink Tulips
        </span>
        <img
          src={logo}
          width="80"
          height="80"
          alt="nav-logo"
          className="nav-logo-img"
        />
      </div>
      <span className="mobile-search-field">
        <StyledSearchField
          size="30"
          height="40"
          defaultValue="Search..."
          name="search-field"
          value={searchField}
          onChangeField={onChangeSearchField}
        />
        <SIWrapperStyled>
          <SearchIconStyled></SearchIconStyled>
        </SIWrapperStyled>
      </span>
    </div>
  );
};
