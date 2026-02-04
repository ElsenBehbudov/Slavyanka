import { useState } from "react";
import "./main.css";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";

const slides = [slide1, slide2, slide3, slide4];

const Main = () => {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero">
      {/* Background image */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${slides[active]})` }}
      />

      {/* Left arrow */}
      <button className="hero-arrow left" onClick={prevSlide}>
        ‹
      </button>

      {/* Right arrow */}
      <button className="hero-arrow right" onClick={nextSlide}>
        ›
      </button>

      {/* Indicators */}
      <div className="hero-indicators">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`hero-line ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Main;
