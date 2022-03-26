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
`;

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  className,
}) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default Button;
