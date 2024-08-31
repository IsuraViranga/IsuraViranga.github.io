import React from 'react';
import myprofile from '../../assets/myprofile.jpg';
import coloFrame from '../../assets/frame.jpg';
import todo from '../../assets/todour.jpg';
import coke from '../../assets/coke.jpg';
import coke5 from '../../assets/coke5.jpg';
import cokefinall from '../../assets/cokefinall.jpg';
import whats3 from '../../assets/whats3.jpg';
import medMobile from '../../assets/medMobile4.jpg'
import medMobileCode from '../../assets/medMobileCodeF.jpg'
import medTable from '../../assets/medTable.jpg'
import medWebUi from '../../assets/medWebUi.jpg'
import sailing from '../../assets/sailing.png'
import myPolio from '../../assets/myPolio.png'
import aimee from '../../assets/aimee.png'
import jetwing from '../../assets/jetwing.png'
import './SlideView.css';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const mobile=[
    {
        proTitle:"WhatsUp",
        descrip:"Developed a chat application which can be used for realtimecommunicate, using WebSockets and explore how WhatsApp functions work. The project demonstrates the to implement and manage real-time interactions within an application.",
        technologies:"Flutter, Node.js, Socket.io, sqLite",
        imageUrl:whats3
    },
    {
        proTitle:"MedInvent Patient Mobile App",
        descrip:"MedInvent Connect improves healthcare in Sri Lanka by connecting doctors, patients, and pharmacists. Users can manage profiles, prescriptions, and appointments, with notifications for cancellations and doctor arrivals, plus online payments.",
        technologies:"Flutter,ReactJS, Node.js,PostgreSQL with Sequelize,Firebase for push notifications",
        imageUrl:medMobileCode
    },
    {
        proTitle:"Coca-Cola Work permit App",
        descrip:"Developing a work permit management application for Coca-Cola Beverages Sri Lanka Limited to digitize daily work permit forms through a mobile app. This application will also generate summary reports, allowing the company to analyze the types and frequency of work permits used each month.",
        technologies:"React Native,Node.js,MySQL",
        imageUrl:coke5
    }
];

const web=[
    {
        proTitle:"MedInvent",
        descrip:"Using the MedInvent web application, doctors and clinics can schedule sessions, view session details via calendars, and send notifications for session cancellations and doctor arrivals to relevant patients.",
        technologies:"React.js, Node.js,PostgreSQL with Sequelize",
        imageUrl:medTable
    },
    {
        proTitle:"Protfolio",
        descrip:"Developed a personal portfolio website featuring my bio,project details for mobile and web apps, skills, services in web and mobile development, and contact information to showcases my professional journey",
        technologies:"React.js , CSS",
        imageUrl:myPolio
    },
    {
        proTitle:"SailingPen Educational Site",
        descrip:"This project is a clone website of the SailingPen educational institute. It replicates the original site's design and functionality, offering a similar user experience for educational purposes. ",
        technologies:"HTML, CSS, and JavaScript",
        imageUrl:sailing
    },
    {
        proTitle:"AIMEE School Site",
        descrip:"Developed a dynamic website for AIMEE International School, enhancing online presence and communication. The site features an intuitive design with detailed program information and staff profiles.",
        technologies:"HTML, CSS, and JavaScript",
        imageUrl:aimee
    },
    {
        proTitle:"JetWing Hotel Web Site",
        descrip:"Developed a website for Jetwing Hotel to gain hands-on experience in web development. The site includes room details, hotel information, and contact options.",
        technologies:"HTML, CSS, and JavaScript",
        imageUrl:jetwing
    }
];
const UI=[
    {
        proTitle:"MedInvent Patient Mobile App",
        descrip:"MedInvent Patient Mobile App UI design",
        technologies:"using Figma",
        imageUrl:medMobile
    },
    {
        proTitle:"Coca-Cola Work permit App",
        descrip:"Coca-Cola Work permit App UI design",
        technologies:"using Figma",
        imageUrl:cokefinall
    },
    {
        proTitle:"ToDour todo app",
        descrip:"ToDour todo app UI design",
        technologies:"using Figma",
        imageUrl:todo 
    },
];

const game =[
    {
        proTitle:"MedInvent Patient Mobile App",
        descrip:"Developed a real-time communicating chat applicata nd explore how WhatsApp functions work. The project demonstrates the to implement and manage real-time interactions within an application.",
        technologies:"Flutter, Node.js, Socket.io, sqLite, MongoDB",
        imageUrl:myprofile
    }
];

const SlideView = ({ number }) => {

    const[diNumber,setDisNumber]=useState(0);
    const[displaySet, setSlides]=useState(mobile);
    useEffect(() => {

        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
        //Runs only on the first render
        setDisNumber(0);
        if(number == 1){
            setSlides(mobile);
        } else if(number == 2){
            setSlides(web);
        } else if(number == 3){
            setSlides(UI);
        }
      }, [number]);

    const nexthandler=()=>{
        if(diNumber<displaySet.length-1){
            setDisNumber(diNumber+1);
        } 
    }

    const prevhandler=()=>{ 
        if(diNumber>0){
            setDisNumber(diNumber-1);
        }
    }
 
    return (
     <div className='slideBig'>
        <div className='insideOne' data-aos="fade-right" >
            <div className='slideLeft'>
                <h1>{diNumber+1}. {displaySet[diNumber].proTitle}</h1>
                <h3>Description</h3>
                <p>{displaySet[diNumber].descrip}</p>
                <h3>Technologies</h3>
                <p>{displaySet[diNumber].technologies}</p>
            </div>
            <div className='slideRight'>
                <img src={displaySet[diNumber].imageUrl} alt="pic" />
            </div>
        </div>
        <div className='insideTwo' data-aos="fade-left">
            <div className='button1' onClick={prevhandler}>Prev</div>
            <div  className='button1'  onClick={nexthandler}>Next</div>
        </div>
     </div>
    )
}

export default SlideView;
