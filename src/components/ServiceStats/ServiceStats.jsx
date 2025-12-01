import React from 'react';
import CountUp from 'react-countup';
import styles from './ServiceStats.module.css';

const ServiceStats = () => {
  return (
    <div className={styles.statsContainer} data-aos="fade">
      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <h2 className={styles.number}>
            <CountUp end={150} duration={3} />+
          </h2>
          <p className={styles.label}>Projects Done</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.number}>
            <CountUp end={98} duration={3} />%
          </h2>
          <p className={styles.label}>Satisfaction</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.number}>
            <CountUp end={12} duration={3} />+
          </h2>
          <p className={styles.label}>Years Exp.</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.number}>
            <CountUp end={25} duration={3} />k
          </h2>
          <p className={styles.label}>Leads Gen</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceStats;