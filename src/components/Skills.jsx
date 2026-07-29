import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  SiPython, SiJavascript, SiHtml5, SiCss, SiStreamlit, SiFlask, SiGit, SiGithub, SiSqlite, SiC
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { BsRobot, BsGraphUp } from 'react-icons/bs';

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

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="skills" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span 
            className="text-gray-400 uppercase tracking-widest text-sm mb-2 block font-semibold"
            data-aos="fade-up"
          >
            My Skills
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Technologies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">Tools</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-2xl font-bold mb-6 text-white text-center">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-3xl mb-3">{skill.icon}</div>
                    <span className="text-xs font-medium text-gray-300 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
