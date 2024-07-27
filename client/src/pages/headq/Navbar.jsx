import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="vertical-navbar">
      <div className="navbar-title">
        <h1>Admin Dashboard</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-user">Create User</Link></li>
        <li><Link to="/take-order">Take Order</Link></li>
        <li><Link to="/show-reports">Show Reports</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/upskilling">Upskilling</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;