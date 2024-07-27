import React from 'react';
import Navbar from '../../components/Navbar'; // Ensure correct path
import './LandingPage.css'; // Ensure correct path

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to SHOLA</h1>
          <p>Your one-stop solution for upskilling and learning new crafts.</p>
          <a href="/signup" className="cta-button">Get Started</a>
        </div>
      </header>
      <section className="features-section">
        <div className="feature">
          <h2>High Quality Videos</h2>
          <p>Learn from the best with our high-quality instructional videos.</p>
        </div>
        <div className="feature">
          <h2>Comprehensive PDFs</h2>
          <p>Download detailed PDFs for offline learning and reference.</p>
        </div>
        <div className="feature">
          <h2>Expert Guidance</h2>
          <p>Get guidance and feedback from industry experts.</p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 SHOLA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
