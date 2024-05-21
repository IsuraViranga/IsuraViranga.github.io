import React from 'react';
import './Services.css';

const serviceList=[
    {
        serviceNo:'01',
        serviceName:'Mobile Development',
        description:'Mobile development can be done in various ways....'
    },
    {
        serviceNo:'02',
        serviceName:'Web Development',
        description:'Web development can be done in various ways....'
    },
    {
        serviceNo:'03',
        serviceName:'UI/UX Designing',
        description:'UI/UX designing can be done in various ways....'
    },
]

const listMap = serviceList.map((service,index)=>{
   
    return  <div className="services-format">
        <h3>{service.serviceNo}</h3> 
        <h2>{service.serviceName}</h2>
        <p>{service.description}</p>
        <div className="services-readmore">
            <p>Read More</p>
            <img src='' alt=''/> 
        </div>
    </div>
})

const Services = () => {

  return (
   <div className="services" id='services'>
     <div className="services-title">
        <h1>My Services</h1>
        <div></div>
     </div>
     <div className="services-container">
        {listMap}
     </div>
   </div>
  )
}

export default Services