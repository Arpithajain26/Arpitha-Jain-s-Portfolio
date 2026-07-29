import { useEffect, useState } from 'react'
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
  const [typedName, setTypedName] = useState('')

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  useEffect(() => {
    const fullName = 'Arpitha Jain\nC B'
    let characterIndex = 0

    const typeName = () => {
      setTypedName(fullName.slice(0, characterIndex + 1))
      characterIndex += 1
      if (characterIndex < fullName.length) {
        window.setTimeout(typeName, 115)
      }
    }

    const timer = window.setTimeout(typeName, 300)
    return () => window.clearTimeout(timer)
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
            className="min-h-32 md:min-h-44 text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {typedName.split('\n').map((line, index) => (
              <span key={index}>
                {index === 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">{line}</span>
                ) : line}
                {index === 0 && typedName.includes('\n') && <br />}
              </span>
            ))}
            <span className="inline-block w-1 h-[0.85em] ml-2 align-[-0.08em] bg-pink-300 animate-pulse" aria-hidden="true" />
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
              href="/ArpithaJain_Resume.pdf"
              download="ArpithaJain_Resume.pdf"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
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

        <div
          className="flex-1 flex justify-center items-center pb-12 md:pb-0"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 animate-float">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/50 via-pink-400/30 to-cyan-400/50 blur-2xl animate-pulse" />
            <div className="absolute inset-0 rounded-full border border-white/25 bg-black/20 p-2 shadow-[0_0_45px_rgba(216,180,254,0.3)]">
              <div className="w-full h-full overflow-hidden rounded-full border-2 border-white/20">
                <img
                  src="/profile.jpg"
                  alt="Arpitha Jain"
                  className="w-full h-full object-cover object-[50%_32%] transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
            <div className="absolute -inset-5 rounded-full border border-purple-300/40 border-t-transparent border-b-transparent animate-[spin_14s_linear_infinite]" />
            <div className="absolute -inset-10 rounded-full border border-pink-300/20 border-l-transparent border-r-transparent animate-[spin_20s_linear_infinite_reverse]" />
            <span className="absolute top-1/2 -left-7 w-3 h-3 rounded-full bg-pink-300 shadow-[0_0_16px_rgba(249,168,212,1)]" />
            <span className="absolute top-6 -right-6 w-2.5 h-2.5 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(165,243,252,1)] animate-pulse" />
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
