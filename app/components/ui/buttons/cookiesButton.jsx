import { useState } from 'react';
import { AnimatePresence, motion, transform } from 'framer-motion'
import Modal from '../modal/modal';

export default function CookiesSoundButton({ }) {
const [show, setShow] = useState(false)
const [modalOpen, setModalOpen] = useState(false)
const close = () => setModalOpen(false)
const open = () => setModalOpen(true)

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <motion.button 
          className="bg-white hover:border-black border-white border rounded-full min-w-10 min-h-10 flex items-center justify-center" 
          onMouseLeave={() => setShow(false)} 
          onMouseOver={() => setShow(true)}
          onClick={() => (modalOpen ? close() : open())}
          whileHover={{filter:'invert(100%)'}}
          whileTap={{ scale: 0.9, filter:'invert(0%)'}}
        >
        <AnimatePresence>
          {show && <motion.p className='text-black font-bold' initial={{ scale:0, width:0, opacity: 0, marginLeft:0, marginRight:0 }} animate={{ scale:1, width:'auto', opacity: 1, marginLeft:10, marginRight:8 }} exit={{scale:0, width:0, opacity: 0, marginLeft:0, marginRight:0 }} transition={{duration:1}} >Settings</motion.p>}
        </AnimatePresence>
          <div className='w-6 h-6' id="yesButton"/>
        </motion.button>
      </div>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        mode='wait'
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} /> }
      </AnimatePresence>
    </>
  );
}

