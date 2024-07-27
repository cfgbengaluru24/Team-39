// src/pages/user/UserHome.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './UserHome.css';

function UserHome() {
  return (
    <div className="user-home">
      <Navbar />
      <div className="user-content">
        <div className="areas-responsible-section">
          {/* <AreasResponsible /> Render the AreasResponsible component here */}
          
        </div>
        <div className="additional-content">
          <Outlet /> {/* Render child routes here */}
        </div>
      </div>
    </div>
  );
}

export default UserHome;

