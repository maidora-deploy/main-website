// eslint-disable-next-line
import React, {useEffect } from "react";
import "../assets/slider.css";

const CustomSlider = ({ slides, autoPlay = true, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [current, autoPlay, interval]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider-container">
      <img
        src={slides[current].url}
        alt={slides[current].title}
        className="slider-image"
      />

      <button className="slider-arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slider-arrow right" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="slider-title">{slides[current].title}</div>

      <div className="slider-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`slider-dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
