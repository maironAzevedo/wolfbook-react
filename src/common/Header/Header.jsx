import React from "react";
import "./Header.css";

function Header() {
  const title = "Wolf-Book";

  return (
    <header>
      <nav>
        <a href="/">{title}</a>
        <ul>
          <li>
            <a href="/register">Registre-se</a>
          </li>
          <li>
            <a href="/">Feed</a>
          </li>
          <li>
            <a href="/about-us">Quem Somos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
