import { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "./Input.tsx";
import { useSigninMutation } from "../store/services/auth-api";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const navigate = useNavigate();

  const [singin] = useSigninMutation();

  const { t } = useTranslation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await singin({
      email: emailValue,
      password: passwordValue,
    });
    navigate("/home");
  };
  const validateEmail = (email: string): boolean => {
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
          <div className="flex flex-col gap-4">
            <Input
              type="email"
              label={t("form.email")}
              onChange={(value) => setEmailValue(value)}
              validate={validateEmail}
              required={true}
            />
            <Input
              label={t("form.password")}
              type="password"
              onChange={(value) => setPasswordValue(value)}
              validate={validatePassword}
              required={true}
            />
            <button
              type="submit"
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {t("signInPage.button")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
