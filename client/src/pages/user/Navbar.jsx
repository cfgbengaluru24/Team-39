// src/pages/user/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="user-navbar">
      <h1 className="navbar-title">User Dashboard</h1>
      <nav className="user-nav">
        <ul>
          <li><Link to="create-worker">Create Worker</Link></li>
          <li><Link to="site-details">Site Details</Link></li>
          <li><Link to="create-machines">Create Machines</Link></li>
          <li><Link to="resource-management">Resource Management</Link></li>
          <li><Link to="attendance">Attendance</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

