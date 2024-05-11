import { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "./Input.tsx";
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
    }).then(() => {
      navigate("/");
    });
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
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            label={t("form.name")}
            onChange={(value: string) => setNameValue(value)}
            validate={checkName}
            required={true}
          />
          <Input
            type="email"
            label={t("form.email")}
            onChange={(value: string) => setEmailValue(value)}
            validate={checkEmail}
            required={true}
          />
          <Input
            label={t("form.password")}
            type="password"
            onChange={(value: string) => setPasswordValue(value)}
            validate={checkPassword}
            required={true}
          />
          <button
            type="submit"
            className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
          >
            {t("signUpPage.button")}
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
