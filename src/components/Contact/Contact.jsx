import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";
import { socials } from "../../data/socials";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${socials.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      const data = await response.json();
      
      if (response.ok && data.success === "true") {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const revealLeftVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const revealRightVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        
        {/* Left Side: Call to Action Information */}
        <motion.div 
          className="contact-info-panel"
          variants={revealLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-tag">Connection</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-pitch">
            I'm currently looking for internships, research collaborations, and junior developer opportunities. 
            Have a project in mind, or just want to chat? Shoot me a message, and I'll get back to you within 24 hours.
          </p>
          <div className="contact-meta-details">
            <div className="meta-row">
              <span className="meta-label">Location</span>
              <span className="meta-value">Jammu & Kashmir, India</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Opportunities</span>
              <span className="meta-value text-glow">Open to Relocation</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Glassmorphism Contact Form Card */}
        <motion.div 
          className="contact-form-panel"
          variants={revealRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="contact-form-card glass-card">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="input-group">
                    <label htmlFor="name" className="input-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="input-field"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="email" className="input-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="input-field"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="message" className="input-label">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="input-field textarea-field"
                    ></textarea>
                  </div>

                  {error && (
                    <div className="error-message">
                      {error}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn-primary submit-btn" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        Send Message <Send size={14} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  className="success-overlay"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <CheckCircle2 size={48} className="success-icon" />
                  <h3 className="success-title">Message Sent!</h3>
                  <p className="success-text">
                    Thank you for reaching out. Shivam will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="btn btn-outline reset-btn"
                  >
                    Send Another Message <ArrowRight size={14} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
