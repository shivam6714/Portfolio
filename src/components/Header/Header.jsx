import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { socials } from "../../data/socials";
import "./Header.css";

// Custom Github SVG Icon
export const Github = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width="1em" 
    height="1em" 
    {...props}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// Custom LinkedIn SVG Icon
export const Linkedin = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width="1em" 
    height="1em" 
    {...props}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);


// Custom LeetCode SVG Icon matching the monochrome theme
export const LeetCodeIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width="1em" 
    height="1em" 
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.38 1.38 0 0 0 0 1.948l1.05 1.05a1.38 1.38 0 0 0 1.947 0L14.79 4.137a1.38 1.38 0 0 0 0-1.948L13.74.414A1.373 1.373 0 0 0 13.483 0zm-7.6 12.164a1.374 1.374 0 0 0-.96.414l-3.52 3.52a1.38 1.38 0 0 0 0 1.948l1.05 1.05a1.38 1.38 0 0 0 1.948 0l3.52-3.52a1.38 1.38 0 0 0 0-1.948l-1.05-1.05a1.374 1.374 0 0 0-.988-.414zm9.467 1.258a1.374 1.374 0 0 0-.96.414l-6.03 6.03a1.38 1.38 0 0 0 0 1.948l1.05 1.05a1.38 1.38 0 0 0 1.947 0l6.03-6.03a1.38 1.38 0 0 0 0-1.948l-1.05-1.05a1.374 1.374 0 0 0-.987-.414z"/>
  </svg>
);

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track page scroll to toggle sticky blur style and update scrollspy active state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scrollspy logic
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 120; // offset

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="container header-container">
          {/* Logo / Brand Name */}
          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, "#home")}>
            Shivam
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link ${
                      activeSection === link.href.substring(1) ? "active" : ""
                    }`}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.span
                        layoutId="activeTab"
                        className="nav-active-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials & Resume (Desktop) */}
          <div className="header-actions">
            <div className="social-icons">
              <a href={socials.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="social-icon">
                <Github size={18} />
              </a>
              <a href={socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="social-icon">
                <Linkedin size={18} />
              </a>
              <a href={socials.leetcode} aria-label="LeetCode" target="_blank" rel="noreferrer" className="social-icon">
                <LeetCodeIcon size={18} />
              </a>
            </div>
            
            <a href={socials.resume} target="_blank" rel="noreferrer" className="btn btn-outline resume-btn">
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="mobile-nav-menu"
          >
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`mobile-nav-link ${
                    activeSection === link.href.substring(1) ? "active" : ""
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="mobile-socials">
              <a href={socials.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="social-icon">
                <Github size={20} />
              </a>
              <a href={socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href={socials.leetcode} aria-label="LeetCode" target="_blank" rel="noreferrer" className="social-icon">
                <LeetCodeIcon size={20} />
              </a>
            </div>
            
            <div style={{ padding: "0 24px", width: "100%" }}>
              <a href={socials.resume} target="_blank" rel="noreferrer" className="btn btn-outline mobile-resume-btn">
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
