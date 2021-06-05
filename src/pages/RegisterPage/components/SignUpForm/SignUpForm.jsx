import React, { useState } from "react";

import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <Button
            clickFunction={() => console.log("teste")}
            label="Criar conta"
          />
          <a href="">Esqueci minha senha</a>
        </fieldset>
      </div>
    </>
  );
}

export default SignUpForm;
