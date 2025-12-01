import React from "react";
import styles from "./TeamGrid.module.css";
import member1 from "../../assets/Homepage2/TeamGrid/1.webp";
import member2 from "../../assets/Homepage2/TeamGrid/2.webp";
import member3 from "../../assets/Homepage2/TeamGrid/3.webp";
import member4 from "../../assets/Homepage2/TeamGrid/4.webp";
import member5 from "../../assets/Homepage2/TeamGrid/5.webp";
import member6 from "../../assets/Homepage2/TeamGrid/6.webp";

const TeamGrid = () => {
  const team = [
    { id: 1, name: "Alex Sterling", role: "CEO & Founder", img: member1, department: "Strategy", color: "#00f3ff" },
    { id: 2, name: "Sarah Chen", role: "CTO", img: member2, department: "Technology", color: "#bc13fe" },
    { id: 3, name: "Marcus Reed", role: "Head of SEO", img: member3, department: "Analytics", color: "#ff0055" },
    { id: 4, name: "Olivia Pierce", role: "Creative Director", img: member4, department: "Design", color: "#f59e0b" },
    { id: 5, name: "David Park", role: "PPC Specialist", img: member5, department: "Advertising", color: "#00ff99" },
    { id: 6, name: "Jamie Foster", role: "Content Strategist", img: member6, department: "Content", color: "#8B5CF6" }
  ];

  const handleMemberClick = (member) => {
    window.location.href = `/Error`;
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>The Operatives</h2>
        <p className={styles.subtitle}>The elite team behind every digital victory</p>
      </div>
      
      <div className={styles.grid}>
        {team.map((member) => (
          <div 
            key={member.id} 
            className={styles.card}
            onClick={() => handleMemberClick(member)}
            style={{ '--accent-color': member.color }}
          >
            <div className={styles.cardInner}>
              <div className={styles.imgContainer}>
                <div className={styles.imgOverlay}></div>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className={styles.img} 
                  loading="lazy"
                />
                <div className={styles.departmentTag}>
                  <span>{member.department}</span>
                </div>
              </div>
              
              <div className={styles.info}>
                <div className={styles.nameWrapper}>
                  <h4 className={styles.name}>{member.name}</h4>
                  <span className={styles.memberId}>ID: 0{member.id}</span>
                </div>
                <p className={styles.role}>{member.role}</p>
                
                <button 
                  className={styles.connectButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMemberClick(member);
                  }}
                >
                  <span className={styles.buttonIcon}>↗</span>
                  View Profile
                </button>
              </div>
              
              <div className={styles.hoverGlow}></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.footer}>
        <p className={styles.footerText}>Ready to deploy your next campaign?</p>
        <button 
          className={styles.ctaButton}
          onClick={() => window.location.href = "/Error"}
        >
          Assemble Your Team →
        </button>
      </div>
    </section>
  );
};

export default TeamGrid;