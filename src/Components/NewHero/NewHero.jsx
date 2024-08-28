import React, { useEffect, useState } from 'react';
import './NewHero.css'; 
import MainPic from '../../assets/mainProfilePic.png'; 
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewHero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [displayedTextTwo, setDisplayedTextTwo] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const fullText = "Hello, I'm Isura Perera...";
    const typingSpeed = 100; 
    const fullTextTwo ="Undergraduate Student At University Of Moratuwa Srilanka ...";
    
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

    const togglePopup = () => setShowPopup(!showPopup);

    const handleNavigateClick = () => {
        togglePopup(); // Close the popup
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    const handleClosePopup = (e) => {
        if (e.target.className === 'popup-overlay') {
            togglePopup(); // Close the popup when clicking outside
        }
    };

    return (
        <div className="intro-container" id='home'>
            <div className="photo-container" data-aos="fade-down">
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
                    <div className="hero-resume" onClick={togglePopup}>My resume</div>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay" onClick={handleClosePopup}>
                    <div className="popup-content">
                        <button className="popup-close" onClick={togglePopup}>X</button>
                        <p>Send me your email through the form below. The resume will be sent to your mail.</p>
                        <button className="popup-navigate" onClick={handleNavigateClick}>Navigate</button>
                    </div>
                </div>
            )}
        </div> 
    ); 
};

export default NewHero;
