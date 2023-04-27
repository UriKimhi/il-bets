import React from "react";
import "./Login.css";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Btn from "../btn/btn";
const Loginschema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Loginschema),
  });

  console.log(errors);

  const LoginSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="LoginPage">
      <form onSubmit={handleSubmit(LoginSubmit)}>
        <div className="form-group">
          <Input
            id="username"
            label="Username"
            type="text"
            placeholder="Enter User Name"
            register={{ ...register("username") }}
            errorMessage={errors.username?.message}
          />
          <small id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </small>
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
        <Btn classname="LoginButtonStyle" type="submit" text="Login"></Btn>
      </form>
    </div>
  );
};

export default Login;
