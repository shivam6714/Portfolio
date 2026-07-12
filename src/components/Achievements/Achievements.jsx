import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, Flame, Code } from "lucide-react";
import "./Achievements.css";

const stats = [
  {
    id: 1,
    value: "230+",
    label: "LeetCode Problems Solved",
    icon: <Code size={24} className="stat-icon" />,
    desc: "Demonstrated deep analytical capabilities and consistent problem solving using C++."
  },
  {
    id: 2,
    value: "3rd Year",
    label: "Computer Science Student",
    icon: <GraduationCap size={24} className="stat-icon" />,
    desc: "Currently maintaining core computer engineering concepts at MIET."
  },
  {
    id: 3,
    value: "Learning",
    label: "MERN Stack",
    icon: <Flame size={24} className="stat-icon" />,
    desc: "Developing production-ready web servers, routing pipelines, and database architecture."
  },
  {
    id: 4,
    value: "Passionate",
    label: "Building Real-World Apps",
    icon: <Award size={24} className="stat-icon" />,
    desc: "Committed to delivering user-friendly, accessibility-first interfaces that solve daily issues."
  }
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="achievements" className="section achievements-section">
      <div className="container">
        
        {/* Header */}
        <motion.div 
          className="achievements-header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-tag">Highlights</span>
          <h2 className="section-title">Milestones & Focus</h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="achievement-card glass-card"
              variants={cardVariants}
            >
              <div className="achievement-icon-wrapper">
                {stat.icon}
              </div>
              <div className="achievement-info">
                <span className="achievement-value">{stat.value}</span>
                <span className="achievement-label">{stat.label}</span>
                <p className="achievement-desc">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
