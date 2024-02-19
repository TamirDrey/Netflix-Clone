import { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "./Input";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [nameErrorMsg, setNameErrorMsg] = useState("");

  const { t } = useTranslation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (nameErrorMsg || emailErrorMsg || passwordErrorMsg) {
      return;
    }

    console.log("register");
    //Make the api call to register the user
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

    if (!emailPattern.test(email)) {
      setEmailErrorMsg("Email is not valid");
    } else {
      setEmailErrorMsg("");
    }
  };

  const checkName = () => {
    const minLength = 3;
    const nameRegex = /^[A-Za-z]+$/;

    if (!name) {
      setNameErrorMsg("Name is required");
    } else if (name.length < minLength) {
      setNameErrorMsg("Name must be at least three characters long");
    } else if (!nameRegex.test(name)) {
      setNameErrorMsg("Name must contain only letters");
    } else {
      setNameErrorMsg("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
    checkPassword();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    checkEmail();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    checkName();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          value={name}
          type="text"
          placeholder="Name"
          onChange={handleNameChange}
          label="Name"
          required={true}
        />
        {nameErrorMsg && <p>{nameErrorMsg}</p>}
        <Input
          value={email}
          type="email"
          placeholder="Email"
          onChange={handleEmailChange}
          label="Email"
          required={true}
        />
        {emailErrorMsg && <p>{emailErrorMsg}</p>}
        <Input
          value={passwordValue}
          label="password"
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          required={true}
        />
        {passwordErrorMsg && <p>{passwordErrorMsg}</p>}
        <button type="submit">{t("signUpPage.title")}</button>
      </form>
    </>
  );
};

export default SignUp;
