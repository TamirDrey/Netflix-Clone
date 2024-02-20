import { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "./Input";
import { useLoginMutation } from "../store/services/auth-api";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const navigate = useNavigate();

  const [singin] = useLoginMutation();

  const { t } = useTranslation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await singin({
      email: emailValue,
      password: passwordValue,
    });
    navigate("/home");
    console.log("log in");
  };
  const validateEmail = (email: string): boolean => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => {
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

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="email"
              label="Email"
              placeholder="Email"
              onChange={(value) => setEmailValue(value)}
              validate={validateEmail}
              required={true}
            />
            <Input
              label="password"
              type="password"
              placeholder="Password"
              onChange={(value) => setPasswordValue(value)}
              validate={validatePassword}
              required={true}
            />
            <button type="submit">{t("signInPage.title")}</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
