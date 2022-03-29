import React from "react";
import styled from "styled-components";

const StyledHelperText = styled.div`
  font-size: 9px;
  color: #9f67db;
  font-weight: 600;
`;
const StyledRequiredText = styled.div`
  font-size: 9px;
  color: #9c0c11;
  font-weight: 600;
`;
const StyledInput = styled.input`
  height: 40px;
  width: 300px;
  border-radius: 4px;
  border: solid 3px ${({ theme }) => theme.background.secondary};
`;
const TextField = ({
  id,
  label,
  type = "text",
  required,
  helperText,
  requiredText,
  name,
  onChangeField,
  value,
}) => {
  const onChangeText = (e) => {
    onChangeField && onChangeField(e.target.name, e.target.value);
  };
  return (
    <>
      <StyledRequiredText>{requiredText}</StyledRequiredText>
      <StyledInput
        className="styled-input"
        id={id}
        type={type}
        placeholder={label}
        size="25"
        required={required}
        name={name}
        onChange={onChangeText}
        value={value}
      />
      <StyledHelperText>{helperText}</StyledHelperText>
    </>
  );
};
export default TextField;
