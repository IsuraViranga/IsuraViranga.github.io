import { useState } from 'react';
import React from 'react';
import './Services.css';
import SlideView from './SlideView';

const serviceList=[
    {
        serviceNo:1,
        serviceName:'Mobile Development',
    },
    {
        serviceNo:2,
        serviceName:'Web Development',
    },
    {
        serviceNo:3,
        serviceName:'UI/UX Designing',
    },
]



const Services = () => {
    const[disNumber,setDisNumber]=useState(1);

    const handleServiceClick=(servicenum)=>{
        setDisNumber(servicenum);
    }

    const listMap = serviceList.map((service,index)=>{
        return  <div 
            className="services-format"
            key={index}
            onClick={() => handleServiceClick(service.serviceNo)}
        >
            <h3>{service.serviceName}</h3>
        </div>
    })

    return (
    <div className="services" id='services'>
        <div className="services-title">
            <h1>My Projects</h1>
            <div></div>
        </div>
        <div className="services-container">
            {listMap}
        </div>
        <SlideView number={disNumber}/>
    </div>
    )
}

export default Services