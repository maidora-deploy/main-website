import React, { useState } from "react";
import "../assets/Accordion.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <button
          className={`accordion-header ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => toggleAccordion(0)}
        >
          Our Mission – Empowering Homes, Uplifting Lives
          <span className="icon">{activeIndex === 0 ? "−" : "+"}</span>
        </button>
        <div className={`accordion-content ${activeIndex === 0 ? "show" : ""}`}>
          <p>
            At Maidora, our mission is to connect households with trustworthy,
            trained, and verified maids who bring peace and comfort into homes.
            We aim to uplift domestic workers with fair opportunities, training,
            and dignity while ensuring every family enjoys reliable support.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <button
          className={`accordion-header ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => toggleAccordion(1)}
        >
          Our Vision – Building Trust, Dignity, and a Better Tomorrow
          <span className="icon">{activeIndex === 1 ? "−" : "+"}</span>
        </button>
        <div className={`accordion-content ${activeIndex === 1 ? "show" : ""}`}>
          <p>
            We envision a future where domestic work is respected, organized,
            and valued. Maidora aims to lead India’s transformation into a
            transparent, ethical, and tech-driven home assistance industry where
            every worker is empowered and every home feels secure.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <button
          className={`accordion-header ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => toggleAccordion(2)}
        >
          Our Core Values – The Heartbeat of Maidora
          <span className="icon">{activeIndex === 2 ? "−" : "+"}</span>
        </button>
        <div className={`accordion-content ${activeIndex === 2 ? "show" : ""}`}>
          <p>
            Integrity, respect, and compassion form the foundation of Maidora.
            We believe in fairness, honesty, and the power of trust. Every
            service we offer reflects our commitment to care, reliability, and
            excellence.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <button
          className={`accordion-header ${activeIndex === 3 ? "active" : ""}`}
          onClick={() => toggleAccordion(3)}
        >
          Our Goals – Shaping the Future of Home Assistance
          <span className="icon">{activeIndex === 3 ? "−" : "+"}</span>
        </button>
        <div className={`accordion-content ${activeIndex === 3 ? "show" : ""}`}>
          <p>
            Our goal is to expand Maidora’s reach nationwide, delivering trusted
            domestic help to every household. We strive to set new standards of
            quality, professionalism, and safety in the home service industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
