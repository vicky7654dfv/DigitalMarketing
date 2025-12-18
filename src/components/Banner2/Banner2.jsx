import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Banner2.module.css';

const Banner2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.bannerContainer} data-aos="fade">
      {/* Dark Overlay with the specific gradient opacity */}
      <div className={styles.overlay}></div>
      
      <div className={styles.contentWrapper}>
        <h1 className={styles.heading}>
          Transforming Ideas into <br />
          <span className={styles.gradientText}>Digital Reality</span>
        </h1>
        
        <p className={styles.subText}>
          Scale your business with our data-driven marketing strategies. 
          We build the bridge between your brand and your future customers.
        </p>
        
        <div className={styles.buttonGroup}>
          <a href="#/Error" className={`${styles.btn} ${styles.btnPrimary}`}>
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#/Error" className={`${styles.btn} ${styles.btnSecondary}`}>
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner2;