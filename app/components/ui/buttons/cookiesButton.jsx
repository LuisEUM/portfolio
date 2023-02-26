'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ModalCookies from '../modals/modalCookies'
import Script from 'next/script'

export default function CookiesButton () {
  const [show, setShow] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <>
      <div className="fixed bottom-4 right-4 z-30 bg-zinc-900">
        <motion.button
          className="bg-zinc-100 hover:border-zinc-900 border-white border rounded-full min-w-10 min-h-10 flex items-center justify-center"
          onMouseLeave={() => setShow(false)}
          onMouseOver={() => setShow(true)}
          onClick={() => (modalOpen ? close() : open())}
          whileHover={{ filter: 'invert(100%)' }}
          whileTap={{ scale: 0.9, filter: 'invert(0%)' }}
        >
        <AnimatePresence
          initial={false}
          mode='wait'
          onExitComplete={() => null}
        >
          {show && <motion.p className='text-zinc-900 font-bold' initial={{ scale: 0, width: 0, opacity: 0, marginLeft: 0, marginRight: 0 }} animate={{ scale: 1, width: 'auto', opacity: 1, marginLeft: 10, marginRight: 8 }} exit={{ scale: 0, width: 0, opacity: 0, marginLeft: 0, marginRight: 0 }} transition={{ duration: 1 }} >Settings</motion.p>}
        </AnimatePresence>
          <div className='w-6 h-6' id='settingsButton'/>
          <Script src='/js/scripts.js' />

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
        {modalOpen && <ModalCookies modalOpen={modalOpen} handleClose={close} /> }
      </AnimatePresence>
    </>
  )
}
