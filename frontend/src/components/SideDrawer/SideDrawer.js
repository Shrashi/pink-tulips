import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  height: 100%;
  background: ${({ theme }) => theme.background.secondary};
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ListStyled = styled.ul`
  list-style: none;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const ItemsStyled = styled.a`
  color: ${({ theme }) => theme.background.primary};
  text-decoration: none;
  &:hover,
  active {
    color: #a83279;
  }
`;
const ListItemStyled = styled.li`
  margin: 5px 0;
`;
const SideDrawer = ({ drawerItems }) => {
  return (
    <StyledNav>
      <ListStyled>
        {drawerItems.map((item) => {
          return (
            <ListItemStyled key={item}>
              <ItemsStyled href={"/" + `${item}`}>{item}</ItemsStyled>
            </ListItemStyled>
          );
        })}
      </ListStyled>
    </StyledNav>
  );
};

export default SideDrawer;
