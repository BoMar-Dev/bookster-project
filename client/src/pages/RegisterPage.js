/* 
On this page the user registers (if it does not have an admin/user) When the user has entered his information, 
it is registered in the api and the new user is forwarded to the page where the user logs in with the 
created credentials
*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterService } from "../components/Service/RegisterService";
import "../style/LoginPage.css";

export const RegisterPage = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await RegisterService(username, password).then(
        () => {
          navigate("/");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <div className="register-wrapper">
        <form className="register-form" onSubmit={handleRegister}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Type your username..."
            autoComplete="off"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}></input>
          <label>Password</label>
          <input
            type="password"
            placeholder="Type your password..."
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}></input>
          <button className="signin-btn" type="submit">
            Register new account
          </button>
        </form>
        <div className="guest-div">
          <p className="no-account-text">
            Already an account? Sign in <a href="/">here!</a>
          </p>
        </div>
      </div>
    </div>
  );
};
