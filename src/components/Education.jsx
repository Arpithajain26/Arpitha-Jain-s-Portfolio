import React, { useEffect } from 'react';
import { FaGraduationCap, FaCalendarAlt, FaFilePdf, FaEye, FaDownload } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const semestersData = [
  { sem: '1st Semester', file: '/results/VTU_1stresult.pdf' },
  { sem: '2nd Semester', file: '/results/VTU_2nd_result.pdf' },
  { sem: '3rd Semester', file: '/results/VTU_3rd_resilt.pdf' },
  { sem: '4th Semester', file: '/results/VTU_4th_result.pdf' },
  { sem: '5th Semester', file: '/results/VTU_5th_resultdf.pdf' },
  { sem: '6th Semester', file: '/results/VTU_6th_result.pdf' },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="education" className="py-20 bg-[#050505] text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <span 
            className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-2 block"
            data-aos="fade-down"
          >
            Education
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Academic <span className="text-emerald-500">Background</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* Degree Card */}
          <div 
            className="w-full lg:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl hover:border-white/20 transition-all duration-300 relative group"
            data-aos="fade-right"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            
            <div className="flex justify-between items-center mb-6">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/5 text-sm text-gray-400">
                <FaCalendarAlt className="text-emerald-400" /> 2023 - 2027 (Final Year)
              </span>
              <span className="font-bold text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">CGPA: 9.6</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <FaGraduationCap className="text-white text-3xl" />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-white">B.E. in Computer Science</h3>
                <h4 className="text-emerald-400/90 font-medium">SDMIT, Ujire</h4>
              </div>
            </div>

            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Specializing in Computer Science and Engineering with a deep focus on Artificial Intelligence, Full-Stack Development, Cloud Architectures, and Data Science workflows. Active leader in programming labs, coding clubs, and developer forums, with successful project pitches in tech hackathons.
            </p>

            {/* Consolidated Results Download */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-white font-bold mb-3 text-sm tracking-wider uppercase">Consolidated Marksheets</h4>
              <a 
                href="/results/Arpitha_results.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
              >
                <FaFilePdf /> View Combined Results PDF
              </a>
            </div>
          </div>

          {/* Semesters Results Grid */}
          <div 
            className="w-full lg:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl hover:border-white/20 transition-all duration-300"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
              Semester-Wise Results
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {semestersData.map((sem, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:bg-white/10 transition-colors duration-300"
                >
                  <span className="text-sm font-semibold text-gray-300 mb-4 block">{sem.sem}</span>
                  <div className="flex gap-2">
                    <a 
                      href={sem.file} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border border-white/10 text-xs font-semibold text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200"
                    >
                      <FaEye /> View
                    </a>
                    <a 
                      href={sem.file} 
                      download={sem.file.split('/').pop()}
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-emerald-500/25 border border-emerald-500/30 text-xs font-semibold text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-200"
                    >
                      <FaDownload /> Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
