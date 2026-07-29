import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Arpitha<span className="text-emerald-500">.</span></h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base pr-4">
              Computer Science student passionate about AI, Full-Stack Development, and building impactful solutions.
            </p>
          </div>
          
          <div className="col-span-1 md:flex md:justify-center" data-aos="fade-up" data-aos-delay="100">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white tracking-wider uppercase text-emerald-500">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Projects', 'Hackathons', 'Gallery', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-emerald-400 hover:pl-2 transition-all duration-300 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="col-span-1 md:flex md:justify-end" data-aos="fade-up" data-aos-delay="200">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white tracking-wider uppercase text-emerald-500">Connect</h3>
              <div className="flex gap-4 flex-wrap">
                {[
                  { icon: FaGithub, link: "https://github.com/Arpithajain26" },
                  { icon: FaLinkedin, link: "https://www.linkedin.com/in/arpitha-jain-c-b-475438290" },
                  { icon: FaYoutube, link: "https://www.youtube.com/@Arpithabuilds" },
                  { icon: FaInstagram, link: "https://www.instagram.com/arpitha._.buildz" },
                  { icon: SiLeetcode, link: "https://leetcode.com/u/ARPITHAJAINCB/" }
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={idx}
                      href={social.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                    >
                      <Icon className="text-xl" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm text-gray-500" data-aos="fade-in" data-aos-delay="300">
          <p>Designed & Developed by Arpitha Jain C B</p>
          <p>&copy; {currentYear} Arpitha Jain. All rights reserved.</p>
          <p className="flex items-center gap-1.5 justify-center">
            Made with <FaHeart className="text-emerald-500 animate-pulse" /> by Arpitha Jain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
