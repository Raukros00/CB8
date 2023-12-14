import React from "react";
import "./index.css";
import logo from "../../assets/logoipsum-253.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="navbar">
          <li>Home</li>
          <li>About us</li>
          <li>Shop</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
