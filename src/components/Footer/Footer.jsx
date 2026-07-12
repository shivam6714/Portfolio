import React from "react";
import { Github, Linkedin, LeetCodeIcon } from "../Header/Header";
import { socials } from "../../data/socials";
import "./Footer.css";

export default function Footer() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Top Section */}
        <div className="footer-top">
          
          {/* Left Column: Brand Description */}
          <div className="footer-brand">
            <span className="footer-logo">Shivam Khajuria</span>
            <p className="footer-desc">
              Building meaningful digital experiences with modern web technologies.
            </p>
          </div>

          {/* Center Column: Quick Links */}
          <div className="footer-nav">
            <span className="footer-title">Quick Links</span>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
              </li>
            </ul>
          </div>

          {/* Right Column: Social Links */}
          <div className="footer-socials-col">
            <span className="footer-title">Connect</span>
            <div className="footer-icons">
              <a href={socials.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="footer-icon">
                <Github size={18} />
              </a>
              <a href={socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="footer-icon">
                <Linkedin size={18} />
              </a>
              <a href={socials.leetcode} aria-label="LeetCode" target="_blank" rel="noreferrer" className="footer-icon">
                <LeetCodeIcon size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2026 Shivam Khajuria. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
