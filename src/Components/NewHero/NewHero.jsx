import React, { useEffect, useState } from 'react';
import './NewHero.css'; // Import the CSS file
import MainPic from '../../assets/mainProfilePic.png'; // Import your background-removed photo
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
const NewHero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [displayedTextTwo, setDisplayedTextTwo] = useState('');
    const fullText = "Hello, I'm Isura Perera...";
    const typingSpeed = 100; 
    const fullTextTwo ="Undergraduate Student At University Of Moratuwa Srilanka . . .";
   // Full Stack Developer based in Sri Lanka.
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });

        let charIndex = 0;
        const typeText = () => {
            if (charIndex < fullText.length) {
                setDisplayedText(fullText.substring(0, charIndex + 1));
                charIndex++;
                setTimeout(typeText, typingSpeed);
            } else {
                charIndex = 0; 
                typeTextTwo();
            }
        };

        const typeTextTwo = () => {
            if (charIndex < fullTextTwo.length) {
                setDisplayedTextTwo(fullTextTwo.substring(0, charIndex + 1));
                charIndex++;
                setTimeout(typeTextTwo, typingSpeed);
            }
        };

        typeText();
    }, []);

    return (
        <div className="intro-container">
            <div className="photo-container" data-aos="fade-down">
                {/* <div className="circle-animation">
                    <img src={MainPic} alt="Isura Perera" className="profile-photo" />
                </div> */}
                <div className="circle-animation">
                    <div className="dotted-border"></div>
                    <div className="profile-photo-container">
                        <img src={MainPic} alt="Isura Perera" className="profile-photo" />
                    </div>
                </div>
            </div>
            <div className="intro-text" data-aos="fade-left">
                <div className="intro-text-two">
                    <h1>{displayedText}</h1>
                    <h2>{displayedTextTwo}</h2>
                    <p>
                        As an undergraduate student at the esteemed University of Moratuwa Sri Lanka, I am deeply immersed in the dynamic realm of coding and technology with an open mind and a relaxed demeanor. Let's collaborate and bring your ideas to life!
                    </p>
                </div>
                <div className="hero-action">
                    <div className="hero-connect"><AnchorLink offset={50} href='#contact' className='anchor-link'>Connect With Me</AnchorLink></div>
                    <div className="hero-resume">My resume</div>
                </div>
            </div>
        </div> 
    ); 
};

export default NewHero;
