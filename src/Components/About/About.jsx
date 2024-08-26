import React, { useEffect, useState } from 'react';
import './About.css';
import myprofile from '../../assets/myprofile.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => { 

  useEffect(() => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
    });
  }, []);

  return (
    <div  id='about' className='about'>
      <div className="about-title" data-aos="fade-up">
        <h1>About me</h1>
        <div></div>
      </div>
      <div className="about-section"> 
        <div className="about-left" data-aos="fade-right">
            <img src={myprofile} alt=''/> 
        </div>
        <div className="about-right">
            <div className="about-para" data-aos="fade-left">
                <p>I am 24 Years old.I went to Prince Of Wales College Moratuwa.I live in Moratuwa.I got AAB passes in A/L examination stream of Mathematics.Now I am an undergraduate student at University Of Moratuwa.</p>
                <p>I am passionate about two main things.First one is coding and the other one is playing Basketball.</p>
            </div>
            <div className='newDiv' data-aos="fade-up">
                <div><h2>Skill Section</h2></div>
                <div className="about-skills">
                    <div class="dropdown">
                      <button class="dropbtn"><h4>Programing Languages</h4></button>
                      <div class="dropdown-content">
                        <a>Java</a>
                        <a>Java Script</a>
                        <a>Dart</a>
                        <a>C</a>
                      </div>
                    </div>
                    <div class="dropdown">
                      <button class="dropbtn">Mobile Development</button>
                      <div class="dropdown-content">
                        <a>Flutter</a>
                        <a>React Native</a>
                      </div>
                    </div>
                    <div class="dropdown">
                      <button class="dropbtn">Web Development</button>
                      <div class="dropdown-content">
                        <a>HTML</a>
                        <a>Css</a>
                        <a>React JS</a>
                      </div>
                    </div>
                    <div class="dropdown">
                      <button class="dropbtn">Databases</button>
                      <div class="dropdown-content">
                        <a>Sequalize</a>
                        <a>My SQL</a>
                        <a>Mongo db</a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements" data-aos="fade-left">
            <div className="about-acievement">
                <h1>04+</h1>
                <p>COMPLETED PROJECTS</p>
            </div>
            <hr/>
            <div className="about-acievement">
                <h1>02+</h1>
                <p>ONGOING PROJECTS</p>
            </div>
            <hr/>
            <div className="about-acievement">
                <h1>01+</h1>
                <p>ARTICLES</p>
            </div>
        </div>
    </div>
  )
}

export default About