import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Cpu, GitBranch, ShieldCheck } from "lucide-react";
import "./About.css";

export default function About() {
  // Animation config for scroll-reveal
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        
        {/* Left Column: Developer Architecture/Git Commit illustration */}
        <motion.div 
          className="about-illustration"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <div className="illustration-grid">
            
            {/* Frontend Glass Card */}
            <div className="illus-card frontend-card glass-card">
              <div className="illus-header">
                <Cpu size={14} className="icon-muted" />
                <span className="illus-title">client/src</span>
              </div>
              <div className="illus-body">
                <div className="dot-link-row">
                  <span className="dot-indicator green"></span>
                  <span className="code-text font-mono">App.jsx (React)</span>
                </div>
                <div className="dot-link-row">
                  <span className="dot-indicator"></span>
                  <span className="code-text font-mono">useFetch.js</span>
                </div>
              </div>
            </div>

            {/* API Server Glass Card */}
            <div className="illus-card server-card glass-card">
              <div className="illus-header">
                <Server size={14} className="icon-muted" />
                <span className="illus-title">api/routes</span>
              </div>
              <div className="illus-body">
                <div className="dot-link-row">
                  <span className="dot-indicator blue"></span>
                  <span className="code-text font-mono">POST /query</span>
                </div>
                <div className="dot-link-row opacity-60">
                  <span className="dot-indicator"></span>
                  <span className="code-text font-mono">GET /auth</span>
                </div>
              </div>
            </div>

            {/* Database / Local Storage Glass Card */}
            <div className="illus-card db-card glass-card">
              <div className="illus-header">
                <Database size={14} className="icon-muted" />
                <span className="illus-title">browser/storage</span>
              </div>
              <div className="illus-body">
                <div className="dot-link-row">
                  <span className="dot-indicator yellow"></span>
                  <span className="code-text font-mono">localStorage</span>
                </div>
                <div className="dot-link-row">
                  <span className="dot-indicator yellow"></span>
                  <span className="code-text font-mono">IndexedDB</span>
                </div>
              </div>
            </div>

            {/* Git Branch Flow Graphic (Inline SVG) */}
            <div className="git-flow-container glass-card">
              <div className="illus-header">
                <GitBranch size={14} className="icon-muted" />
                <span className="illus-title">git log --oneline</span>
              </div>
              <div className="git-logs font-mono">
                <div className="git-log-line">
                  <span className="commit-hash text-muted">f38c92a</span>
                  <span className="commit-msg">feat: add AI assistant chat</span>
                </div>
                <div className="git-log-line">
                  <span className="commit-hash text-muted">9b1a03e</span>
                  <span className="commit-msg">refactor: optimize storage load</span>
                </div>
                <div className="git-log-line">
                  <span className="commit-hash text-muted">7d6e4b1</span>
                  <span className="commit-msg">initial: setup React project</span>
                </div>
              </div>
            </div>

            {/* Decorative Connection Lines */}
            <svg className="connector-svg" width="100%" height="100%">
              <path d="M 120 70 L 260 120" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              <path d="M 280 200 L 140 280" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
            </svg>
            
          </div>
        </motion.div>

        {/* Right Column: About Details */}
        <motion.div 
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <span className="section-tag">Overview</span>
          <h2 className="section-title">About Me</h2>
          
          <div className="about-text">
            <p>
              I'm <strong>Shivam Khajuria</strong>, a Computer Science Engineering student currently pursuing my third year at <strong>Model Institute of Engineering and Technology</strong>.
            </p>
            
            <p>
              I enjoy building practical web applications using <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong> while continuously improving both frontend and backend development skills.
            </p>
            
            <p>
              Alongside web development, I actively practice <strong>Data Structures and Algorithms in C++</strong> and have solved <strong>230+ LeetCode problems</strong>.
            </p>
            
            <p>
              I enjoy learning modern technologies, writing clean code, and building applications that solve real-world problems.
            </p>
          </div>

          <div className="about-badges">
            <div className="about-badge glass-card">
              <ShieldCheck size={16} />
              <span>Clean Code Principles</span>
            </div>
            <div className="about-badge glass-card">
              <ShieldCheck size={16} />
              <span>Analytical Problem Solver</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
