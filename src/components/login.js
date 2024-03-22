import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogged, setUsername }) => {
  const [loginUsername, setLoginUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  //NAVIGATION
  const navigate = useNavigate();

  const dummyUserObject = {
    username: "Kolosafo",
    password: "12345",
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      loginUsername === dummyUserObject.username &&
      password === dummyUserObject.password
    ) {
      setUsername(loginUsername);
      setIsLogged(true);
      navigate("/authProfile");
    } else {
      setErrorMsg("Invalid Credentials");
    }
  };
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <span className="error-span">{errorMsg}</span>
      <label htmlFor="username" className="login-label">
        Username
      </label>
      <input
        type="text"
        name="username"
        value={loginUsername}
        onChange={(e) => {
          setLoginUsername(e.target.value);
          setErrorMsg("");
        }}
        className="login-inp"
        placeholder="username"
      />
      <label htmlFor="password" className="login-label">
        Password
      </label>
      <input
        type="password"
        name="password"
        value={password}
        className="login-inp"
        onChange={(e) => {
          setPassword(e.target.value);
          setErrorMsg("");
        }}
        placeholder="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
