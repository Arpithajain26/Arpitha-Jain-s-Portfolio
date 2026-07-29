import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer Intern',
    company: 'XYZ Tech Solutions',
    period: 'Jun 2025 - Aug 2025',
    description: 'Built RESTful APIs and responsive web interfaces. Improved application performance by 40%.',
  },
  {
    id: 2,
    role: 'AI/ML Research Intern',
    company: 'ABC Research Labs',
    period: 'Jan 2025 - Apr 2025',
    description: 'Developed deep learning models for image classification. Achieved 95% accuracy on benchmark datasets.',
  },
  {
    id: 3,
    role: 'Cloud Computing Intern',
    company: 'CloudFirst Technologies',
    period: 'Jun 2024 - Aug 2024',
    description: 'Designed and deployed serverless architectures on AWS. Reduced infrastructure costs by 30%.',
  },
  {
    id: 4,
    role: 'Web Development Intern',
    company: 'Digital Creations',
    period: 'Jan 2024 - Mar 2024',
    description: 'Created responsive web applications using React and Node.js. Delivered 3 client projects on time.',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section dark-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Experience</span>
          <h2 className="section-title">My <span>Journey</span></h2>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={exp.id}
                className={`timeline-item ${isEven ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="timeline-dot">
                  <FaBriefcase />
                </div>
                
                <div className="timeline-content glass-card">
                  <div className="timeline-date">
                    <FaCalendarAlt className="date-icon" />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
