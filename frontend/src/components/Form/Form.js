import React, { useState } from "react";
import TextField from "../Field/TextField";
import styled from "styled-components";
import { FormItems } from "./FormItems";
import Button from "../Button/Button";
import useFormErrors from "./useFormErrors";
import { FormRules } from "./FormRules";
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
const Form = ({ formName }) => {
  const [formState, setFormState] = useState({
    name: "",
    address: "",
    contactNumber: "",
    email: "",
    password: "",
  });

  const validatePassword = (p) => {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(p);
  };
  const onFormSubmit = () => {
    if (validatePassword(formState.password)) {
      console.log("Details Submitted");
    } else {
      alert("Password must contain special character,alphanumeric characters.");
    }
  };
  const onFieldChange = (e) => {
    let n = e.target.name;
    let v = e.target.value;
    setFormState((f) => {
      return { ...f, [n]: v };
    });
  };
  console.log("Form state is", formState);
  const [error, require] = useFormErrors(formState, FormRules);
  console.log("the required is", require);
  console.log("the errors are", error);
  return (
    <FormWrapperStyled>
      <FormNameStyled>{formName}</FormNameStyled>
      {FormItems.map((ele) => {
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
      <Button onClick={onFormSubmit}>Submit</Button>
    </FormWrapperStyled>
  );
};

export default Form;
