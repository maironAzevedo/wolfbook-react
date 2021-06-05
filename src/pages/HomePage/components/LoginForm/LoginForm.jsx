import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../../../context/globalContext";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const { handleLogin } = useContext(Context);

  const user = {
    user: {
      email,
      password,
    },
  };

  return (
    <>
      <div className="form">
        <fieldset>
          <h2>Realize seu Login</h2>
          <Input
            key="email"
            placeholder="Seu E-mail"
            input={email}
            setInput={setEmail}
            type="text"
          />
          <Input
            key="password"
            placeholder="Sua senha"
            input={password}
            setInput={setPassword}
            type="password"
          />
          <button onClick={() => handleLogin(history, user)}>Acessar</button>
          <a href="">Esqueci minha senha</a>
        </fieldset>
      </div>
    </>
  );
}

export default LoginForm;
