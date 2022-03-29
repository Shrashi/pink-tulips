export const checkRequired = (data, fieldName) => {
  if (!data[fieldName]) {
    return `${fieldName} is required`;
  } else {
    return "";
  }
};
export const checkLength = (data, minLength, maxLength, fieldName) => {
  if (data[fieldName].length < minLength) {
    return `${fieldName} requires atleast ${minLength} characters`;
  } else if (data[fieldName].length > maxLength) {
    return `${fieldName} cannot have more than ${maxLength} characters`;
  } else {
    return "";
  }
};
export const validatePassword = (exp, fieldName, data) => {
  if (exp.test(data[fieldName])) {
    return "";
  } else {
    return `${fieldName} must contain alphanumeric and special characters`;
  }
};
