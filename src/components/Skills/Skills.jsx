import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import "./Skills.css";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
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
    <section id="skills" className="section skills-section">
      <div className="container">
        
        {/* Header Titles */}
        <motion.div 
          className="skills-header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-tag">Competencies</span>
          <h2 className="section-title">Technical Expertise</h2>
        </motion.div>

        {/* Dynamic Grid of Skill Cards */}
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card glass-card"
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 12px 30px rgba(255, 255, 255, 0.05)"
              }}
            >
              <div 
                className="skill-icon-wrapper"
                dangerouslySetInnerHTML={{ __html: skill.svgRaw }}
              />
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
