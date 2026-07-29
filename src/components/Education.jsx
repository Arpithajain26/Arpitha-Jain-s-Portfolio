import React, { useEffect } from 'react';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const educationData = [
  {
    id: 1,
    degree: "B.E. in Computer Science Engineering",
    institution: "SDMIT, Ujire",
    duration: "2023 - 2027 (Final Year)",
    score: "CGPA: 9.6",
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
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="education" className="py-20 bg-[#050505] text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h4 
            className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-2"
            data-aos="fade-down"
          >
            Education
          </h4>
          <h2 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Academic <span className="text-emerald-500">Background</span>
          </h2>
        </div>

        <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
          <div className="absolute border-opacity-20 border-white h-full border left-8 md:left-1/2 md:-ml-[1px]"></div>
          
          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                className={`mb-12 flex justify-between items-start md:items-center w-full ${isLeft ? 'md:flex-row-reverse' : ''}`} 
                key={edu.id}
              >
                <div className="hidden md:block order-1 w-5/12"></div>
                
                <div 
                  className="z-20 flex items-center order-1 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)] w-12 h-12 rounded-full shrink-0 ml-2 md:ml-0 md:mx-auto relative"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <FaGraduationCap className="mx-auto text-white text-xl" />
                </div>
                
                <div 
                  className="order-1 w-[calc(100%-4.5rem)] md:w-5/12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl hover:-translate-y-2 transition-all duration-300 ml-6 md:ml-0 relative group"
                  data-aos={isLeft ? 'fade-right' : 'fade-left'}
                  data-aos-delay={index * 150}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                  
                  <div className="flex flex-wrap justify-between items-center mb-4 text-sm text-gray-400 gap-2 relative z-10">
                    <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/5">
                      <FaCalendarAlt className="text-emerald-400" /> {edu.duration}
                    </span>
                    <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">{edu.score}</span>
                  </div>
                  <h3 className="font-bold text-xl md:text-2xl text-white mb-2 relative z-10">{edu.degree}</h3>
                  <h4 className="text-emerald-400/90 font-medium mb-3 relative z-10">{edu.institution}</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed relative z-10">{edu.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
