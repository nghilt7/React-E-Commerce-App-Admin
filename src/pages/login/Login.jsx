import React from "react";
import { useState } from "react";
import { login } from "./../../redux/apiCalls";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <input
        style={{ padding: 10 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={{ padding: 10, width: "100px", cursor: "pointer" }}
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
