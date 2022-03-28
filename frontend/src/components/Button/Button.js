import React from "react";
import styled from "styled-components";
import "./button.css";

const ButtonStyled = styled.button`
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 18px;
  color: #ffff;
  background-color: ${({ theme }) => theme.background.primary};
  min-width: 135px;
  cursor: pointer;
  :hover {
    background-color: #a744cf;
    transition: all 0.3s ease-out;
  }
`;

const Button = ({ children, onClick, className }) => {
  return (
    <ButtonStyled onClick={onClick} className={className}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
