import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material"; // Updated import
import axios from "axios";

const LoginForm = ({ baseUrl, onClose }) => {
  const [username, setUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [usernameRequired, setUsernameRequired] = useState(false);
  const [loginPasswordRequired, setLoginPasswordRequired] = useState(false);

  const loginClickHandler = async () => {
    setUsernameRequired(username === "");
    setLoginPasswordRequired(loginPassword === "");

    if (username && loginPassword) {
      try {
        console.log("user",username);
        console.log("Base64 Authorization String:", window.btoa(username + ":" + loginPassword));

        const response = await axios.post(`${baseUrl}auth/login`,{username: username,
          password: loginPassword,}, 
          {
          headers: {

            "Content-Type": "application/json",

          },
        });
     console.log('res'+response.data.token);
        sessionStorage.setItem("uuid", response.data.uuid);
        sessionStorage.setItem(

         "access-token",
          response.headers["token"] || response.data["token"]
        );
        onClose(); // Close modal on success
      } catch (error) {
        console.error("Login failed:", error);
      }
    }
  };

  return (
    <div>
      <FormControl required error={usernameRequired} fullWidth margin="normal">
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormHelperText>
          {usernameRequired && <span className="red">required</span>}
        </FormHelperText>
      </FormControl>
      <FormControl
        required
        error={loginPasswordRequired}
        fullWidth
        margin="normal"
      >
        <InputLabel htmlFor="loginPassword">Password</InputLabel>
        <Input
          id="loginPassword"
          type="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <FormHelperText>
          {loginPasswordRequired && <span className="red">required</span>}
        </FormHelperText>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={loginClickHandler}
        fullWidth
      >
        LOGIN
      </Button>
    </div>
  );
};

export default LoginForm;