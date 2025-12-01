import React from "react";
import Style from "./Footer.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/Header/logo.webp"; 

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleQuickLinkClick = (e, path) => {
    e.preventDefault();
    
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      navigate(path);
      
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  const handleErrorLink = (e) => {
    e.preventDefault();
    navigate("/Error");
  };

  return (
    <>
      <div className={Style.footerWrap}>
        {/* Box 1: Brand Info */}
        <div className={Style.box}>
          <div className={Style.logoContainer}>
            <img src={logo} alt="TheStackly Logo" className={Style.logoImg} />
          </div>
          <p>
            Empowering businesses with cutting-edge IT solutions. From 
            scalable development to advanced analytics, we engineer 
            digital transformation for the future of your enterprise.
          </p>
          <button 
            className={Style.aboutBtn}
            onClick={(e) => handleQuickLinkClick(e, "/About")}
          >
            Discover Our Story <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {/* Box 2: Agency Links */}
        <div className={Style.box}>
          <h4>Agency</h4>
          <ul>
            <li>
              <a
                href="/About"
                onClick={(e) => handleQuickLinkClick(e, "/About")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/HomePage2"
                onClick={(e) => handleQuickLinkClick(e, "/HomePage2")}
              >
                Home Page 2
              </a>
            </li>
            <li>
              <a
                href="/Services"
                onClick={(e) => handleQuickLinkClick(e, "/Services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                onClick={(e) => handleQuickLinkClick(e, "/Contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Box 3: Resources Links */}
        <div className={Style.box}>
          <h4>Resources</h4>
          <ul>
            <li>
              <a
                href="/Dashboard"
                onClick={(e) => handleQuickLinkClick(e, "/Dashboard")}
                className={Style.categoryLink}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/FAQ"
                onClick={(e) => handleQuickLinkClick(e, "/FAQ")}
                className={Style.categoryLink}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/SignUp"
                onClick={(e) => handleQuickLinkClick(e, "/SignUp")}
                className={Style.categoryLink}
              >
                SignUp
              </a>
            </li>
            <li>
              <a
                href="/Login"
                onClick={(e) => handleQuickLinkClick(e, "/Login")}
                className={Style.categoryLink}
              >
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Box 4: Headquarters */}
        <div className={Style.box}>
          <h4>Headquarters</h4>
          <ul className={Style.contactInfo}>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>
                MMR Complex, Chinna Thirupathi, near Chinna Muniyappan Kovil, 
                Salem, Tamil Nadu 636008
              </span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              +91 98765 43210
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              info@thestackly.com
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              Mon - Fri: 09:00 AM - 07:00 PM
            </li>
          </ul>
        </div>

        {/* Box 5: Connect */}
        <div className={Style.box}>
          <h4>Connect With Us</h4>
          <p>
            Join our tech community. Follow us for industry insights, 
            updates on new stacks, and company news.
          </p>
          <div className={Style.media}>
            <a
              href="/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={Style.bottomFooter}>
        <hr />
        <p>
          © 2025 TheStackly Solutions. All rights reserved. 
          Innovating for a better digital tomorrow.
        </p>
      </div>
    </>
  );
}