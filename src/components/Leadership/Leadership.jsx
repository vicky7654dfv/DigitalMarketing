import React from "react";
import styles from "./Leadership.module.css";
import lead1 from "../../assets/About/Leadership/1.webp"; 
import lead2 from "../../assets/About/Leadership/2.webp";
import lead3 from "../../assets/About/Leadership/3.webp";

const Leadership = () => {
  const leaders = [
    { 
      name: "Alex Sterling", 
      role: "CEO & Founder", 
      img: lead1, 
      bio: "Visionary architect of the modern web. Former MIT researcher turned digital pioneer."
    },
    { 
      name: "Sarah Jenkins", 
      role: "Chief Strategy Officer", 
      img: lead2, 
      bio: "Mastermind behind 500% ROI campaigns. Ex-Google strategist with 10+ years experience."
    },
    { 
      name: "Marcus Chen", 
      role: "CTO & Co-Founder", 
      img: lead3, 
      bio: "AI/ML expert who built the algorithmic core. Stanford PhD in Computer Science."
    },
  ];

  const handleConnect = (e, name) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = "/Error";
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>The Command Unit</h2>
      <p className={styles.subtitle}>The minds engineering digital dominance</p>
      
      <div className={styles.grid}>
        {leaders.map((leader, index) => (
          <div 
            key={index} 
            className={styles.card}
            onClick={() => window.location.href = "/Error"}
          >
            <div className={styles.imageWrapper}>
              <img src={leader.img} alt={leader.name} className={styles.img} />
              <div className={styles.glowEffect}></div>
              
              <div className={styles.socialOverlay}>
                <button 
                  className={styles.connectButton}
                  onClick={(e) => handleConnect(e, leader.name)}
                >
                  <span className={styles.buttonIcon}>↗</span>
                  <span>Connect via LinkedIn</span>
                </button>
              </div>
            </div>
            
            <div className={styles.info}>
              <h3 className={styles.name}>{leader.name}</h3>
              <p className={styles.role}>{leader.role}</p>
              <p className={styles.bio}>{leader.bio}</p>
              
              <button 
                className={styles.detailsButton}
                onClick={(e) => handleConnect(e, leader.name)}
              >
                View Full Profile →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;