import React, { useState, useEffect } from "react";
import {
  checkLength,
  checkRequired,
  validatePassword,
} from "../../utils/utils";
const useFormErrors = (data, rules) => {
  const [errObj, setErrObj] = useState({});
  const [reqObj, setReqObj] = useState({});
  useEffect(() => {
    onResult();
  }, [data]);

  const onResult = () => {
    const error = {};
    const require = {};
    rules.forEach(({ required, fieldName, minLength, maxLength, regex }) => {
      let errorStr = "";
      let reqStr = "";
      if (required) {
        reqStr = checkRequired(data, fieldName);
      }
      if (maxLength && minLength && !errorStr) {
        errorStr = checkLength(data, minLength, maxLength, fieldName);
      }
      if (regex) {
        errorStr = validatePassword(regex, fieldName, data);
      }
      error[fieldName] = errorStr;
      require[fieldName] = reqStr;
    });

    setErrObj(error);
    setReqObj(require);
  };
  return [errObj, reqObj];
};

export default useFormErrors;
