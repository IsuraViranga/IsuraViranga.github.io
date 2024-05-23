import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <div>ISURA_LOGO</div>
                <p>I'm a full stack developer based in SriLanka.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src='' alt='image'/>
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>

        </div>
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