import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";

function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function login() {
    localStorage.setItem("emailKey", email);
    localStorage.setItem("passwordKey", password);
    navigate("/");
  }

  return (
    <div className="inputContainer">
      <div>
        {" "}
        <label for="email">email</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label for="password">password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={login}>login</button>
    </div>
  );
}

export default LoginPage;
