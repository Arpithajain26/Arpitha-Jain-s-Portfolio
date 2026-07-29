import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import './Education.css';

const educationData = [
  {
    id: 1,
    degree: "B.E. in Computer Science & Engineering",
    institution: "Bapuji Institute of Engineering and Technology, Davangere",
    duration: "2022 - 2026",
    score: "CGPA: 8.5/10",
    description: "Focused on core CS subjects, AI, full-stack development, and data science. Active participant in coding clubs and multiple hackathons."
  },
  {
    id: 2,
    degree: "Pre-University (12th)",
    institution: "XYZ PU College, Davangere",
    duration: "2020 - 2022",
    score: "Percentage: 90%",
    description: "Studied Physics, Chemistry, Mathematics, and Computer Science. Built a strong foundation in analytical and logical thinking."
  },
  {
    id: 3,
    degree: "High School (10th)",
    institution: "ABC High School, Davangere",
    duration: "2020",
    score: "Percentage: 95%",
    description: "Completed secondary education with excellence, actively involved in science fairs and mathematics olympiads."
  }
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h4 
            className="section-subtitle"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h4>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Academic <span>Background</span>
          </motion.h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {educationData.map((edu, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={edu.id}>
              <motion.div 
                className="timeline-dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
              >
                <FaGraduationCap />
              </motion.div>
              
              <motion.div 
                className="timeline-content glass-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="edu-meta">
                  <span className="edu-duration">
                    <FaCalendarAlt className="icon-sm" /> {edu.duration}
                  </span>
                  <span className="edu-score">{edu.score}</span>
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-institution">{edu.institution}</h4>
                <p className="edu-desc">{edu.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
