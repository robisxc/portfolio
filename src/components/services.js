import React, { useState } from "react";
import "../styles/services.css";
import { servicesData } from "../data/servicesData";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextService = () => {
    if (currentIndex < servicesData.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const prevService = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  return (
    <div className="services">
      <h1>Services</h1>

      <div className="services-controls">
        <button
          className="carousel-btn prev"
          onClick={prevService}
          disabled={currentIndex === 0}
          aria-label="Ankstesnė paslauga"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"
            />
          </svg>
        </button>

        <button
          className="carousel-btn next"
          onClick={nextService}
          disabled={currentIndex === servicesData.length - 1}
          aria-label="Kita paslauga"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"
            />
          </svg>
        </button>
      </div>

      <div className="services-carousel">
        <div
          className="services-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {servicesData.map((service, index) => (
            <div className="services-slide" key={index}>
              <div className="service-card">
                <div className="icon-placeholder">{service.icon}</div>
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;