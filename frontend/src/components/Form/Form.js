import React, { useState } from "react";
import styled from "styled-components";

import TextField from "../Field/TextField";
import { formItems } from "./formItems";
import Button from "../Button/Button";
import useFormErrors from "./useFormErrors";
import { formRules } from "./formRules";
const TextFieldStyled = styled(TextField)`
  margin-top: 120px;
  width: 100px;
  height: 90px;
  background: #000;
  padding: 15px 15px;
  display: inline-block;
`;
const FormFieldStyled = styled.div`
  margin-bottom: 20px;
`;
const FormWrapperStyled = styled.div`
  padding: 20px;
`;
const FormNameStyled = styled.div`
  font-size: 40px;
  color: #32a89b;
  margin-bottom: 5px;
`;
const Form = ({ formName, onFormSubmit, onFieldChange, formState }) => {
  const onSubmitForm = () => {
    onFormSubmit && onFormSubmit(formState);
  };

  console.log("form state is", formState);
  const [error, require] = useFormErrors(formState, formRules);

  return (
    <FormWrapperStyled>
      <FormNameStyled>{formName}</FormNameStyled>
      {formItems.map((ele) => {
        return (
          <FormFieldStyled key={ele.id}>
            {ele.label}{" "}
            <TextFieldStyled
              id={ele.id}
              type={ele.type}
              helperText={error[ele.fieldName]}
              requiredText={require[ele.fieldName]}
              label={ele.label}
              required={ele.required}
              name={ele.fieldName}
              onChangeField={onFieldChange}
              value={formState[ele.fieldName] || ""}
            />
          </FormFieldStyled>
        );
      })}
      <Button onClick={onSubmitForm}>Submit</Button>
    </FormWrapperStyled>
  );
};

export default Form;
