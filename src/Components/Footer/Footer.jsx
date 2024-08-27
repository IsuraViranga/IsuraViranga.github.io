import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">c 2024 Isura Perera. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Terms Of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
                <a href="https://www.facebook.com/share/Ain732aSiGeibNGt/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="social-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/isura-perera-7072302aa/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer;
