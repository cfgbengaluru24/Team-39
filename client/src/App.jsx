// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateUser from './components/headq/CreateUser';
import ShowReports from './components/headq/ShowReports';
import Home from './pages/headq/Home';
import LandingPage from './pages/landing/LandingPage';
// import Collaboration from './pages/headq/Collaboration';
import Order from './components/headq/Order';
import Upskilling from './components/headq/Upskilling';
import AreasResponsible from './components/user/AreasResponsible';
import CreateMachinery from './components/users/CreateMachinery';
import CreateSite from './components/users/CreateSite';
import CreateWorker from './components/users/CreateWorker';
import AboutUs from './pages/about/About';
import Contact from './pages/contact/Contact';
import UserHome from './pages/user/UserHome';
// import ResourceManagement from './components/users/ResourceManagement';
import Attendance from './components/users/Attendance';
import Login from './pages/login/Login';
import AdminLogin from './pages/login/AdminLogin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login">
        <Route path="headq" element={<AdminLogin />} />
        <Route path="user" element={<Login />} />
      </Route>
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="headq" element={<Home />} />
      <Route path="create-user" element={<CreateUser />} />
      <Route path="take-order" element={<Order />} />
      <Route path="show-reports" element={<ShowReports />} />
      {/* <Route path="collaboration" element={<Collaboration />} /> */}
      <Route path="upskilling" element={<Upskilling />} />
      {/* <Route index element={<div>Welcome to the Head Office Dashboard!</div>} /> */}
      <Route path="/user" element={<UserHome />}>
        <Route path="areas-responsible" element={<AreasResponsible />} />
        <Route path="create-worker" element={<CreateWorker />} />
        <Route path="site-details" element={<CreateSite />} />
        <Route path="create-machines" element={<CreateMachinery />} />
        {/* <Route path="resource-management" element={<ResourceManagement />} /> */}
        <Route path="attendance" element={<Attendance />} />
        {/* <Route index element={<div className="areas-responsible"><h3>Areas Responsible</h3><p>List of areas for which the ground level employee is responsible.</p></div>} /> */}
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;



