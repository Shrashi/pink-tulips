import React from "react";
import styled from "styled-components";

const DivStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #e9e4f5;
  z-index: 100;
`;
const Backdrop = ({ onClickBackdrop }) => {
  return <DivStyled onClick={onClickBackdrop} />;
};

export default Backdrop;
