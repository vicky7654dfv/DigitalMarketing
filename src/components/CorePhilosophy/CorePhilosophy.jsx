import React from "react";
import styles from "./CorePhilosophy.module.css";

const CorePhilosophy = () => {
  const values = [
    { 
      id: "01",
      title: "Radical Transparency", 
      desc: "We dismantle the 'black box' of agency marketing. You get real-time access to raw data, spend allocation, and performance metrics. No hidden fees, no vanity metrics—just pure, unadulterated truth." 
    },
    { 
      id: "02",
      title: "Velocity Architecture", 
      desc: "In the digital ecosystem, latency is death. We prioritize rapid deployment and iterative testing over stagnation. We launch, measure, and pivot instantly to keep your brand ahead of the algorithm." 
    },
    { 
      id: "03",
      title: "Data-First Creativity", 
      desc: "We don't guess; we calculate. Every design choice and copy hook is backed by behavioral analytics. We fuse high-end aesthetics with hard data to create campaigns that don't just look good—they convert." 
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Core Philosophy_</h2>
          <div className={styles.line}></div>
          <p className={styles.subHeading}>The operating system of our agency.</p>
        </div>
        
        <div className={styles.grid}>
          {values.map((val, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.numberWrapper}>
                <span className={styles.number}>{val.id}</span>
              </div>
              <h3 className={styles.title}>{val.title}</h3>
              <p className={styles.desc}>{val.desc}</p>
              <div className={styles.bottomHighlight}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePhilosophy;