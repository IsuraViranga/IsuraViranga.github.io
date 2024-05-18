import React from 'react'
import './About.css';
import myprofile from '../../assets/myprofile.jpg';
 
const About = () => { 
  return (
    <div  id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <div></div>
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={myprofile} alt=''/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am 24 Years old.I went to Prince Of Wales College Moratuwa.I live in Moratuwa.I got AAB passes in A/L examination stream of Mathematics.Now I am an undergraduate student at University Of Moratuwa.</p>
                <p>I am passionate about two main things.First one is coding and the other one is playing Basketball.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"40%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"40%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
            <div className="about-acievement">
                <h1>02+</h1>
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