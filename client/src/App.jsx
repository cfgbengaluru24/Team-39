import React from 'react';
import './App.css';
import './index.css';  
import Login from './pages/login/Login';
import CreateWorker from './pages/users/CreateWorker';
import Navbar from './components/users/headq/Navbar';

function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <CreateWorker/> */}
      <Navbar/> 
    </div>
  );
}

export default App;
