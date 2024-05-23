// import * as Yup from 'yup';

import { object, string, ref } from "yup";

export const signUpSchema = object({
    name: string().min(3).max(25).required("Name is Required"),
    email: string().email().required("Email is Required"),
    // mobile: string().min(10).matches(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/).required("mobile is Required"),
    mobile: string().min(10).matches(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/, "Mobile must Indian No.").required("mobile is Required"),
    password: string().min(6).required("Password is Required"),
    cpassword: string().required().oneOf([ref('password'), null], "Password must match")
})  