import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, MessageSquare, Play, SkipForward, BarChart, FileText } from "lucide-react";
import { Github } from "../Header/Header";
import { projects } from "../../data/projects";
import "./Projects.css";

// Decorative mock interfaces for project image placeholders
const ProjectMockup = ({ id }) => {
  if (id === "echoscribe") {
    return (
      <div className="project-mockup echoscribe-mock">
        <div className="mock-inner">
          <div className="mock-mic-node">
            <div className="pulse-circle"></div>
            <span className="speech-wave-bar h-1"></span>
            <span className="speech-wave-bar h-3"></span>
            <span className="speech-wave-bar h-2"></span>
            <span className="speech-wave-bar h-4"></span>
            <span className="speech-wave-bar h-1"></span>
          </div>
          <div className="mock-textbox glass-card">
            <span className="mock-meta font-mono">Transcript cleaned by AI:</span>
            <p className="mock-text">"Intelligent transcript conversion is accessible..."</p>
          </div>
        </div>
      </div>
    );
  }

  if (id === "study-assistant") {
    return (
      <div className="project-mockup study-mock">
        <div className="mock-inner">
          <div className="mock-document glass-card">
            <div className="doc-header">
              <FileText size={12} />
              <span>lecture_notes.pdf</span>
            </div>
            <div className="doc-lines">
              <span className="doc-line w-full"></span>
              <span className="doc-line w-80"></span>
              <span className="doc-line w-60"></span>
            </div>
          </div>
          <div className="mock-chat-bubble glass-card">
            <MessageSquare size={12} className="chat-bot-icon" />
            <div className="chat-lines">
              <span className="chat-line w-full"></span>
              <span className="chat-line w-40"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "spotify-clone") {
    return (
      <div className="project-mockup spotify-mock">
        <div className="mock-inner">
          <div className="mock-player-card glass-card">
            <div className="player-artwork">
              <Play size={16} fill="currentColor" />
            </div>
            <div className="player-controls">
              <span className="track-title">Midnight Melodies</span>
              <span className="track-artist">Artist Name</span>
              <div className="player-timeline">
                <span className="time-current">2:14</span>
                <div className="progress-bar"><div className="progress-fill"></div></div>
                <span className="time-total">3:40</span>
              </div>
            </div>
          </div>
          <div className="visualizer-bars">
            <span className="bar animated-bar-1"></span>
            <span className="bar animated-bar-2"></span>
            <span className="bar animated-bar-3"></span>
            <span className="bar animated-bar-4"></span>
          </div>
        </div>
      </div>
    );
  }

  return <div className="project-mockup default-mock"></div>;
};

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        {/* Header titles */}
        <motion.div 
          className="projects-header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Selected Projects</h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card glass-card"
              variants={cardVariants}
            >
              {/* Top Section: Interactive UI Mockup */}
              <div className="project-preview-container">
                <ProjectMockup id={project.id} />
              </div>

              {/* Bottom Section: Info & Details */}
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                {/* Features List */}
                <div className="project-features-container">
                  <h4 className="features-label">Key Features:</h4>
                  <ul className="project-features">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="project-feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="project-tech-badges">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="project-actions">
                  <a 
                    href={project.githubUrl || "#"} 
                    className="btn btn-outline project-action-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={14} /> Code
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="btn btn-outline project-action-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
