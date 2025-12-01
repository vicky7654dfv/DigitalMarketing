import React from "react";
import styles from "./VisionMission.module.css";

const VisionMission = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Vision Card */}
        <div className={styles.card}>
          <div className={styles.glow} style={{background: 'linear-gradient(135deg, #00f3ff, transparent)'}}></div>
          <h2 className={styles.title}>Our Vision</h2>
          <p className={styles.text}>
            To architect a digital ecosystem where brands don't just survive algorithm updates—they dictate them. We foresee a future where marketing is 100% data-predicted and creatively executed.
          </p>
          <div className={styles.icon}>👁️</div>
        </div>

        {/* Mission Card */}
        <div className={styles.card}>
          <div className={styles.glow} style={{background: 'linear-gradient(135deg, #bc13fe, transparent)'}}></div>
          <h2 className={styles.title}>Our Mission</h2>
          <p className={styles.text}>
            To arm businesses with military-grade digital strategies. We are committed to stripping away vanity metrics and focusing purely on ROI, Growth, and Dominance.
          </p>
          <div className={styles.icon}>🚀</div>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;