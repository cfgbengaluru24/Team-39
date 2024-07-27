// src/pages/headq/Home.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import ShowReports from '../../components/headq/ShowReports';
import './Home.css';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <div className="dashboard">
          <h1>Head Office Dashboard</h1>
          <p>Welcome to the Head Office Dashboard. Here you can manage various aspects of the operations.</p>
        </div>
        <div className="reports-section">
          <ShowReports /> {/* Render the ShowReports component here */}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;





