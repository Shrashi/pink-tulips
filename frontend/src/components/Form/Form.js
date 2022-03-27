import React, { useState } from "react";
import TextField from "../Field/TextField";
import styled from "styled-components";
import { FormItems } from "./FormItems";
import Button from "../Button/Button";
const TextFieldStyled = styled(TextField)`
  margin-top: 120px;
  width: 100px;
  height: 90px;
  background: #000;
  padding: 15px 15px;
  display: inline-block;
`;
const FormFieldStyled = styled.div`
  margin: 20px;
`;
const FormNameStyled = styled.div`
  font-size: 40px;
  color: #32a89b;
  margin-bottom: 5px;
`;
const Form = ({ formName }) => {
  const [formState, setFormState] = useState({});
  const onFormSubmit = () => {
    console.log("Details Submitted");
  };
  const onFieldChange = (e) => {
    let n = e.target.name;
    let v = e.target.value;
    setFormState((f) => {
      return { ...f, [n]: v };
    });
  };
  console.log("Form state is", formState);
  return (
    <div>
      <FormNameStyled>{formName}</FormNameStyled>
      {FormItems.map((ele) => {
        return (
          <FormFieldStyled key={ele.id}>
            {ele.fieldName}{" "}
            <TextFieldStyled
              id={ele.id}
              type={ele.type}
              helperText={ele.helperText}
              label={ele.label}
              required={ele.required}
              fieldName={ele.fieldName}
              onChangeField={onFieldChange}
            />
          </FormFieldStyled>
        );
      })}
      <Button style={{ padding: "15px 15px" }} onClick={onFormSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Form;
