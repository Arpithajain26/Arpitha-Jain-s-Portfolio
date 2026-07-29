import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stats = [
    { id: 1, label: 'CGPA', value: '9.6' },
    { id: 2, label: 'Hackathons', value: '10+' },
    { id: 3, label: 'LeetCode Streak', value: '100+' },
    { id: 4, label: 'Tech Stacks', value: '5+' },
  ];

  return (
    <section id="about" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="text-gray-400 uppercase tracking-widest text-sm mb-2 block font-semibold">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get To Know <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div 
            className="w-full"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                <span className="ml-auto text-xs text-gray-400 font-mono">arpitha.json</span>
              </div>
              <div className="p-6 overflow-x-auto text-sm md:text-base font-mono text-gray-300">
                <pre>
                  <code>
                    <span className="text-pink-400">"name"</span>: <span className="text-green-400">"Arpitha Jain C B"</span>,<br/>
                    <span className="text-pink-400">"role"</span>: <span className="text-green-400">"Full-Stack & AI Developer"</span>,<br/>
                    <span className="text-pink-400">"location"</span>: <span className="text-green-400">"Ujire, India"</span>,<br/>
                    <span className="text-pink-400">"interests"</span>: [<br/>
                    &nbsp;&nbsp;<span className="text-green-400">"Artificial Intelligence"</span>,<br/>
                    &nbsp;&nbsp;<span className="text-green-400">"Data Science"</span>,<br/>
                    &nbsp;&nbsp;<span className="text-green-400">"Cloud Computing"</span>,<br/>
                    &nbsp;&nbsp;<span className="text-green-400">"Full-Stack Development"</span><br/>
                    ],<br/>
                    <span className="text-pink-400">"goal"</span>: <span className="text-green-400">"Software Engineering Role"</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

          <div 
            className="w-full"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="text-gray-300 space-y-4 mb-8 text-lg leading-relaxed">
              <p>
                Hello! I'm a Final-year Computer Science and Engineering student at SDMIT, Ujire. I am deeply passionate about building AI-powered solutions, exploring Data Science, architecting full-stack applications, and working with cloud technologies.
              </p>
              <p>
                I thrive in competitive environments and frequently participate in hackathons, which continuously challenge me to learn new technologies and build practical applications under pressure. My ultimate goal is to secure a good software engineering role where I can contribute to impactful projects.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="text-2xl text-purple-400 mr-4"><FaCode /></div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base">Frontend</h4>
                  <p className="text-xs text-gray-400">React, HTML/CSS, JS</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="text-2xl text-purple-400 mr-4"><FaServer /></div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base">Backend</h4>
                  <p className="text-xs text-gray-400">Node.js, Express, Python</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="text-2xl text-purple-400 mr-4"><FaDatabase /></div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base">Data</h4>
                  <p className="text-xs text-gray-400">MongoDB, SQL, ML Models</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {stats.map(stat => (
            <div key={stat.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
