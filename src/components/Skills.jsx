import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiHtml5, SiCss, SiStreamlit, SiFlask, SiGit, SiGithub, SiSqlite, SiC
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { BsRobot, BsGraphUp } from 'react-icons/bs';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: <SiPython style={{ color: '#3776AB' }} /> },
      { name: 'Java', icon: <FaJava style={{ color: '#007396' }} /> },
      { name: 'C', icon: <SiC style={{ color: '#A8B9CC' }} /> },
      { name: 'SQL', icon: <FaDatabase style={{ color: '#4479A1' }} /> },
      { name: 'HTML', icon: <SiHtml5 style={{ color: '#E34F26' }} /> },
      { name: 'CSS', icon: <SiCss style={{ color: '#1572B6' }} /> },
      { name: 'JavaScript', icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Flask', icon: <SiFlask style={{ color: '#FFFFFF' }} /> },
      { name: 'Streamlit', icon: <SiStreamlit style={{ color: '#FF4B4B' }} /> }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit style={{ color: '#F05032' }} /> },
      { name: 'GitHub', icon: <SiGithub style={{ color: '#FFFFFF' }} /> },
      { name: 'VS Code', icon: <VscVscode style={{ color: '#007ACC' }} /> },
      { name: 'SQLite', icon: <SiSqlite style={{ color: '#003B57' }} /> }
    ]
  },
  {
    title: 'Domains',
    skills: [
      { name: 'AI', icon: <BsRobot style={{ color: '#6C63FF' }} /> },
      { name: 'Machine Learning', icon: <BsGraphUp style={{ color: '#00C2FF' }} /> },
      { name: 'Data Science', icon: <FaDatabase style={{ color: '#47A248' }} /> }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="section dark-section">
      <div className="container">
        <div className="section-header">
          <motion.span 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technologies & <span>Tools</span>
          </motion.h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className="skill-category glass-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <motion.div 
                className="category-skills"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
