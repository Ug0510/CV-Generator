import React from 'react';
import './Navbar.css'; 
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const handlePrint = () => {
    window.print();
  }
  const handleRedirect = () =>{
    navigate('/update-cv');
  }
  const handleHome = () => {
    navigate('/');
  }
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className='logo' style={{cursor:'pointer'}} onClick={handleHome}>CV Generator</span>
      </div>
      <div className="navbar-right">
      {location.pathname === '/' && (
          <i className="fa-solid fa-download navbar-icon" onClick={handlePrint}></i>
        )}
        <i class="fa-solid fa-pen-to-square navbar-icon" onClick={handleRedirect}></i>
      </div>
    </div>
  );
};

export default Navbar;
