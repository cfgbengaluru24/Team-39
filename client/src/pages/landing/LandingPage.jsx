// src/pages/landing/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import forestImage from '../../assets/images/shola.png';
import './LandingPage.css';
// import './home.css'; // Import the CSS file



function LandingPage() {

  const role  =  localStorage.getItem("role")

  const cards = [
    {
      title: "Card Title 1",
      content: "This is some content for the first card.",
      image: forestImage
    },
    {
      title: "Card Title 2",
      content: "This is some content for the second card.",
      image: forestImage
    },
    {
      title: "Card Title 3",
      content: "This is some content for the third card.",
      image: forestImage
    },
    {
      title: "Card Title 4",
      content: "This is some content for the fourth card.",
      image: forestImage
    }
  ];
  return (
    <>
    <div>
      
      <header className="landing-header">

        {/* <img src="https://media.licdn.com/dms/image/C4D0BAQG0N0zNt1R8Bw/company-logo_200_200/0/1630467212968?e=2147483647&v=beta&t=TDrBQYFT-mInMCvNl4fa5nDyRxebd42rU_KgHjDeA_Y" alt="Shola Logo" width="40%" height="30%" className='Logo' /> */}
      
  
      <nav className="landing-navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/collaborate">Collaborate</Link></li>
          
          
          {role && (role === "admin" ? <li><Link to="/headq">Dashboad</Link></li>
           : <li><Link to="/user/create-worker">Dashboad</Link></li>) }

          {!role && <div><li style={{margin:'10px'}}><Link to="/login/headq">Admin Login</Link></li>
            <li><Link to="/login/user">Employee Login</Link></li></div> }
        </ul>
      </nav>
      <div className='fullscreen-image'>
      <img src={forestImage} />
      </div>
      </header>
      
      
      
      
      
      <div>
        <p></p>
      </div>
    </div>
   
    </>
  );
}

export default LandingPage;

