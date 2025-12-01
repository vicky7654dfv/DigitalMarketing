import React from 'react';
import styles from './TextMarquee.module.css';

const TextMarquee = () => {
  const words = [
    "Digital Strategy", "•", "SEO Mastery", "•", "Brand Identity", "•", 
    "Growth Hacking", "•", "Data Analytics", "•", "Social Impact", "•",
    "Web Experience", "•", "Content Creation", "•"
  ];

  return (
    <div className={styles.marqueeSection}>
      <div className={styles.track}>
        <div className={styles.content}>
          {words.map((word, index) => (
            <span key={index} className={word === "•" ? styles.separator : styles.word}>
              {word}
            </span>
          ))}
        </div>
        {/* Duplicate content for seamless loop */}
        <div className={styles.content} aria-hidden="true">
          {words.map((word, index) => (
            <span key={`dup-${index}`} className={word === "•" ? styles.separator : styles.word}>
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextMarquee;