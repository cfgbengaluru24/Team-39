import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';



const handleLogout = () => {
  localStorage.clear();
  window.location.href = '/'; // Redirect to login page
};

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
        <li onClick={handleLogout} style={{cursor:'pointer',textAlign:'center'}}>Logout</li>
      </ul>
    </nav>
  );
}

export default Navbar;