import { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "./Input";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [passwordTouched, setPasswordTouched] = useState<boolean>(false);

  const [emailErrorMsg, setEmailErrorMsg] = useState<string>("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>("");

  const { t } = useTranslation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (emailErrorMsg || passwordErrorMsg) {
      return;
    }

    console.log("log in");
    //Make the api call to log in the user
  };

  const checkPassword = () => {
    const containNumber = /^(?=.*[0-9])/;
    const containSpecial = /(?=.[!@#$%^&(),.?":{}|<>])/;
    const containLower = /(?=.*[a-z])/;
    const containUpper = /^(?=.*[A-Z])/;
    if (passwordValue.length < 8) {
      setPasswordErrorMsg("Password must be at least 8 characters");
    } else if (!containNumber.test(passwordValue)) {
      setPasswordErrorMsg("Password must contain a number");
    } else if (!containSpecial.test(passwordValue)) {
      setPasswordErrorMsg("Password must contain special character");
    } else if (!containLower.test(passwordValue)) {
      setPasswordErrorMsg("Password must contain lowercase letter");
    } else if (!containUpper.test(passwordValue)) {
      setPasswordErrorMsg("Password must contain uppercase letter");
    } else {
      setPasswordErrorMsg("");
    }
  };

  const checkEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    setEmailErrorMsg(emailPattern.test(email) ? "" : "Email is not valid");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
    setPasswordTouched(true);
    checkPassword();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailTouched(true);
    checkEmail();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          value={email}
          type="email"
          placeholder="Email"
          onChange={handleEmailChange}
          onBlur={() => setEmailTouched(true)}
          label="Email"
          required={true}
        />
        {emailTouched && emailErrorMsg && <p>{emailErrorMsg}</p>}
        <Input
          value={passwordValue}
          label="password"
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          onBlur={() => setPasswordTouched(true)}
          required={true}
        />
        {passwordTouched && passwordErrorMsg && <p>{passwordErrorMsg}</p>}
        <button type="submit">{t("signInPage.title")}</button>
      </form>
    </>
  );
};

export default SignIn;
