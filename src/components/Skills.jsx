import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiCplusplus, SiJavascript, SiTypescript, SiMysql,
  SiReact, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss,
  SiNodedotjs, SiExpress, SiFlask, SiDjango, SiFastapi,
  SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv,
  SiAmazonwebservices, SiGooglecloud, SiDocker, SiKubernetes, SiGit,
  SiVisualstudiocode, SiFigma, SiPostman, SiMongodb, SiPostgresql
} from 'react-icons/si';
import { FaJava, FaRobot } from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: <SiPython style={{ color: '#3776AB' }} /> },
      { name: 'Java', icon: <FaJava style={{ color: '#007396' }} /> },
      { name: 'C++', icon: <SiCplusplus style={{ color: '#00599C' }} /> },
      { name: 'JavaScript', icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
      { name: 'TypeScript', icon: <SiTypescript style={{ color: '#3178C6' }} /> },
      { name: 'SQL', icon: <SiMysql style={{ color: '#4479A1' }} /> },
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <SiReact style={{ color: '#61DAFB' }} /> },
      { name: 'HTML5', icon: <SiHtml5 style={{ color: '#E34F26' }} /> },
      { name: 'CSS3', icon: <SiCss3 style={{ color: '#1572B6' }} /> },
      { name: 'Bootstrap', icon: <SiBootstrap style={{ color: '#7952B3' }} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss style={{ color: '#06B6D4' }} /> },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs style={{ color: '#339933' }} /> },
      { name: 'Express.js', icon: <SiExpress style={{ color: '#000000' }} /> },
      { name: 'Flask', icon: <SiFlask style={{ color: '#000000' }} /> },
      { name: 'Django', icon: <SiDjango style={{ color: '#092E20' }} /> },
      { name: 'FastAPI', icon: <SiFastapi style={{ color: '#009688' }} /> },
    ]
  },
  {
    title: 'AI/ML',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow style={{ color: '#FF6F00' }} /> },
      { name: 'PyTorch', icon: <SiPytorch style={{ color: '#EE4C2C' }} /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn style={{ color: '#F7931E' }} /> },
      { name: 'OpenCV', icon: <SiOpencv style={{ color: '#5C3EE8' }} /> },
      { name: 'NLP', icon: <FaRobot style={{ color: '#6C63FF' }} /> },
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: <SiAmazonwebservices style={{ color: '#232F3E' }} /> },
      { name: 'Google Cloud', icon: <SiGooglecloud style={{ color: '#4285F4' }} /> },
      { name: 'Docker', icon: <SiDocker style={{ color: '#2496ED' }} /> },
      { name: 'Kubernetes', icon: <SiKubernetes style={{ color: '#326CE5' }} /> },
      { name: 'Git', icon: <SiGit style={{ color: '#F05032' }} /> },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'VS Code', icon: <SiVisualstudiocode style={{ color: '#007ACC' }} /> },
      { name: 'Figma', icon: <SiFigma style={{ color: '#F24E1E' }} /> },
      { name: 'Postman', icon: <SiPostman style={{ color: '#FF6C37' }} /> },
      { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248' }} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql style={{ color: '#4169E1' }} /> },
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
