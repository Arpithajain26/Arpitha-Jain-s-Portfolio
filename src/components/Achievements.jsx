import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTrophy, FaCertificate, FaMedal, FaStar, FaBriefcase } from 'react-icons/fa';

const achievements = [
  {
    id: 0,
    icon: <FaTrophy className="text-3xl text-yellow-400" />,
    title: 'Finalist of Mini Anveshana Hackathon',
    description: 'Recognized as a finalist in the Mini Anveshana Hackathon for developing innovative engineering solutions.'
  },
  {
    id: 1,
    icon: <FaMedal className="text-3xl text-yellow-400" />,
    title: '9.6 CGPA in B.E. (CSE)',
    description: 'Maintained a stellar academic record throughout my engineering degree.'
  },
  {
    id: 2,
    icon: <FaStar className="text-3xl text-yellow-400" />,
    title: '100-day LeetCode Streak',
    description: 'Consistent problem solver with a strong focus on algorithms and data structures.'
  },
];

const certifications = [
  {
    id: 1,
    title: 'AWS Student Builder Group Leader',
    issuer: 'Amazon Web Services',
    icon: <FaCertificate className="text-2xl text-blue-400" />
  },
  {
    id: 2,
    title: 'Google Cloud Gen AI Academy',
    issuer: 'Google Cloud',
    icon: <FaCertificate className="text-2xl text-blue-400" />
  },
  {
    id: 3,
    title: 'Virtual Internship 6.0',
    issuer: 'Infosys Springboard',
    icon: <FaBriefcase className="text-2xl text-emerald-400" />
  }
];

const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="achievements" className="py-20 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="text-sm font-semibold tracking-wider text-purple-500 uppercase mb-2 block">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Milestones & <span className="text-white">Certifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_8rem_minmax(0,1fr)] gap-x-3 gap-y-6">
          <h3 className="text-2xl font-semibold border-b border-white/10 pb-2" data-aos="fade-right">Key Milestones</h3>
          <div className="hidden lg:block" />
          <h3 className="text-2xl font-semibold border-b border-white/10 pb-2" data-aos="fade-left">Certifications</h3>

          {achievements.map((item, index) => {
            const cert = certifications[index];
            return (
              <React.Fragment key={item.id}>
                <div
                  className="min-h-36 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex items-start gap-4 hover:bg-white/10 transition-colors duration-300"
                  data-aos="fade-right"
                  data-aos-delay={index * 120}
                >
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
                  <svg viewBox="0 0 160 100" className={`w-full overflow-visible ${index % 2 ? 'rotate-180' : ''}`} fill="none">
                    <defs>
                      <marker id={`arrow-${item.id}`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L6,3 z" fill="#e879f9" />
                      </marker>
                    </defs>
                    <path
                      d="M4 50 C42 4, 104 96, 154 50"
                      stroke={`url(#connector-gradient-${item.id})`}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="5 7"
                      markerEnd={`url(#arrow-${item.id})`}
                      className="animate-pulse"
                    />
                    <defs>
                      <linearGradient id={`connector-gradient-${item.id}`} x1="0" x2="1">
                        <stop stopColor="#a78bfa" />
                        <stop offset="1" stopColor="#f9a8d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div
                  className="min-h-36 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors duration-300"
                  data-aos="fade-left"
                  data-aos-delay={index * 120}
                >
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">{cert.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                    <p className="text-purple-400 text-sm mt-1">{cert.issuer}</p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
