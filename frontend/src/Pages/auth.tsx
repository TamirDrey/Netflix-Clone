import { useCallback, useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import LanguagePicker from "../components/LanguagePicker";
import { useTranslation } from "react-i18next";

const Auth = () => {
  const [variant, setVariant] = useState<string>("login");
  const { t } = useTranslation();

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" alt="Logo" />
        </nav>
        <LanguagePicker/>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? (t("signInPage.title")): (t("signUpPage.title"))}
            </h2>
            <div>
              {variant === "login" ? <SignIn /> : <SignUp />}
              <p className="text-neutral-500 mt-12">
                {variant === "login"
                  ? (t("signInPage.firstLogin"))
                  : (t("signUpPage.haveAccount"))}
                <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                  {variant === "login" ? (t("signUpPage.creat")) : (t("signInPage.login"))}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;

