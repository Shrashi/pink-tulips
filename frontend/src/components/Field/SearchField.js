import React, { useState } from "react";
import styled from "styled-components";
import "../Field/searchField.css";

const DivStyled = styled.div`
  margin-left: 20px;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const InpStyled = styled.input`
  height: 36.8px;
  width: 300px;
  @media (max-width: 768px) {
    width: inherit;
  }
`;
const SearchField = ({
  defaultValue,
  name,
  size,
  height,
  value,
  onChangeField,
}) => {
  return (
    <DivStyled>
      <InpStyled
        type="text"
        placeholder={defaultValue}
        name={name}
        value={value}
        onChange={onChangeField}
      />
    </DivStyled>
  );
};
export default SearchField;
