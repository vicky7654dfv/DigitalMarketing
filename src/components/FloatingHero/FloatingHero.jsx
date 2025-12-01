import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './FloatingHero.module.css';
import { useNavigate } from 'react-router-dom';

const FloatingHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate= useNavigate();

  return (
    <div className={styles.heroContainer} data-aos="fade">
      {/* Floating Background Icons */}
      <div className={styles.iconLayer}>
        <i className={`fa-solid fa-bullhorn ${styles.floatIcon} ${styles.icon1}`}></i>
        <i className={`fa-solid fa-chart-line ${styles.floatIcon} ${styles.icon2}`}></i>
        <i className={`fa-solid fa-lightbulb ${styles.floatIcon} ${styles.icon3}`}></i>
        <i className={`fa-solid fa-rocket ${styles.floatIcon} ${styles.icon4}`}></i>
        <i className={`fa-brands fa-google ${styles.floatIcon} ${styles.icon5}`}></i>
        <i className={`fa-solid fa-magnifying-glass ${styles.floatIcon} ${styles.icon6}`}></i>
      </div>

      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>
          Elevate Your <span className={styles.gradientText}>Digital Presence</span>
        </h1>
        <p className={styles.description}>
          We craft data-driven marketing strategies that turn clicks into customers and ideas into impact.
        </p>
        <button className={styles.ctaButton} onClick={()=>{navigate("/Error")}}>Get Started</button>
      </div>
    </div>
  );
};

export default FloatingHero;