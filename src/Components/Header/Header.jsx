import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

export default function Header() {
  return (
    <nav className="header-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="/order">Order</a>
        <a href="/inventory">Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}
