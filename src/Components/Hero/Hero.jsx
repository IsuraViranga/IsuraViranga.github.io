import React from 'react';
import './Hero.css';
import myProfile from '../../assets/myprofile.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={myProfile} alt=''/>
        <h1><span>I'm Isura Perera,</span>full stack developer based in Srilanka.</h1>
        <p>As an undergraduate student at the esteemed University of Moratuwa Srilanka, I am deeply immersed in the dynamic realm of coding and technology with an open mind and a relaxed demeanor.Let's collaborate and bring your ideas to life!</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink offset={50} href='#contact' className='anchor-link'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}
 
export default Hero; 