import React from 'react';
import Heart from '../../assets/images/heart.png';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <span>Made With <img src={Heart} alt="heart icon" /> by <a href="https://www.linkedin.com/in/udit-gupta-ug0510/">Udit Gupta</a></span>
        </footer>
    );
}

export default Footer;
