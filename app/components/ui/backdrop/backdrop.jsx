import { motion } from 'framer-motion'
// always remember to make stop the propagation inside the childrens, add the next code to the main container onClick={(e) => e.stopPropagation()}
const Backdrop = ({ children, onClick }) => {
  const handleModalClose = () => {
    onClick()
  }

  return (
    <motion.div
      onClick={handleModalClose}
      className="z-50 fixed top-0 left-0 h-full w-full bg-zinc-900 bg-opacity-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
