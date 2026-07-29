import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'AI Health Diagnosis System',
    description: 'AI-powered medical diagnosis application utilizing deep learning models to assist healthcare professionals with accurate early disease detection.',
    tags: ['Python', 'TensorFlow', 'Flask', 'React'],
    github: '#',
    demo: '#',
    accentColor: '#6C63FF'
  },
  {
    title: 'Smart Campus Management',
    description: 'An IoT-based campus management system integrating smart sensors and centralized dashboards to monitor energy usage and facility security.',
    tags: ['Node.js', 'MongoDB', 'React', 'MQTT'],
    github: '#',
    demo: '#',
    accentColor: '#00C2FF'
  },
  {
    title: 'E-Commerce Platform',
    description: 'A comprehensive full-stack e-commerce solution featuring user authentication, seamless product browsing, shopping cart functionality, and secure payment integration.',
    tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    github: '#',
    demo: '#',
    accentColor: '#F7931E'
  },
  {
    title: 'NLP Chatbot Assistant',
    description: 'An intelligent conversational agent built using advanced transformer models to provide responsive, context-aware customer support and query resolution.',
    tags: ['Python', 'PyTorch', 'FastAPI', 'React'],
    github: '#',
    demo: '#',
    accentColor: '#EE4C2C'
  },
  {
    title: 'Cloud File Storage',
    description: 'A robust, distributed file storage system deployed on AWS, offering high availability, secure data encryption, and fast retrieval mechanisms.',
    tags: ['AWS S3', 'Lambda', 'React', 'Node.js'],
    github: '#',
    demo: '#',
    accentColor: '#33D1FF'
  },
  {
    title: 'Portfolio Website',
    description: 'A premium, responsive portfolio website featuring fluid animations, glassmorphism design principles, and comprehensive project showcases.',
    tags: ['React', 'Vite', 'Framer Motion', 'CSS'],
    github: '#',
    demo: '#',
    accentColor: '#8B85FF'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <motion.span 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Work
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured <span>Projects</span>
          </motion.h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div 
                className="project-accent-bar" 
                style={{ background: project.accentColor }}
              ></div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository">
                      <FaGithub />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
