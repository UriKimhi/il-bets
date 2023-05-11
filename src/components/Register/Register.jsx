import React from "react";
import Input from "../Input";
import "./register.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstname: yup.string().min(2).required(),
  lastname: yup.string().min(2).required(),
  username: yup.string().required(),
  email: yup
    .string()
    .required()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "email is not valid!"
    ),
  password: yup.string().min(6).max(15).required(),
  confirmpwd: yup
    .string()
    .oneOf([yup.ref("password")], "password does not match")
    .required(),
});

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div className="RegisterPage">
      <div className="form-container2">
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="form-group">
            <Input
              id="firstname"
              label="FirstName"
              type="text"
              placeholder="Enter First Name"
              register={{ ...register("firstname") }}
              errorMessage={errors.firstname?.message}
            />
          </div>
          <div className="form-group">
            <Input
              id="lastname"
              label="Lastname"
              type="text"
              placeholder="Enter Last Name"
              register={{ ...register("lastname") }}
              errorMessage={errors.lastname?.message}
            />
          </div>
          <div className="form-group">
            <Input
              id="username"
              label="Username"
              type="text"
              placeholder="Enter User Name"
              register={{ ...register("username") }}
              errorMessage={errors.username?.message}
            />
          </div>
          <div className="form-group">
            <Input
              id="email"
              label="Email"
              type="text"
              placeholder="Enter Email"
              register={{ ...register("email") }}
              errorMessage={errors.email?.message}
            />
          </div>
          <div className="form-group">
            <Input
              id="password"
              label="Password"
              type="text"
              placeholder="Enter Password"
              register={{ ...register("password") }}
              errorMessage={errors.password?.message}
            />
          </div>
          <div className="form-group">
            <Input
              id="confirmpwd"
              label="Confirm Password"
              type="text"
              placeholder="confirm Password"
              register={{ ...register("confirmpwd") }}
              errorMessage={errors.confirmpwd?.message}
            />
          </div>
          <button type="submit" className="btn  LoginButtonStyle">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
