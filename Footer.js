import React from 'react';
import './Styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="social-icons">
        {/* Add social media icons */}
      </div>
      <p>&copy; 2024 Hyperly.ai. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
