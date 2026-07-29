import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';
import './Hackathons.css';

const hackathons = [
  {
    id: 1,
    name: "Smart India Hackathon 2024",
    result: "Top 10 Finish",
    description: "Built an AI-powered crop disease detection system to help farmers identify issues early.",
    icon: <FaTrophy className="rank-icon rank-top" />
  },
  {
    id: 2,
    name: "HackBangalore 2025",
    result: "Winner",
    description: "Developed a smart city traffic management solution using computer vision and edge computing.",
    icon: <FaTrophy className="rank-icon rank-winner" />
  },
  {
    id: 3,
    name: "CodeFest 2024",
    result: "Runner-up",
    description: "Created an NLP-based legal document analyzer to simplify complex legal texts for common people.",
    icon: <FaMedal className="rank-icon rank-runner" />
  },
  {
    id: 4,
    name: "Google Developer Student Club Hackathon",
    result: "Finalist",
    description: "Built an accessible education platform tailored for visually impaired students.",
    icon: <FaAward className="rank-icon rank-finalist" />
  },
  {
    id: 5,
    name: "MLH Local Hack Day",
    result: "Participant",
    description: "Developed a mental health chatbot leveraging OpenAI APIs for empathetic conversations.",
    icon: <FaCertificate className="rank-icon rank-participant" />
  },
  {
    id: 6,
    name: "IEEE Hackathon 2024",
    result: "2nd Place",
    description: "Designed an IoT-based energy monitoring system for smart homes to optimize power consumption.",
    icon: <FaMedal className="rank-icon rank-runner" />
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
