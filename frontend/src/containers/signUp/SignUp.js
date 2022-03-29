import React, { useState } from "react";
import Form from "../../components/Form/Form";
import styled from "styled-components";

const SignUp = () => {
  const [formState, setFormState] = useState({
    name: "",
    address: "",
    contactNumber: "",
    email: "",
    password: "",
  });
  const onFieldChange = (n, v) => {
    setFormState((f) => {
      return { ...f, [n]: v };
    });
  };
  const onFormSubmit = ({ name, address, contactNumber }) => {
    console.log(name, address, contactNumber);
  };
  return (
    <div>
      <Form
        formName="Consumer Sign In"
        onFieldChange={onFieldChange}
        formState={formState}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
};
export default SignUp;
