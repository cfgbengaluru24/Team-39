// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/headq/Home';
// import CreateUser from './pages/headq/CreateUser';
// import TakeOrder from './pages/headq/TakeOrder';
import ShowReports from './components/headq/ShowReports';
// import Collaboration from './pages/headq/Collaboration';
// import Upskilling from './pages/headq/Upskilling';
import AreasResponsible from './components/user/AreasResponsible';
import UserHome from './pages/user/UserHome';
// import CreateWorker from './pages/user/CreateWorker';
// import SiteDetails from './pages/user/SiteDetails';
// import CreateMachines from './pages/user/CreateMachines';
// import ResourceManagement from './pages/user/ResourceManagement';
// import Attendance from './pages/user/Attendance';
import Login from './pages/login/Login';

function App() {
  return (
      <Routes>
        {/* <Route path="/" element={}> */}
          <Route path="headq" element={<Home />} />
          {/* <Route path="create-user" element={<CreateUser />} /> */}
          {/* <Route path="take-order" element={<TakeOrder />} /> */}
          <Route path="show-reports" element={<ShowReports />} />
          {/* <Route path="collaboration" element={<Collaboration />} /> */}
          {/* <Route path="upskilling" element={<Upskilling />} /> */}
          <Route index element={<div>Welcome to the Head Office Dashboard!</div>} />
        {/* </Route> */}
        <Route path="/user" element={<UserHome />}>
          <Route path="areas-responsible" element={<AreasResponsible />} />
          {/* <Route path="create-worker" element={<CreateWorker />} /> */}
          {/* <Route path="site-details" element={<SiteDetails />} /> */}
          {/* <Route path="create-machines" element={<CreateMachines />} /> */}
          {/* <Route path="resource-management" element={<ResourceManagement />} /> */}
          {/* <Route path="attendance" element={<Attendance />} /> */}
          <Route index element={<div className="areas-responsible"><h3>Areas Responsible</h3><p>List of areas for which the ground level employee is responsible.</p></div>} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;



