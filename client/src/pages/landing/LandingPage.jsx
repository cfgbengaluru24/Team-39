// src/pages/landing/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';



function LandingPage() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <img src="https://media.licdn.com/dms/image/C4D0BAQG0N0zNt1R8Bw/company-logo_200_200/0/1630467212968?e=2147483647&v=beta&t=TDrBQYFT-mInMCvNl4fa5nDyRxebd42rU_KgHjDeA_Y" alt="Shola Logo" className="logo" />
        <h1>Shola</h1>
      </header>
      <nav className="landing-navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/login/headq">Head Office Login</Link></li>
          <li><Link to="/login/user">Ground Level Employee Login</Link></li>
        </ul>
      </nav>
      <div className="card-container">
        <div className="card">
          <h2>Innovation in Lantana Removal</h2>
          <p>Using innovative methods to remove lantana and use it for biomass industry.</p>
        </div>
        <div className="card">
          <h2>Handicrafts from Lantana</h2>
          <p>Creating beautiful handicrafts like elephants and other animals using Lantana.</p>
        </div>
        <div className="card">
          <h2>Automated Solutions</h2>
          <p>Developing automated solutions for identifying, removing, and monitoring the restoration process in Shola forests.</p>
        </div>
        <div className="card">
          <h2>Community Engagement</h2>
          <p>Engaging with indigenous communities to leverage their knowledge and skills.</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
