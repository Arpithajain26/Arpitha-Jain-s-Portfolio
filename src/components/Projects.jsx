import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Desi Indian Snack House',
    description: 'An elegant e-commerce platform for ordering home-made sweets and traditional Indian snacks. Features interactive menu browsing, item customization, cart management, and seamless mock checkout.',
    tags: ['React', 'HTML/CSS', 'JavaScript', 'E-Commerce'],
    github: 'https://github.com/Arpithajain26/home-made-sweets',
    demo: 'https://github.com/Arpithajain26/home-made-sweets',
    accentColor: '#FF9933'
  },
  {
    title: 'Adaptive DSA Tutor',
    description: 'An intelligent DSA tutoring platform that dynamically adapts its curriculum path to each student\'s learning speed, providing customized algorithmic coding challenges and interactive data structure visualizations.',
    tags: ['React', 'Python', 'DSA', 'Algorithms'],
    github: 'https://github.com/Arpithajain26/adaptive-dsa-tutor',
    demo: 'https://github.com/Arpithajain26/adaptive-dsa-tutor',
    accentColor: '#00C2FF'
  },
  {
    title: 'Speak Up Studio',
    description: 'An AI-powered speech analysis and communication training web app. Record yourself speaking to track and evaluate tone, pace, and clarity with custom feedback visualization to enhance public speaking skills.',
    tags: ['AI', 'React', 'Speech Recognition', 'Python'],
    github: 'https://github.com/Arpithajain26/speak_up_studio1',
    demo: 'https://github.com/Arpithajain26/speak_up_studio1',
    accentColor: '#8B85FF'
  },
  {
    title: 'Autism Assistant AI',
    description: 'An AI-powered home-based therapeutic intervention application designed to support children with autism. Combines gamified therapy modules, cognitive tracking, and progress dashboard for parents and therapists.',
    tags: ['AI', 'React', 'Healthcare', 'Machine Learning'],
    github: 'https://github.com/Arpithajain26/austism-frontend',
    demo: 'https://github.com/Arpithajain26/austism-frontend',
    accentColor: '#10B981'
  },
  {
    title: 'Sahayya Portal',
    description: 'A digital complaint management system developed for hostel students. Allows students to submit issues, categorize complaints, track live ticket status, and empowers wardens with an admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Complaint Management'],
    github: 'https://github.com/Arpithajain26/sahayya-portal',
    demo: 'https://github.com/Arpithajain26/sahayya-portal',
    accentColor: '#EF4444'
  }
];

const Projects = () => {
  const [activeTag, setActiveTag] = useState('All');
  const [dimensions, setDimensions] = useState({ tags: {}, cards: {} });
  
  const containerRef = useRef(null);
  const tagRefs = useRef({});
  const cardRefs = useRef({});

  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];

  const updateConnections = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const tagDims = {};
    const cardDims = {};

    Object.keys(tagRefs.current).forEach((tag) => {
      const el = tagRefs.current[tag];
      if (el) {
        const rect = el.getBoundingClientRect();
        tagDims[tag] = {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        };
      }
    });

    projects.forEach((proj, idx) => {
      const el = cardRefs.current[idx];
      if (el) {
        const rect = el.getBoundingClientRect();
        cardDims[idx] = {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top, // point to top border center
        };
      }
    });

    setDimensions({ tags: tagDims, cards: cardDims });
  };

  useEffect(() => {
    // Wait for AOS and rendering to settle
    const timer = setTimeout(updateConnections, 500);
    window.addEventListener('resize', updateConnections);
    window.addEventListener('scroll', updateConnections);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateConnections);
      window.removeEventListener('scroll', updateConnections);
    };
  }, [activeTag]);

  // Recalculate dimensions on activeTag or any DOM change
  useEffect(() => {
    updateConnections();
  }, [activeTag]);

  const filteredProjects = activeTag === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(activeTag));

  return (
    <section id="projects" className="py-20 bg-black text-white relative overflow-hidden" ref={containerRef}>
      {/* Decorative gradient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* SVG Connection Lines */}
      {activeTag !== 'All' && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {projects.map((proj, idx) => {
            const hasTag = proj.tags.includes(activeTag);
            if (!hasTag) return null;
            
            const start = dimensions.tags[activeTag];
            const end = dimensions.cards[idx];
            if (!start || !end) return null;

            // Draw a smooth Bezier curve from tag button down to card top center
            const controlY = start.y + (end.y - start.y) * 0.5;
            const pathData = `M ${start.x} ${start.y} C ${start.x} ${controlY}, ${end.x} ${controlY - 30}, ${end.x} ${end.y}`;

            return (
              <g key={idx}>
                {/* Background glow path */}
                <path
                  d={pathData}
                  fill="none"
                  stroke={proj.accentColor}
                  strokeWidth="4"
                  className="opacity-20 blur-[2px] transition-all duration-500"
                />
                {/* Main animated path */}
                <motion.path
                  d={pathData}
                  fill="none"
                  stroke={proj.accentColor}
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  animate={{ strokeDashoffset: [-12, 0] }}
                  transition={{ ease: "linear", duration: 1.2, repeat: Infinity }}
                />
              </g>
            );
          })}
        </svg>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span 
            className="text-gray-400 uppercase tracking-widest text-sm mb-2 block font-semibold"
            data-aos="fade-up"
          >
            My Work
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">Projects</span>
          </h2>
          <p 
            className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Click a tag to filter projects and see how they are interconnected through shared tech stacks.
          </p>
        </div>

        {/* Tags Selection Bar */}
        <div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              ref={el => tagRefs.current[tag] = el}
              onClick={() => {
                setActiveTag(tag);
                setTimeout(updateConnections, 50);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                activeTag === tag
                  ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/25 scale-105'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid with layout animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, idx) => {
              const isVisible = activeTag === 'All' || project.tags.includes(activeTag);
              if (!isVisible) return null;

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4 }}
                  ref={el => cardRefs.current[idx] = el}
                  className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 shadow-2xl flex flex-col group h-full"
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  {/* Project Accent Bar */}
                  <div 
                    className="h-1.5 w-full transition-transform duration-300 group-hover:scale-x-105" 
                    style={{ background: project.accentColor }}
                  ></div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-3">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-400 hover:text-white text-lg transition-transform hover:scale-110" 
                          aria-label="GitHub Repository"
                        >
                          <FaGithub />
                        </a>
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-400 hover:text-white text-lg transition-transform hover:scale-110" 
                          aria-label="Live Demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => {
                            setActiveTag(tag);
                            setTimeout(updateConnections, 50);
                          }}
                          className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all duration-200 cursor-pointer ${
                            activeTag === tag
                              ? 'bg-emerald-500/25 border-emerald-500 text-emerald-400'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
