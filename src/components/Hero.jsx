import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram, FaDownload } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { HiArrowDown } from 'react-icons/hi'
import './Hero.css'

const socials = [
  { icon: <FaGithub />, url: 'https://github.com/Arpithajain26', label: 'GitHub' },
  { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/arpitha-jain-c-b-475438290', label: 'LinkedIn' },
  { icon: <FaYoutube />, url: 'https://www.youtube.com/@Arpithabuilds', label: 'YouTube' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/arpitha._.buildz?igsh=ZHA5ZXF0cWIxMGI5', label: 'Instagram' },
  { icon: <SiLeetcode />, url: 'https://leetcode.com/u/ARPITHAJAINCB/', label: 'LeetCode' },
]

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      {/* Animated background particles */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="hero-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }} />
        ))}
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Arpitha Jain<br />
            <span>C B</span>
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Final-year Computer Science student passionate about AI, Full-Stack
            Development, Cloud Computing, and Data Science. I enjoy building
            impactful AI-powered applications and solving real-world problems
            through technology.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollToContact() }}>
              <FaDownload /> Download Resume
            </a>
            <a href="#contact" className="btn-outline hero-btn-outline" onClick={(e) => { e.preventDefault(); scrollToContact() }}>
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label={s.label} id={`hero-social-${s.label.toLowerCase()}`}>
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero-blob">
            <div className="hero-blob-inner">
              <span className="hero-blob-text">&lt;/&gt;</span>
            </div>
          </div>
          <div className="hero-orbit hero-orbit-1"></div>
          <div className="hero-orbit hero-orbit-2"></div>
          <div className="hero-orbit hero-orbit-3"></div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <HiArrowDown />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero
