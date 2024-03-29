'use client'
import { useContext, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import { LanguageContext } from '@/app/context/languageContext'

const DynamicModalCookies = dynamic(() => import('../modals/modalCookies'), {
  ssr: false,
  loading: () => <p>Loading...</p>
})
export default function CookiesButton () {
  const [show, setShow] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  const { text } = useContext(LanguageContext);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-30 rounded-full ">
        <motion.button
          className="bg-zinc-100 hover:border-zinc-900 border-white border rounded-full min-w-10 min-h-10 flex items-center justify-center "
          onMouseLeave={() => setShow(false)}
          onMouseOver={() => setShow(true)}
          onClick={() => (modalOpen ? close() : open())}
          whileHover={{ filter: 'invert(100%)' }}
          whileTap={{ scale: 0.9, filter: 'invert(0%)' }}
        >
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {show && (
              <motion.p
                className="text-zinc-900 font-bold"
                initial={{
                  scale: 0,
                  width: 0,
                  opacity: 0,
                  marginLeft: 0,
                  marginRight: 0
                }}
                animate={{
                  scale: 1,
                  width: 'auto',
                  opacity: 1,
                  marginLeft: 10,
                  marginRight: 8
                }}
                exit={{
                  scale: 0,
                  width: 0,
                  opacity: 0,
                  marginLeft: 0,
                  marginRight: 0
                }}
                transition={{ duration: 1 }}
              >
                {text.settings.cookiesButton}
              </motion.p>
            )}
          </AnimatePresence>
          <div className="w-6 h-6" id="settingsButton" />
          <Script src="/js/scripts.js" />
        </motion.button>
      </div>
      <AnimatePresence initial={false} onExitComplete={() => close}>
        {modalOpen && (
          <DynamicModalCookies modalOpen={modalOpen} handleClose={close} />
        )}
      </AnimatePresence>
    </>
  )
}
