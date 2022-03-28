import React, { useState, useEffect } from "react";

const useFormErrors = (data, rules) => {
  const [errObj, setErrObj] = useState({});
  const [reqObj, setReqObj] = useState({});
  useEffect(() => {
    onResult();
  }, [data]);
  const checkRequired = (data, fieldName) => {
    if (!data[fieldName]) {
      return `${fieldName} is required`;
    } else {
      return "";
    }
  };
  const checkLength = (data, minLength, maxLength, fieldName) => {
    if (data[fieldName].length < minLength) {
      return `${fieldName} requires atleast ${minLength} characters`;
    } else if (data[fieldName].length > maxLength) {
      return `${fieldName} cannot have more than ${maxLength} characters`;
    } else {
      return "";
    }
  };

  const onResult = () => {
    const error = {};
    const require = {};
    rules.forEach((ele) => {
      let errorStr = "";
      let reqStr = "";
      if (ele.required) {
        reqStr = checkRequired(data, ele.fieldName);
      }
      if (ele.maxLength && ele.minLength && !errorStr) {
        errorStr = checkLength(
          data,
          ele.minLength,
          ele.maxLength,
          ele.fieldName
        );
      }
      error[ele.fieldName] = errorStr;
      require[ele.fieldName] = reqStr;
    });

    setErrObj(error);
    setReqObj(require);
  };
  return [errObj, reqObj];
};

export default useFormErrors;
