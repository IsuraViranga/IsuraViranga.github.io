import { useState } from 'react';
import React from 'react';
import './Services.css';
import SlideView from './SlideView';

const serviceList = [
  {
    serviceNo: 1,
    serviceName: 'Mobile Development',
  },
  {
    serviceNo: 2,
    serviceName: 'Web Development',
  },
  {
    serviceNo: 3,
    serviceName: 'UI/UX Designing',
  },
];

const Services = () => {
  const [disNumber, setDisNumber] = useState(1);
  const [hoveredService, setHoveredService] = useState(null);

  const handleServiceClick = (servicenum) => {
    setDisNumber(servicenum);
  };

  const handleMouseEnter = (service) => {
    setHoveredService(service.serviceName);
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  const listMap = serviceList.map((service, index) => {
    return (
      <div
        className="services-format"
        key={index}
        onClick={() => handleServiceClick(service.serviceNo)}
        onMouseEnter={() => handleMouseEnter(service)}
        onMouseLeave={handleMouseLeave}
      >
        <h3>{service.serviceName}</h3>
        {hoveredService === service.serviceName && (
          <div className="popup">
            Click & view {service.serviceName} projects below
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="services" id="services">
      <div className="services-title">
        <h1>My Projects</h1>
        <div></div>
      </div>
      <div className="title-categories">Categories</div>
      <div className="services-container">{listMap}</div>
      <SlideView number={disNumber} />
    </div>
  );
};

export default Services;
