import React from "react";
import styles from "./VideoSection.module.css";

const VideoSection = () => {
  const youtubeVideoId = "iEijDwVAdMM";
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;

  return (
    <section className={styles.section} data-aos="fade-up">
      <div className={styles.container}>
        
        {/* Text Content */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            The <span className={styles.highlight}>Digital</span> Shift
          </h1>
          <p className={styles.paragraph}>
            In a world driven by algorithms, visibility is the only currency that matters. 
            Our strategic approach fuses data analytics with creative storytelling to 
            hack the system and place your brand directly in front of your target audience.
            Stop competing. Start dominating.
          </p>
          
          <a 
            href={youtubeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ytLink}
          >
            WATCH SOURCE TERMINAL &rarr;
          </a>
        </div>

        {/* Video Embed */}
        <div className={styles.videoWrapper}>
          <div className={styles.cyberFrame}>
            {/* --- CLICKABLE OVERLAY --- */}
            {/* This sits on top of the iframe and captures the click */}
            <a 
              href={youtubeUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.videoOverlay}
              aria-label="Watch Video on YouTube"
            ></a>

            <iframe
              className={styles.iframe}
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&rel=0&modestbranding=1&controls=0`}
              title="Digital Marketing Strategy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            {/* Decorative Corner Accents */}
            <div className={styles.cornerTopLeft}></div>
            <div className={styles.cornerBottomRight}></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;