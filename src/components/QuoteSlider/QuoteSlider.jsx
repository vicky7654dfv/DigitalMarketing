import React, { useState, useEffect } from 'react';
import styles from './QuoteSlider.module.css';

const quotes = [
  {
    id: 1,
    text: "Marketing is no longer about the stuff that you make, but about the stories you tell.",
    author: "Seth Godin",
    role: "Marketing Expert"
  },
  {
    id: 2,
    text: "Good marketing makes the company look smart. Great marketing makes the customer feel smart.",
    author: "Joe Chernov",
    role: "CMO, Pendo"
  },
  {
    id: 3,
    text: "Innovation needs to be part of your culture. Consumers are transforming faster than we are.",
    author: "Ian Schafer",
    role: "CEO, Kindred"
  }
];

const QuoteSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderContainer} data-aos="fade-up">
      <div className={styles.overlay}></div>
      
      <div className={styles.sliderContent}>
        <div className={styles.iconWrapper}>
          <i className="fa-solid fa-quote-left"></i>
        </div>

        {quotes.map((quote, index) => (
          <div 
            key={quote.id}
            className={`${styles.slide} ${index === current ? styles.active : ''}`}
          >
            <p className={styles.quoteText}>"{quote.text}"</p>
            <div className={styles.authorInfo}>
              <h4 className={styles.authorName}>{quote.author}</h4>
              <span className={styles.authorRole}>{quote.role}</span>
            </div>
          </div>
        ))}

        <div className={styles.dots}>
          {quotes.map((_, index) => (
            <span 
              key={index} 
              className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteSlider;