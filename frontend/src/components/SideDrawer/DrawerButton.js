import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  height: 36px;
  width: 30px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background: transparent;
  margin: 4px;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const DivStyled = styled.div`
  width: 30px;
  height: 4px;
  margin-top: 2px;
  margin-bottom: 4px;
  background: ${({ theme }) => theme.background.secondary};
`;
const DrawerButton = ({ onClickDrawer }) => {
  return (
    <ButtonStyled onClick={onClickDrawer}>
      <DivStyled />
      <DivStyled />
      <DivStyled />
    </ButtonStyled>
  );
};

export default DrawerButton;
