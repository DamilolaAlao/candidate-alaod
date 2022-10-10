import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const createAccountSchema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .trim()
      .email("Email is not valid")
      .required("Email is required"),
    password: yup
      .string()
      .trim()
      .min(6, "Password must be at least 6 characters.")
      .required("Password is required"),
    confirmPassword: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match'),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, {
        message: "Phone number is not valid",
        excludeEmptyString: true,
      })
      .notRequired(),
  })
  .required();
