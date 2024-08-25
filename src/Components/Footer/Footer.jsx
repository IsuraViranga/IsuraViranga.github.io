import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">c 2024 Isura Perera.All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Terms Of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer