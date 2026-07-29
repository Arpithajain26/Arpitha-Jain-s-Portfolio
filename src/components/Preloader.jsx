import { motion } from 'framer-motion'
import './Preloader.css'

const Preloader = () => {
  return (
    <motion.div
      className="preloader"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="preloader-content">
        <div className="preloader-ring">
          <div className="preloader-ring-inner"></div>
        </div>
        <motion.div
          className="preloader-initials"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          AJ
        </motion.div>
      </div>
      <motion.p
        className="preloader-text"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </motion.div>
  )
}

export default Preloader
