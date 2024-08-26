import React from 'react';
import myprofile from '../../assets/myprofile.jpg';
import coloFrame from '../../assets/frame.jpg';
import todo from '../../assets/todour.jpg';
import coke from '../../assets/coke.jpg';
import coke5 from '../../assets/coke5.jpg';
import cokefinall from '../../assets/cokefinall.jpg';
import whats3 from '../../assets/whats3.jpg';
import './SlideView.css';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const mobile=[
    {
        proTitle:"WhatsUp",
        descrip:"Developed a chat application which can be used for realtimecommunicate, using WebSockets and explore how WhatsApp functions work. The project demonstrates the to implement and manage real-time interactions within an application.",
        technologies:"Flutter, Node.js, Socket.io, sqLite, MongoDB",
        imageUrl:whats3
    },
    {
        proTitle:"Coca-Cola Work permit App",
        descrip:"Developed a real-time communicating chat ap using WebSockets and explore how WhatsApp functions work. The project demonstrates the to implement and manage real-time interactions within an application.",
        technologies:"Flutter, Node.js, Socket.io, sqLite, MongoDB",
        imageUrl:coke5
    },
    {
        proTitle:"MedInvent Patient Mobile App",
        descrip:"Developed a real-time communicating chat applicata nd explore how WhatsApp functions work. The project demonstrates the to implement and manage real-time interactions within an application.",
        technologies:"Flutter, Node.js, Socket.io, sqLite, MongoDB",
        imageUrl:myprofile
    }
];

const web=[
    {
        proTitle:"MedInvent",
        descrip:"Developed a chat application which can be used for realtime communicate, using WebSockets and explore how WhatsApp functions work. The project demonstrates the to implement and manage real-time interactions within an application.",
        technologies:"Flutter, Node.js, Socket.io, sqLite, MongoDB",
        imageUrl:coloFrame
    },
    {
        proTitle:"DreamBot",
        descrip:"Developed a real-time communicating chat ap using WebSockets and explore how WhatsApp functions work. The project demonstrates the to implement and manage real-time interactions within an application.",
        technologies:"Flutter, Node.js, Socket.io, sqLite, MongoDB",
        imageUrl:coloFrame
    },
    {
        proTitle:"Protfolio",
        descrip:"Developed a real-time communicating chat applicata nd explore how WhatsApp functions work. The project demonstrates the to implement and manage real-time interactions within an application.",
        technologies:"Flutter, Node.js, Socket.io, sqLite, MongoDB",
        imageUrl:myprofile
    },
    {
        proTitle:"Coca-Cola Work permit App",
        descrip:"Developed a real-time communicating chat ap using WebSockets and explore how WhatsApp functions work. The project demonstrates the to implement and manage real-time interactions within an application.",
        technologies:"Flutter, Node.js, Socket.io, sqLite, MongoDB",
        imageUrl:myprofile
    },
    {
        proTitle:"MedInvent Patient Mobile App",
        descrip:"Developed a real-time communicating chat applicata nd explore how WhatsApp functions work. The project demonstrates the to implement and manage real-time interactions within an application.",
        technologies:"Flutter, Node.js, Socket.io, sqLite, MongoDB",
        imageUrl:myprofile
    }
];
const UI=[
    {
        proTitle:"UUUUI",
        descrip:"Developed a chat application which can be used for realtime communicate, using WebSockets and explore how WhatsApp functions work. The project demonstrates the to implement and manage real-time interactions within an application.",
        technologies:"Flutter, Node.js, Socket.io, sqLite, MongoDB",
        imageUrl:todo 
    },
    {
        proTitle:"Coca-Cola Work permit App",
        descrip:"Developed a real-time communicating chat ap using WebSockets and explore how WhatsApp functions work. The project demonstrates the to implement and manage real-time interactions within an application.",
        technologies:"Flutter, Node.js, Socket.io, sqLite, MongoDB",
        imageUrl:cokefinall
    },
    {
        proTitle:"MedInvent Patient Mobile App",
        descrip:"Developed a real-time communicating chat applicata nd explore how WhatsApp functions work. The project demonstrates the to implement and manage real-time interactions within an application.",
        technologies:"Flutter, Node.js, Socket.io, sqLite, MongoDB",
        imageUrl:myprofile
    }
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
