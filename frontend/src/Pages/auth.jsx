import React, { useCallback, useState } from "react";
import axios from "axios";

const auth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (variant === "register") {
        await axios.post("http://localhost:8080/api/v1/users/signup", {
          name: username,
          email,
          password,
          profilePicture: "", // Add profile picture if needed
        });
      } else {
        const response = await axios.post(
          "http://localhost:8080/api/v1/users/signin",
          {
            email,
            password,
          }
        );
        console.log("Token:", response.data.token); // Do something with the token, like storing it in local storage
      }
      // Handle success scenario or redirect user
    } catch (error) {
      console.error("Error:", error.response.data.message);
      // Handle error scenario, show error message to user etc.
    }
  };

  return (
    <div>
      <h2>{variant === "login" ? "Sign in" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        {variant === "register" && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

export default auth;