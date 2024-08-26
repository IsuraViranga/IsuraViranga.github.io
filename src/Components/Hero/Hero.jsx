import React from "react";
import './Hero.css';
import myProfile from '../../assets/myprofile.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useState ,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
 

const Hero = () => {

  const[resuPop,setresuPop]=useState(false);

  useEffect(()=>{
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      once: true,
    });
  },[]);

  const handleClick=()=>{
    setresuPop(!resuPop);
    console.log("nnn");
  }

  return (
    <div id='home' className='hero' data-aos="fade-right">
        <img src={myProfile} alt=''/>
        <h1><span>I'm Isura Perera,</span>full stack developer based in Srilanka.</h1>
        <p>As an undergraduate student at the esteemed University of Moratuwa Srilanka, I am deeply immersed in the dynamic realm of coding and technology with an open mind and a relaxed demeanor.Let's collaborate and bring your ideas to life!</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink offset={50} href='#contact' className='anchor-link'>Connect With Me</AnchorLink></div>
            <div className="hero-resume" onClick={handleClick}>My resume</div>
        </div>
        {resuPop && (
          <>
              <div className="dialog">
                <div>
                  send me your email through below form.resume will be sent to your mail
                </div>
                <div className="buttons">
                  <button className="ClosePopup"><AnchorLink offset={50} href='#contact' className='anchor-link_two'>Navigate</AnchorLink></button>
                  <button className="ClosePopup" onClick={handleClick}>exit</button>
                </div>
              </div>
          </>
        )}
    </div>
  ) 
}
 
export default Hero; 