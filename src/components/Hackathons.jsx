import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';
import './Hackathons.css';

const hackathons = [
  {
    id: 1,
    name: "Google Cloud Gen AI Academy",
    result: "Prototype Phase",
    description: "Participated and built innovative prototypes using advanced Google Gen AI tools.",
    icon: <FaTrophy className="rank-icon rank-top" />
  },
  {
    id: 2,
    name: "Webcmd Hackathon",
    result: "Agentic Payments Edition",
    description: "Developed an AI agentic payment solution for seamless and intelligent transactions.",
    icon: <FaTrophy className="rank-icon rank-winner" />
  },
  {
    id: 3,
    name: "Eureka Project Idea Pitching",
    result: "Participant",
    description: "Pitched a novel AI-based project idea focusing on real-world problem solving.",
    icon: <FaMedal className="rank-icon rank-runner" />
  },
  {
    id: 4,
    name: "AI-related Hackathons",
    result: "Multiple Appearances",
    description: "Active participant in various AI hackathons building impactful tech applications.",
    icon: <FaAward className="rank-icon rank-finalist" />
  }
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="section dark-section">
      <div className="container">
        <div className="section-header">
          <motion.h4 
            className="section-subtitle"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Hackathons
          </motion.h4>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Competition <span>Experience</span>
          </motion.h2>
        </div>

        <div className="hackathons-grid">
          {hackathons.map((hackathon, index) => (
            <motion.div 
              key={hackathon.id}
              className="hackathon-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="hackathon-header">
                <div className="hackathon-icon-wrapper">
                  {hackathon.icon}
                </div>
                <div className="hackathon-result">{hackathon.result}</div>
              </div>
              <h3 className="hackathon-name">{hackathon.name}</h3>
              <p className="hackathon-desc">{hackathon.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
