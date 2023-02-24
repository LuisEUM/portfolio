import { motion } from 'framer-motion'

const containerVariants = {
  initial: {
    width: '100vw',
    maxWidth: '100%'
  },
  animate: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
}

const DotsLoader = ({ count = 5, className, setLoading }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={`flex bg-zinc-900 gap-4 items-center justify-center h-screen mx-auto overflow-hidden relative  ${className}`}
    >
        <motion.div
          className="absolute"
          initial={{ opacity: 1, height: '0vh', width: '0vw', borderRadius: 999999, backgroundColor: '#0D0D0D' }}
          animate={{
            opacity: 1,
            height: '450vw',
            width: '450vw',
            transition: {
              type: 'spring',
              duration: 5,
              delay: 2,
              bounce: 0.25
            }
          }}
        />
        <motion.div
              className="absolute"
              initial={{ y: '100vh', height: 20, width: 20, borderRadius: 20, backgroundColor: '#0D0D0D' }}
              animate={{
                y: 0,
                transition: {
                  type: 'spring',
                  duration: 2,
                  bounce: 0.25
                }
              }}
              onAnimationComplete={() => { setTimeout(() => { setLoading(false) }, 2000) }}
            />
    </motion.div>
  )
}

export default DotsLoader
