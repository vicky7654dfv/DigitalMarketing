import React, { useState, useEffect } from "react";
import styles from "./AboutHero.module.css";
import heroImg1 from "../../assets/About/AboutHero/1.webp"; // Import your images
import heroImg2 from "../../assets/About/AboutHero/2.webp";

const AboutHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: heroImg1,
      title: "We Are The Glitch In The System",
      subtitle: "Rewriting the rules of digital engagement.",
    },
    {
      id: 2,
      image: heroImg2,
      title: "Data Is Our DNA",
      subtitle: "Transforming chaos into calculated growth.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className={styles.heroSection}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${
            index === currentSlide ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <h1 className={styles.title}>{slide.title}</h1>
            <p className={styles.subtitle}>{slide.subtitle}</p>
          </div>
        </div>
      ))}
      
      {/* Slide Indicators */}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default AboutHero;