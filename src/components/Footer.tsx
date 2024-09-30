import React from 'react';
import './Footer.css'; 
import Signup from './Signup';

const Footer: React.FC = () => {
  return (
    <>
      {/* Importing the Signup Component */}
      <Signup />

      {/* Main Footer Section */}
      <footer className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-column">
            <h4>Shop</h4>
            <ul>
              <li><a href="#">Seating</a></li>
              <li><a href="#">Modules</a></li>
              <li><a href="#">Tables</a></li>
              <li><a href="#">Storage</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Outdoor</a></li>
              <li><a href="#">Refurbished</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li><a href="#">Altus Collection</a></li>
              <li><a href="#">Ciello Collection</a></li>
              <li><a href="#">Atmosphere Collection</a></li>
              <li><a href="#">Neptune Collection</a></li>
              <li><a href="#">Mistral Collection</a></li>
              <li><a href="#">Free Swatches</a></li>
              <li><a href="#">Blog – Simone's Corner</a></li>
              <li><a href="#">Our Locations</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Cozey</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Our Initiatives</a></li>
              <li><a href="#">Our Approach</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Track My Order</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">Financing</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Assembly Guides</a></li>
              <li><a href="#">Consultations</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#">Instagram →</a></li>
              <li><a href="#">Youtube →</a></li>
              <li><a href="#">Facebook →</a></li>
              <li><a href="#">X (Twitter) →</a></li>
              <li><a href="#">Pinterest →</a></li>
              <li><a href="#">TikTok →</a></li>
              <li><a href="#">LinkedIn →</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Cozey Inc. All rights reserved.</p>
          <div>
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;