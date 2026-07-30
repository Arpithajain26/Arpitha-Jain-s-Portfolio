import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTrophy, FaCertificate, FaMedal, FaStar, FaBriefcase, FaTimes } from 'react-icons/fa';

const achievements = [
  {
    id: 0,
    icon: <FaTrophy className="text-3xl text-yellow-400" />,
    title: 'Finalist of Mini Anveshana Hackathon',
    description: 'Recognized as a finalist in the Mini Anveshana Hackathon for developing innovative engineering solutions.',
    image: '/mini-anveshana-certificate.jpg'
  },
  {
    id: 1,
    icon: <FaMedal className="text-3xl text-yellow-400" />,
    title: '9.6 CGPA in B.E. (CSE)',
    description: 'Maintained a stellar academic record throughout my engineering degree.',
    image: '/academic-achievement.jpg'
  },
  {
    id: 2,
    icon: <FaStar className="text-3xl text-yellow-400" />,
    title: '100-day LeetCode Streak',
    description: 'Consistent problem solver with a strong focus on algorithms and data structures.',
    image: '/leetcode-100-day-streak.png'
  },
  {
    id: 3,
    icon: <FaCertificate className="text-3xl text-yellow-400" />,
    title: 'Completed RUDSETI Training Program',
    description: 'Completed a one-week Entrepreneurship Development Program at RUDSETI.'
  },
];

const certifications = [
  {
    id: 1,
    title: 'AWS Student Builder Group Leader',
    issuer: 'Amazon Web Services',
    image: '/aws-student-builder-leader.png',
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
    image: '/infosys-virtual-internship-certificate.jpg',
    icon: <FaBriefcase className="text-2xl text-emerald-400" />
  },
  {
    id: 4,
    title: 'RUDSETI Training Program',
    issuer: 'Rural Development & Self Employment Training Institute',
    image: '/rudseti-training-certificate.jpg',
    icon: <FaCertificate className="text-2xl text-blue-400" />
  }
];

const Achievements = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

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
                <button
                  type="button"
                  onClick={() => item.image && setSelectedCertificate(item)}
                  className={`min-h-36 w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex items-start gap-4 text-left hover:bg-white/10 transition-colors duration-300 ${item.image ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400' : 'cursor-default'}`}
                  data-aos="fade-right"
                  data-aos-delay={index * 120}
                  aria-label={item.image ? `View ${item.title} image` : undefined}
                >
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </button>

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

                <button
                  type="button"
                  onClick={() => cert.image && setSelectedCertificate(cert)}
                  className={`min-h-36 w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex items-center gap-4 text-left hover:bg-white/10 transition-colors duration-300 ${cert.image ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400' : 'cursor-default'}`}
                  data-aos="fade-left"
                  data-aos-delay={index * 120}
                  aria-label={cert.image ? `View ${cert.title} certificate` : undefined}
                >
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">{cert.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                    <p className="text-purple-400 text-sm mt-1">{cert.issuer}</p>
                  </div>
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-title"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-h-full w-full max-w-3xl rounded-2xl border border-white/15 bg-[#101010] p-4 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-6 top-6 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close certificate"
            >
              <FaTimes />
            </button>
            <h3 id="certificate-title" className="mb-4 pr-10 text-lg font-semibold text-white">{selectedCertificate.title}</h3>
            <img src={selectedCertificate.image} alt={`${selectedCertificate.title} certificate`} className="max-h-[75vh] w-full rounded-lg object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
