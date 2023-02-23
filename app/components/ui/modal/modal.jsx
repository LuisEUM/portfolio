import { motion } from 'framer-motion'
import Backdrop from '../modal/backdrop'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

const Modal = ({ handleClose }) => {
  return (
      <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal w-[clamp(50%,700px,90px)] h-[min(50%,300px)] m-auto py-0 px-8 rounded-xl flex flex-col items-center border "
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ModalContent/>
            <motion.button
              className="m-auto border rounded w-52 bg-black"
              onClick={handleClose}
              whileHover={{ filter: 'invert(100%)' }}
              whileTap={{ scale: 0.9, filter: 'invert(0%)' }}
            >
            Close
            </motion.button>
          </motion.div>
      </Backdrop>
  )
}

export default Modal

const ModalContent = () => (
    <div className="flex flex-col items-center  m-auto">
      <h3>Do you want to allow cookies?</h3>
      <p>I use cookies for a better experience, like remember your favorite langugae</p>
      <p>Yes || No</p>
      <br />
      <h3>Select your favorite language:</h3>
      <p>English || Spanish</p>
  </div>
)
