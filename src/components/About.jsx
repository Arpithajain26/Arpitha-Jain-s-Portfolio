import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { id: 1, label: 'CGPA', value: '9.6' },
    { id: 2, label: 'Hackathons', value: '10+' },
    { id: 3, label: 'LeetCode Streak', value: '100+' },
    { id: 4, label: 'Tech Stacks', value: '5+' },
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">Get To Know <span>Me</span></h2>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="terminal-card glass-card">
              <div className="terminal-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
                <span className="terminal-title">arpitha.json</span>
              </div>
              <div className="terminal-body">
                <pre>
                  <code>
                    <span className="token key">"name"</span>: <span className="token string">"Arpitha Jain C B"</span>,<br/>
                    <span className="token key">"role"</span>: <span className="token string">"Full-Stack & AI Developer"</span>,<br/>
                    <span className="token key">"location"</span>: <span className="token string">"Ujire, India"</span>,<br/>
                    <span className="token key">"interests"</span>: [<br/>
                    &nbsp;&nbsp;<span className="token string">"Artificial Intelligence"</span>,<br/>
                    &nbsp;&nbsp;<span className="token string">"Data Science"</span>,<br/>
                    &nbsp;&nbsp;<span className="token string">"Cloud Computing"</span>,<br/>
                    &nbsp;&nbsp;<span className="token string">"Full-Stack Development"</span><br/>
                    ],<br/>
                    <span className="token key">"goal"</span>: <span className="token string">"Software Engineering Role"</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="about-bio">
              <p>
                Hello! I'm a Final-year Computer Science and Engineering student at SDMIT, Ujire. I am deeply passionate about building AI-powered solutions, exploring Data Science, architecting full-stack applications, and working with cloud technologies.
              </p>
              <p>
                I thrive in competitive environments and frequently participate in hackathons, which continuously challenge me to learn new technologies and build practical applications under pressure. My ultimate goal is to secure a good software engineering role where I can contribute to impactful projects.
              </p>
            </div>

            <div className="about-skills-highlights">
              <div className="highlight-item">
                <div className="highlight-icon"><FaCode /></div>
                <div className="highlight-text">
                  <h4>Frontend</h4>
                  <p>React, HTML/CSS, JS</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"><FaServer /></div>
                <div className="highlight-text">
                  <h4>Backend</h4>
                  <p>Node.js, Express, Python</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"><FaDatabase /></div>
                <div className="highlight-text">
                  <h4>Data</h4>
                  <p>MongoDB, SQL, ML Models</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map(stat => (
            <div key={stat.id} className="stat-card glass-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
