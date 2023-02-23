import { motion } from "framer-motion"

const Backdrop = ({ children, onClick }) => {

  return (
    <motion.div
      onClick={onClick}
      className="absolute top-0 left-0 h-full w-full bg-black opacity-10 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop