import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

const hackathons = [
  {
    id: 1,
    name: "Google Cloud Gen AI Academy",
    result: "Prototype Phase",
    description: "Participated and built innovative prototypes using advanced Google Gen AI tools.",
    icon: <FaTrophy className="text-4xl text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
  },
  {
    id: 2,
    name: "Webcmd Hackathon",
    result: "Agentic Payments Edition",
    description: "Developed an AI agentic payment solution for seamless and intelligent transactions.",
    icon: <FaTrophy className="text-4xl text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
  },
  {
    id: 3,
    name: "Eureka Project Idea Pitching",
    result: "Participant",
    description: "Pitched a novel AI-based project idea focusing on real-world problem solving.",
    icon: <FaMedal className="text-4xl text-gray-300 drop-shadow-[0_0_15px_rgba(209,213,219,0.5)]" />
  },
  {
    id: 4,
    name: "AI-related Hackathons",
    result: "Multiple Appearances",
    description: "Active participant in various AI hackathons building impactful tech applications.",
    icon: <FaAward className="text-4xl text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]" />
  }
];

const Hackathons = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="hackathons" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="text-sm font-semibold tracking-wider text-purple-500 uppercase mb-2 block">Hackathons</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Competition <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <div 
              key={hackathon.id}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {hackathon.icon}
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300">
                  {hackathon.result}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                {hackathon.name}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {hackathon.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
