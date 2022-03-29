export const formRules = [
  {
    required: true,
    fieldName: "name",
    minLength: 4,
    maxLength: 30,
  },
  {
    required: true,
    fieldName: "address",
    minLength: 10,
    maxLength: 150,
  },
  {
    required: true,
    fieldName: "contactNumber",
    minLength: 10,
    maxLength: 10,
  },
  {
    required: true,
    fieldName: "email",
    minLength: 14,
    maxLength: 254,
  },
  {
    required: true,
    fieldName: "password",
    minLength: 10,
    maxLength: 30,
    regex: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  },
];
