import React from 'react';
import { FaDownload, FaEdit, FaGlobe } from 'react-icons/fa'; // Importing icons from react-icons library
import './Navbar.css'; // Importing CSS file for styling

const Navbar = () => {
  const handlePrint = () => {
    window.print();
  }
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className='logo'>CV Generator</span>
      </div>
      <div className="navbar-right">
        <FaDownload className="navbar-icon" onClick={handlePrint} />
        <FaEdit className="navbar-icon" />
      </div>
    </div>
  );
};

export default Navbar;
