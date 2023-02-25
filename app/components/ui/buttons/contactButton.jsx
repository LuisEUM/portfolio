'use client'
import { useContext, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LanguageContext } from '../../../context/languageContext'
import ModalContact from '../modals/modalContact'

export default function ContactButton () {
  const { text } = useContext(LanguageContext)
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <>
      <div className='self-center'>
        <motion.button
        className='bg-gradient-to-r from-primary via-tertiary to-secondary text-zinc-900 font-bold rounded-md px-4 h-8 self-center uppercase'
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.93 }}
        onClick={() => (modalOpen ? close() : open())}
        >
          {text.menu.contact}
        </motion.button>
      </div>
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
