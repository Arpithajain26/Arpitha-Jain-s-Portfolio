import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram, FaDownload } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { HiArrowDown } from 'react-icons/hi'

const socials = [
  { icon: <FaGithub />, url: 'https://github.com/Arpithajain26', label: 'GitHub' },
  { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/arpitha-jain-c-b-475438290', label: 'LinkedIn' },
  { icon: <FaYoutube />, url: 'https://www.youtube.com/@Arpithabuilds', label: 'YouTube' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/arpitha._.buildz?igsh=ZHA5ZXF0cWIxMGI5', label: 'Instagram' },
  { icon: <SiLeetcode />, url: 'https://leetcode.com/u/ARPITHAJAINCB/', label: 'LeetCode' },
]

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white" id="hero">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-left mt-20 md:mt-0">
          <p
            className="text-gray-300 text-lg md:text-xl mb-2 font-medium tracking-wide"
            data-aos="fade-up"
          >
            Hello, I'm
          </p>

          <h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Arpitha Jain<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
              C B
            </span>
          </h1>

          <p
            className="text-gray-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Final-year Computer Science student passionate about AI, Full-Stack
            Development, Cloud Computing, and Data Science. I enjoy building
            impactful AI-powered applications and solving real-world problems
            through technology.
          </p>

          <div
            className="flex flex-wrap gap-4 items-center mb-10"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a
              href="#contact"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
              onClick={(e) => { e.preventDefault(); scrollToContact() }}
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all"
              onClick={(e) => { e.preventDefault(); scrollToContact() }}
            >
              Get in Touch
            </a>
          </div>

          <div
            className="flex items-center gap-5"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl transition-transform hover:scale-110"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Visual Element (Glassmorphism / Abstract) */}
        <div
          className="flex-1 hidden lg:flex justify-center items-center relative"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="w-72 h-72 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex justify-center items-center relative shadow-[0_0_50px_rgba(255,255,255,0.05)]">
            <div className="text-4xl font-mono text-white/80 font-bold">&lt;/&gt;</div>
            <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]" style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent', width: '110%', height: '110%', left: '-5%', top: '-5%' }}></div>
            <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" style={{ borderLeftColor: 'transparent', borderRightColor: 'transparent', width: '120%', height: '120%', left: '-10%', top: '-10%' }}></div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 animate-bounce cursor-pointer z-10"
      >
        <HiArrowDown className="text-2xl" />
        <span className="text-xs uppercase tracking-widest mt-1">Scroll</span>
      </div>
    </section>
  )
}

export default Hero
