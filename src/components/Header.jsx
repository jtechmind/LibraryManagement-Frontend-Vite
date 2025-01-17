import React from "react";
import "../assets/styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Library Management</div>
      <nav>
        <a href="/books">Books</a>
        <a href="/user/signup">Signup</a>
        <a href="/user/login">Login</a>
      </nav>
    </header>
  );
}

export default Header;
