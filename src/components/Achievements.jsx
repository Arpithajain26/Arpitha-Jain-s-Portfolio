import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaMedal, FaStar } from 'react-icons/fa';
import './Achievements.css';

const achievements = [
  {
    id: 1,
    icon: <FaMedal />,
    title: '9.6 CGPA in B.E. (CSE)',
    description: 'Maintained a stellar academic record throughout my engineering degree.'
  },
  {
    id: 2,
    icon: <FaStar />,
    title: '100-day LeetCode Streak',
    description: 'Consistent problem solver with a strong focus on algorithms and data structures.'
  },
  {
    id: 3,
    icon: <FaTrophy />,
    title: 'AWS Student Builder Group Leader',
    description: 'Leading the local AWS community, organizing events, and guiding peers in cloud technologies.'
  },
  {
    id: 4,
    icon: <FaCertificate />,
    title: 'Google Cloud Gen AI Academy',
    description: 'Selected as a participant to explore and build with advanced Generative AI tools.'
  },
  {
    id: 5,
    icon: <FaAward />,
    title: 'Gemini Student Ambassador (Applied)',
    description: 'Applied for the prestigious ambassador program to advocate for Google AI technologies.'
  }
];

const certifications = [
  {
    id: 1,
    title: 'AWS Student Builder Group Leader',
    issuer: 'Amazon Web Services',
    icon: <FaCertificate />
  },
  {
    id: 2,
    title: 'Google Cloud Gen AI Academy',
    issuer: 'Google Cloud',
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
