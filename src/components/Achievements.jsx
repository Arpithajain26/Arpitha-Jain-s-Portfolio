import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaMedal, FaStar } from 'react-icons/fa';
import './Achievements.css';

const achievements = [
  {
    id: 1,
    icon: <FaTrophy />,
    title: 'Winner at State Level Hackathon 2025',
    description: 'Developed an innovative AI solution for agriculture and secured 1st place among 50+ teams.'
  },
  {
    id: 2,
    icon: <FaMedal />,
    title: 'Top 10 at Smart India Hackathon 2024',
    description: 'Recognized for creating a robust public service management platform.'
  },
  {
    id: 3,
    icon: <FaStar />,
    title: '500+ problems solved on LeetCode',
    description: 'Consistent problem solver with proficiency in algorithms and data structures.'
  },
  {
    id: 4,
    icon: <FaCertificate />,
    title: 'Published research paper on AI in Healthcare',
    description: 'Co-authored a paper on predictive modeling in early disease detection, published in IEEE.'
  }
];

const certifications = [
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    icon: <FaCertificate />
  },
  {
    id: 2,
    title: 'Google Cloud Digital Leader',
    issuer: 'Google Cloud',
    icon: <FaCertificate />
  },
  {
    id: 3,
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM / Coursera',
    icon: <FaCertificate />
  },
  {
    id: 4,
    title: 'Meta Front-End Developer Certificate',
    issuer: 'Meta / Coursera',
    icon: <FaCertificate />
  },
  {
    id: 5,
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    icon: <FaCertificate />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Achievements</span>
          <h2 className="section-title">Milestones & <span>Certifications</span></h2>
        </motion.div>

        <div className="achievements-content">
          <div className="achievements-column">
            <h3 className="column-title">Key Milestones</h3>
            <motion.div 
              className="achievements-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {achievements.map((item) => (
                <motion.div key={item.id} className="achievement-card glass-card" variants={itemVariants}>
                  <div className="achievement-icon">
                    {item.icon}
                  </div>
                  <div className="achievement-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="achievements-column">
            <h3 className="column-title">Certifications</h3>
            <motion.div 
              className="certifications-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {certifications.map((cert) => (
                <motion.div key={cert.id} className="certification-card glass-card" variants={itemVariants}>
                  <div className="cert-icon">
                    {cert.icon}
                  </div>
                  <div className="cert-info">
                    <h4>{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
