import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaGithub } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    role: 'Data Engineer Intern',
    company: 'Infosys Springboard',
    period: 'Jan - Mar',
    description: 'Handled data engineering workflows, data prep pipelines, and built a Fake News Detection Web Application using NLP models to classify and flag misleading articles.',
    projectLink: 'https://github.com/Arpithajain26/fake_news_detection-webapp',
    image: '/infosys_internship.png'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#050505] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-wider text-emerald-400 uppercase mb-2 block">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            My <span className="text-emerald-500">Journey</span>
          </h2>
        </motion.div>

        <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
          {/* Timeline centerline */}
          <div className="absolute border-opacity-20 border-white h-full border left-8 md:left-1/2 md:-ml-[1px]"></div>
          
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={exp.id}
                className={`mb-12 flex justify-between items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Spacer block for desktop layout alignment */}
                <div className="hidden md:block w-5/12"></div>
                
                {/* Timeline center dot */}
                <div className="z-20 flex items-center bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)] w-12 h-12 rounded-full shrink-0 ml-2 md:ml-0 md:mx-auto relative">
                  <FaBriefcase className="mx-auto text-white text-lg" />
                </div>
                
                {/* Experience Card */}
                <div className="w-[calc(100%-4.5rem)] md:w-5/12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-white/20 transition-all duration-300 ml-6 md:ml-0 relative group">
                  <div className="flex items-center gap-2 text-sm text-emerald-400 mb-2">
                    <FaCalendarAlt />
                    <span>{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>
                  
                  <h4 className="text-gray-400 font-semibold mb-4">
                    {exp.company}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Render project link if present */}
                  {exp.projectLink && (
                    <a
                      href={exp.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-white text-sm font-semibold transition-colors mb-4"
                    >
                      <FaGithub /> View Internship Project
                    </a>
                  )}

                  {/* Render image if present */}
                  {exp.image && (
                    <div className="mt-4 overflow-hidden rounded-xl border border-white/10 shadow-lg max-w-md">
                      <img 
                        src={exp.image} 
                        alt={`${exp.company} Internship`} 
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
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
