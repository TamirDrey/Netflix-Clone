import { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "./Input";
import { useSignupMutation } from "../store/services/auth-api";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const navigate = useNavigate();

  const [signup] = useSignupMutation();

  const { t } = useTranslation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signup({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
    navigate("/signin")
  };

  const checkPassword = (password: string) => {
    const containNumber = /^(?=.*[0-9])/;
    const containSpecial = /(?=.[!@#$%^&(),.?":{}|<>])/;
    const containLower = /(?=.*[a-z])/;
    const containUpper = /^(?=.*[A-Z])/;
    return (
      containNumber.test(password) &&
      containSpecial.test(password) &&
      containLower.test(password) &&
      containUpper.test(password)
    );
  };

  const checkEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const checkName = (name: string) => {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Name"
          placeholder="Name"
          onChange={(value) => setNameValue(value)}
          validate={checkName}
          required={true}        
        />
        <Input
          type="email"
          label="Email"
          placeholder="Email"
          onChange={(value) => setEmailValue(value)}
          validate={checkEmail}
          required={true}
        />
        <Input
          label="password"
          type="password"
          placeholder="Password"
          onChange={(value) => setPasswordValue(value)}
          validate={checkPassword}
          required={true}
        />
        <button type="submit">{t("signUpPage.title")}</button>
      </form>
    </>
  );
};

export default SignUp;
