import { useCallback, useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Auth = () => {
  const [variant, setVariant] = useState<string>("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div>
      {variant === "login" ? <SignIn /> : <SignUp />}
      <p>
        {variant === "login"
          ? "first time using Netflix? "
          : "Already have an account? "}
        <span onClick={toggleVariant}>
          {variant === "login" ? "create an account" : "login"}
        </span>
      </p>
    </div>
  );
};

export default Auth;
