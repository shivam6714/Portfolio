import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Terminal, User, Star } from "lucide-react";
import "./Hero.css";

const roles = ["Full Stack Developer", "React Developer", "MERN Learner", "Problem Solver"];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typing animation loop
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          // Stay on full word for a while
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(100);
          return;
        }
      }
      setTypingSpeed(isDeleting ? 50 : 100);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Framer Motion entry configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Intro Text */}
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className="hero-greeting">
            Hi, I'm
          </motion.span>
          
          <motion.h1 variants={itemVariants} className="hero-name">
            Shivam Khajuria
          </motion.h1>
          
          <motion.div variants={itemVariants} className="hero-typing-container">
            <span className="hero-typing-prefix">&gt; </span>
            <span className="hero-typing">{text}</span>
            <span className="hero-cursor">|</span>
          </motion.div>
          
          <motion.p variants={itemVariants} className="hero-bio">
            I enjoy building modern web applications that solve real-world problems. 
            I love creating clean interfaces, exploring full-stack development, and 
            continuously improving my problem-solving skills through Data Structures 
            and Algorithms.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-cta">
            <button 
              onClick={() => handleScrollTo("projects")} 
              className="btn btn-primary"
            >
              View Projects <ArrowRight size={16} />
            </button>
            <button 
              onClick={() => handleScrollTo("contact")} 
              className="btn btn-secondary"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Premium Developer Illustration */}
        <motion.div 
          className="hero-illustration"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="illustration-wrapper">
            
            {/* Terminal Window Mock */}
            <motion.div 
              className="mock-window terminal-window glass-card"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="window-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
                <span className="window-title"><Terminal size={12} /> bash</span>
              </div>
              <div className="window-body mono-text">
                <p className="cmd-line"><span className="cmd-prompt">shivam@portfolio:~$</span> npm run dev</p>
                <p className="log-line text-success">✓ Vite dev server started</p>
                <p className="log-line">➜ Local:   <span className="text-link">http://localhost:5173/</span></p>
                <p className="log-line text-muted">Active compilers: React, SWC</p>
                <p className="cmd-line"><span className="cmd-prompt">shivam@portfolio:~$</span> <span className="pulse-cursor">█</span></p>
              </div>
            </motion.div>

            {/* Code Snippet Card Mock */}
            <motion.div 
              className="mock-window code-window glass-card"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            >
              <div className="window-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
                <span className="window-title"><Code2 size={12} /> App.jsx</span>
              </div>
              <div className="window-body mono-text">
                <p><span className="keyword">const</span> developer = &#123;</p>
                <p>&nbsp;&nbsp;name: <span className="string">"Shivam Khajuria"</span>,</p>
                <p>&nbsp;&nbsp;skills: [<span className="string">"MERN"</span>, <span className="string">"DSA"</span>],</p>
                <p>&nbsp;&nbsp;leetcodeSolved: <span className="number">230</span>,</p>
                <p>&nbsp;&nbsp;passionate: <span className="boolean">true</span></p>
                <p>&#125;;</p>
              </div>
            </motion.div>

            {/* Floating UI Widget: Analytics Stats */}
            <motion.div 
              className="mock-window widget-window glass-card"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="widget-header">
                <div className="avatar-placeholder"><User size={12} /></div>
                <div className="widget-info">
                  <span className="widget-name">DSA Profile</span>
                  <span className="widget-status">Status: Active</span>
                </div>
              </div>
              <div className="widget-content">
                <div className="stat-row">
                  <span className="stat-label">LeetCode</span>
                  <span className="stat-value"><Star size={12} className="text-yellow" /> 230+</span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill"></div>
                </div>
              </div>
            </motion.div>

            {/* Decorative background grid and points */}
            <div className="background-decorations">
              <div className="grid-bg"></div>
              <div className="glow-point glow-1"></div>
              <div className="glow-point glow-2"></div>
            </div>
            
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
