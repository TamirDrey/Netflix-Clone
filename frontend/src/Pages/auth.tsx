import { useCallback, useState } from "react";
//import axios from "axios";

const Auth = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  //const [profilePicture, setProfilePicture] = useState(""); TODO

  const [variant, setVariant] = useState<string>("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // try {
    //   if (variant === "register") {
    //     await axios.post("http://localhost:8080/api/v1/users/signup", {
    //       name,
    //       email,
    //       password,
    //       profilePicture: "", // Add profile picture if needed
    //     });
    //     console.log("Registration successful");
    //   } else {
    //     const response = await axios.post(
    //       "http://localhost:8080/api/v1/users/signin",
    //       {
    //         email,
    //         password,
    //       }
    //     );
    //     console.log("Token:", response.data.token);
    //     localStorage.setItem("userToken", response.data.token); // Do something with the token, like storing it in local storage
    //   }
    //   // Handle success scenario or redirect user
    // } catch (error) {
    //   console.error("Error:", error.response.data.message);
    //   // Handle error scenario, show error message to user etc.
    // }
  };

  return (
    <div>
      <h2>{variant === "login" ? "Sign in" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        {variant === "register" && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* <input
          type="img"
          placeholder="profile Picture"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
        /> */}
        <button type="submit">
          {variant === "login" ? "Login" : "Register"}
        </button>
        <p>
          {variant === "login"
            ? "first time using Netflix?"
            : "Already have an account?"}
          <span onClick={toggleVariant}>
            {variant === "login" ? "create an account" : "login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Auth;
