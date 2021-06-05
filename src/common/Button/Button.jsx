import React from "react";

import "./Button.css";

function Button({ clickFunction, label }) {
  return <button onClick={clickFunction}>{label}</button>;
}

export default Button;
