import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <span>Designed in North America</span>
          <span>|</span>
          <span>Fast & Free Shipping</span>
        </div>
        <div className="top-bar-right">
          <a href="#">Reviews</a>
          <a href="#">Free Swatches</a>
          <a href="#">Financing</a>
          <a href="#">Support</a>
          <a href="#">Contact Us</a>
          <a href="#">Our Locations</a>

          <div className="language-select">
            <span>EN</span>
            <img src="/usa-flag.svg" alt="USA Flag" />
            <img src="/arrow-down.svg" alt="Dropdown Arrow" className="arrow" />
          </div>
        </div>
      </div>

      <header className="main-header">
        <img src="/logo.svg" alt="Logo" className="logo" />
        <nav className="nav-menu">
          <a href="#">Seating</a>
          <a href="#">Tables</a>
          <a href="#">Storage</a>
          <a href="#">Accessories</a>
          <a href="#">Washable Rugs</a>
          <a href="#">Outdoor</a>
        </nav>
        <img src="/cart-icon.svg" alt="Cart" className="cart-icon" />
      </header>
    </>
  );
};

export default Header;