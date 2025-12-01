import React from 'react';
import Style from "./Banner1.module.css";
import { Link } from 'react-router-dom';
import bgVid from "../../assets/HomePage1/Banner1/vid1.mp4"

export default function Banner1() {
  return (
    <div data-aos="fade" className={Style.bannerContainer}>
      <video src={bgVid}
        autoPlay
        muted
        loop
        playsInline
        className={Style.backgroundVideo}
      />
      <div className={Style.content}>
        {/* Updated Marketing Headline */}
        <h1 className={Style.title}>Dominate The Digital Space</h1>
        
        {/* Updated Marketing Copy */}
        <p className={Style.paragraph}>
          Accelerate your brand's growth with data-driven strategies. 
          We fuse creativity with technology to deliver high-impact 
          marketing campaigns that convert clicks into customers.
        </p>
        
        {/* Updated CTA Text */}
        <Link to="/Services" className={Style.ctaButton}>Start Growing</Link>
      </div>
    </div>
  );
}