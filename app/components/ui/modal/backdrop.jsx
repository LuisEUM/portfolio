import { motion } from 'framer-motion'

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className='z-50 fixed top-0 left-0 h-full w-full bg-zinc-900 bg-opacity-50 flex items-center justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
