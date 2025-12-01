import React from "react";
import styles from "./CyberFeatures.module.css";

const CyberFeatures = () => {
  const features = [
    {
      id: 1,
      title: "AI-Driven Insights",
      desc: "Our neural networks predict market trends before they happen.",
      icon: "🧠",
      accent: "#00f3ff", // Cyan
    },
    {
      id: 2,
      title: "Hyper-Targeting",
      desc: "Precision audience segmentation using behavioral data points.",
      icon: "🎯",
      accent: "#ff0055", // Neon Red
    },
    {
      id: 3,
      title: "Automated Scale",
      desc: "Algorithmic campaign scaling to maximize ROI instantly.",
      icon: "⚡",
      accent: "#bc13fe", // Purple
    },
    {
      id: 4,
      title: "Secure Data Ops",
      desc: "Military-grade encryption for all client data assets.",
      icon: "🛡️",
      accent: "#00ff99", // Green
    },
  ];

  const stats = [
    { label: "ROI INCREASE", value: "300%", color: "#00ff99" },
    { label: "CAMPAIGNS", value: "500+", color: "#00f3ff" },
    { label: "GLOBAL REACH", value: "120M", color: "#bc13fe" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>System Capabilities</h2>
          <div className={styles.separator}></div>
          <p className={styles.subtitle}>
            Deploying next-gen marketing infrastructure.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.grid}>
          {features.map((item) => (
            <div 
              key={item.id} 
              className={styles.card}
              style={{ "--accent": item.accent }}
            >
              <div className={styles.cardInner}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{item.icon}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                {/* Decorative Tech Lines */}
                <div className={styles.techLineTop}></div>
                <div className={styles.techLineBottom}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span 
                className={styles.statValue}
                style={{ color: stat.color, textShadow: `0 0 15px ${stat.color}` }}
              >
                {stat.value}
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CyberFeatures;