import React from 'react';
import styles from './OurServices.module.css';

const servicesData = [
  { title: "SEO Optimization", desc: "Rank higher on search engines and drive organic traffic.", icon: "fa-solid fa-magnifying-glass-chart" },
  { title: "Social Media", desc: "Engage your audience with creative campaigns and content.", icon: "fa-solid fa-hashtag" },
  { title: "Web Development", desc: "Fast, responsive, and secure websites tailored to you.", icon: "fa-solid fa-code" },
  { title: "PPC Advertising", desc: "Targeted ad campaigns that maximize ROI.", icon: "fa-solid fa-bullseye" },
  { title: "Content Writing", desc: "Compelling storytelling that connects with users.", icon: "fa-solid fa-pen-nib" },
  { title: "Email Marketing", desc: "Direct conversion strategies delivered to inboxes.", icon: "fa-solid fa-envelope-open-text" },
];

const OurServices = () => {
  return (
    <div className={styles.serviceSection} data-aos="fade">
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Our <span className={styles.gradientSpan}>Expertise</span></h2>
        <p className={styles.subTitle}>Comprehensive digital solutions for modern businesses.</p>
      </div>
      
      <div className={styles.gridContainer}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.iconBox}>
              <i className={service.icon}></i>
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;