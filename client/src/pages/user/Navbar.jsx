import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/'; // Redirect to login page
  };
  return (
    <div className="vertical-navbar">
      <h1 className="navbar-title" style={{ fontSize: '20px' }}>Employee Dashboard</h1>
      <nav className="nav-links">
        <ul>
          <li><Link to="create-worker">Create Worker</Link></li>
          <li><Link to="site-details">Site Details</Link></li>
          <li><Link to="create-machines">Create Machines</Link></li>
          <li><Link to="resource-management">Resource Management</Link></li>
          <li><Link to="attendance">Attendance</Link></li>

          <li onClick={handleLogout} style={{ cursor: 'pointer', textAlign: 'center' }}>Logout</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;