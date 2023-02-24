import { motion } from 'framer-motion'
import { useState } from 'react'
import Backdrop from '../backdrop/backdrop'
import AnimatedSwitch from '../switch/animatedSwitch'

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
            className="modal w-[clamp(50%,700px,90px)] h-[min(50%,300px)] m-auto py-2 px-8 rounded-xl flex flex-col justify-evenly items-center border "
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ModalContent/>
            <motion.button
              className="border border-zinc-700 rounded w-52 bg-zinc-700 text-zinc-100 font-medium"
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

function ModalContent () {
  const [isOn, setIsOn] = useState(true)

  return (
  <div className="flex flex-col items-center ">
  <section className='flex flex-col'>
    <h3 className='text-xl font-medium'>Would you allow me some cookies?</h3>
    <div className='flex-col flex md:flex-row gap-x-5 mt-5'>
      <p className='text-base font-medium mb-5 md:mb-0'>I use cookies to give you a better experience, like remembering your favorite language</p>
      <AnimatedSwitch className='mb-5 md:mb-0' isOn={isOn} setIsOn={setIsOn} />
    </div>
  </section>
</div>
  )
}
