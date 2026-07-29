import { motion } from 'framer-motion'

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="relative flex items-center justify-center mb-8">
        <div className="absolute w-24 h-24 rounded-full border-2 border-white/5 border-t-emerald-500 animate-spin"></div>
        <div className="absolute w-16 h-16 rounded-full border-2 border-white/5 border-b-emerald-400 animate-[spin_2s_linear_reverse_infinite]"></div>
        
        <motion.div
          className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-white"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          AJ
        </motion.div>
      </div>
      <motion.p
        className="text-emerald-500/80 tracking-[0.3em] uppercase text-xs font-semibold"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </motion.div>
  )
}

export default Preloader
