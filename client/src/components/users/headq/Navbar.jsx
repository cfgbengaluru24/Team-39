import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">SHOLA</a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about">About</a>
          </li>
          <li className="navbar-item">
            <a href="/services">Services</a>
          </li>
          <li className="navbar-item">
            <a href="/contact">Contact</a>
          </li>
          <div className="navbar-login">
          <a href="/login" className="login-button">Login</a>
        </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
