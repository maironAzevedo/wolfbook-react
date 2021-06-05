import React from "react";

import "./Input.css";

function InputText({ key, placeholder, input, setInput, type }) {
  return (
    <>
      {type === "text" ? (
        <div className="input-area">
          <label htmlFor={key}>{placeholder}</label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name={key}
          />
        </div>
      ) : (
        <div className="input-area">
          <label htmlFor={key}>{placeholder}</label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="password"
            name={key}
            secureTextEntry={true}
          />
        </div>
      )}
    </>
  );
}

export default InputText;
