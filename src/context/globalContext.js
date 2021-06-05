import React, { createContext, useState, useEffect } from "react";

import { create } from "../service/api";

const Context = createContext();

function GlobalProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      create.defaults.headers.Authorization = JSON.parse(token);
      setAuthenticated(true);
    }
  }, []);

  const handleLogin = (history, user) => {
    create
      .post("/login", user)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("userLogged", JSON.stringify(res.data.user));
        create.defaults.headers.Authorization = res.data.token;
        setAuthenticated(true);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = (history) => {
    localStorage.removeItem("userLogged");
    create.defaults.headers.Authorization = undefined;
    setAuthenticated(false);
    history.push("/login");
  };

  return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  );
}

export { Context, GlobalProvider };
