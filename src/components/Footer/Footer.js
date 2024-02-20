import React from 'react';
import Heart from '../../assets/images/heart.png'

const Footer = () => {
    return (
        <footer style={{height:'4rem', backgroundColor:'#001055', color:'white',fontSize:'16px', display:'flex',justifyContent:'center',alignItems:'center'}}>
            <span>Made With <img src={Heart} style={{width:'18px', marginBottom:'-5px'}}/> by <a href="https://www.linkedin.com/in/udit-gupta-ug0510/" style={{color:'#FF7A00',textDecoration:'none',cursor:'pointer'}}>Udit Gupta</a></span>
        </footer>
    )
}

export default Footer;