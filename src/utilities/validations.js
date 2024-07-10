import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
let EMAIL_REGX = `/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`;
const passwordSchema = {
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Message must be 8 characters")
    .max(25, "password must be less than 25 characters")
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //   "Must Contain 8 Characters One Number and one special case Character"
    // )
    // ,
  // password_confirmation: yup
  //   .string()
  //   .required("Confirm password is required ")
  //   .oneOf([yup.ref("password"), null], "Passwords must match"),
};
const changePasswordSchema = yup.object().shape({
  old_password: yup
    .string()
    .required("Please enter your password")
    .max(25, "password must be less than 25 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters One Number and one special case Character"
    ),
  new_password: yup
    .string()
    .required("Please enter your password")
    .max(25, "password must be less than 25 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters One Number and one special case Character"
    ),
  password_confirmation: yup
    .string()
    .required("Confirm password is required ")
    .oneOf([yup.ref("new_password"), null], "Passwords must match"),
});

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(100, "Name must be less than 100 characters"),
  email: yup
    .string()
    .required("Please enter your email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    ),
  ...passwordSchema,
  // accept_terms: yup
  //   .boolean()
  //   .oneOf([true], 'You must accept the terms and conditions'),
});

const logInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    ),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Message must be 8 characters")
    .max(25, "password must be less than 25 characters")
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //   "Must Contain 8 Characters One Number and one special case Character"
    // )
    ,
});
const editBasicInfo = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(100, "Name must be less than 100 characters"),
  email: yup
    .string()
    .required("Please enter your email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    ),
});

const forgetSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    ),
});

const verificationSchema = yup.object().shape({
  otp: yup
    .string()
    .required("Please enter valid OTP code")
    .max(4, "verification code must 4 characters"),
});

const updateProfileScheme = yup.object().shape({
  first_name: yup
    .string()
    .required("Please enter your first name")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(100, "Name must be less than 100 characters"),
  last_name: yup
    .string()
    .required("Please enter your last name")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(100, "Name must be less than 100 characters"),
  // email: yup.string().email().required('Please enter your email'),
});

const updatePaswordScheme = yup.object().shape({
  current_password: yup.string().required("Please enter old password"),
  new_password: yup
    .string()
    .required("Please enter your password")
    .max(25, "password must be less than 25 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  c_password: yup
    .string()
    .required("Confirm password is required ")
    .oneOf([yup.ref("new_password"), null], "Passwords must match"),
});

const addNumberSchema = yup.object().shape({
  phoneno: yup
    .string()
    .min(10, "Phone number must be of 10 characters")
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    )
    .required("Please enter the number"),
});

const emailSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    ),
});
const contactSchema = yup.object().shape({
  user_name: yup
    .string()
    .required("Please enter your name")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(100, "Name must be less than 100 characters"),
  user_email: yup
    .string()
    .required("Please enter your email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    ),
  message: yup
    .string()
    .required("Please enter message")
    .min(6, "Message must be grater than 5 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

const Schemas = {
  register: yupResolver(registerSchema),
  editBasicInfo: yupResolver(editBasicInfo),
  changePassword: yupResolver(changePasswordSchema),
  logIn: yupResolver(logInSchema),
  forget: yupResolver(forgetSchema),
  resetPassword: yupResolver(yup.object().shape(passwordSchema)),
  verification: yupResolver(verificationSchema),
  updateProfile: yupResolver(updateProfileScheme),
  updatePasword: yupResolver(updatePaswordScheme),
  addNumber: yupResolver(addNumberSchema),
  addEmail: yupResolver(emailSchema),
  contact: yupResolver(contactSchema),
};

export default Schemas;
