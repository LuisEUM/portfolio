'use client'
import { useContext, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LanguageContext } from '../../../context/languageContext'
import ModalContact from '../modals/modalContact'

export default function ContactButton ({ className, setModalOpenNavbar }) {
  const { text } = useContext(LanguageContext)
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => (setModalOpenNavbar ? setModalOpenNavbar(false) : setModalOpen(false))
  const open = () => (setModalOpenNavbar ? setModalOpenNavbar(true) : setModalOpen(true))

  return (
    <>
      <motion.button
        className={className || 'self-center bg-gradient-to-r from-tertiary  to-secondary text-zinc-900 font-bold rounded-md px-4 h-8 uppercase'}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.93 }}
        onClick={() => (modalOpen ? close() : open())}
        >
          {text.menu.contact}
      </motion.button>
      <AnimatePresence
        initial={false}
        mode='wait'
        onExitComplete={() => null}
      >
        {modalOpen && <ModalContact modalOpen={modalOpen} handleClose={close} /> }

      </AnimatePresence>
    </>
  )
}
