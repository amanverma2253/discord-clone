import React from "react";
import { auth, provider } from "./firbase";

import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <h2>This is a login page.</h2>
      <div className="login__logo">
        <img
          src="https://files.brandlogos.net/svg/nAMr39DXwW/discord-logo-38120dCk_brandlogos.net.svg"
          alt="logo"
        />
      </div>
      <button onClick={signIn}>Sign In </button>
    </div>
  );
}

export default Login;
