import React, { useState } from 'react';
import './Header.css'; // Ensure you import the CSS file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle dropdown visibility

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the dropdown menu
  };

  return (
    <div className="resume">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="resume-title">RESUME BUILDER WEBSITE</h1>
        <nav className="navbar">
          <div className="navbar-toggle" onClick={handleToggle}>
            Menu
          </div>
          {isOpen && (
            <ul className="navbar-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;

