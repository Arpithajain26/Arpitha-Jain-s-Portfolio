import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    e.target.reset();
  };

  return (
    <section id="contact" className="section dark-section">
      <div className="container">
        <div className="section-header">
          <motion.h4 
            className="section-subtitle"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h4>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Contact <span>Me</span>
          </motion.h2>
        </div>

        <div className="contact-wrapper">
          <motion.div 
            className="contact-info glass-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Let's Connect</h3>
            <p className="contact-desc">
              I'm always open to discussing new projects, creative ideas, hackathons, or opportunities to be part of your visions.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>arpithajaincb@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <FaPhoneAlt />
                </div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>Available on request</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>Davangere, Karnataka, India</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <h4>Follow Me</h4>
              <div className="social-links">
                <a href="https://github.com/Arpithajain26" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/arpitha-jain-c-b-475438290" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
                <a href="https://www.youtube.com/@Arpithabuilds" target="_blank" rel="noreferrer" className="social-icon"><FaYoutube /></a>
                <a href="https://www.instagram.com/arpitha._.buildz" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram /></a>
                <a href="https://leetcode.com/u/ARPITHAJAINCB/" target="_blank" rel="noreferrer" className="social-icon"><SiLeetcode /></a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container glass-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Project Inquiry" required />
              </div>
              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Hello Arpitha, I would like to discuss..." required></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="btn-primary form-submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
