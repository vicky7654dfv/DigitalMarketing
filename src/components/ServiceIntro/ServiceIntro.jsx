import React from 'react';
import styles from './ServiceIntro.module.css';

const ServiceIntro = () => {
  return (
    <div className={styles.introContainer} data-aos="fade">
      <div className={styles.introContent}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Why Choose Our <br/> <span className={styles.highlight}>Digital Solutions?</span></h2>
          <div className={styles.divider}></div>
          <p className={styles.text}>
            We don't just follow trends; we create them. Our team combines technical expertise with creative flair to deliver customized solutions that fit your brand's unique voice. From SEO to full-scale branding, we have you covered.
          </p>
        </div>
        <div className={styles.imageContent}>
          <div className={styles.glowBox}>
            <h3>Strategy.</h3>
            <h3>Execution.</h3>
            <h3>Growth.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;