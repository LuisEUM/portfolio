'use client'
import { LanguageContext } from '../../../context/languageContext'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import BackdropUpToDown from '../backdrop/BackdropUpToDown'
import SocialButtons from '../contact/SocialButtons'

const dropIn = {
  open: {
    y: '0vh',
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 500,
      when: 'beforeChildren'
    }
  },
  closed: {
    y: '100vh',
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 500,
      when: 'afterChildren'
    }
  }
}

const ModalContact = ({ handleClose }) => {
  const { text } = useContext(LanguageContext)

  return (
    <BackdropUpToDown onClick={handleClose}>
      <motion.div
        className=" w-[clamp(90%,700px,90px)] md:max-w-lg m-auto py-2 px-8 rounded-xl flex flex-col justify-between items-center shadow bg-zinc-800 "
        variants={dropIn}
        initial="closed"
        animate="open"
        exit="closed"
        onClick={(event) => event.stopPropagation()}
        key="modal"
      >
        <ModalContent text={text} handleClose={handleClose} />
      </motion.div>
    </BackdropUpToDown>
  )
}

export default ModalContact

function ModalContent ({ text, handleClose }) {
  const [copied, setCopied] = useState(false)
  const close = () => setCopied(false)
  const open = () => setCopied(true)

  const handleCopy = (event) => {
    // Prevent default behavior of the button to avoid unexpected results
    event.stopPropagation()

    // Get the email address from the input element
    const emailAddress = document.getElementById('emailInput').value

    // Copy the email address to the clipboard
    navigator.clipboard.writeText(emailAddress)
  }

  useEffect(() => {
    const copy = document.getElementById('copyButton')

    // eslint-disable-next-line no-unused-vars, no-undef
    const doCopy = bodymovin.loadAnimation({
      container: copy,
      remderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/icons/copy.json',
      mode: 'cursor'
    })

    copy.addEventListener('mouseenter', (e) => {
      doCopy.goToAndPlay(0)
    })
    copy.addEventListener('click', (e) => {
      doCopy.goToAndPlay(0)
      open()
    })
  }, [])

  return (
    <div className="w-full rounded-xl">
      {/* <!--MODAL HEADER--> */}
      <div className="flex justify-between items center border-b border-gray-200 py-3">
        <div className="flex items-center justify-center">
          <p className="text-xl text-zinc-100 font-medium uppercase ">
            {text.contact.title}
          </p>
        </div>
        <motion.div
          className="bg-gray-300 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-9 h-9 flex items-center justify-center rounded-full"
          onClick={handleClose}
          whileHover={{ backgroundColor: 'rgb(107 114 128)', scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.1 13.3C1.7134 13.6866 1.0866 13.6866 0.7 13.3C0.313401 12.9134 0.313401 12.2866 0.7 11.9L5.6 7L0.7 2.1C0.3134 1.7134 0.313401 1.0866 0.7 0.7C1.0866 0.313401 1.7134 0.313401 2.1 0.7L7 5.6L11.9 0.7C12.2866 0.3134 12.9134 0.313401 13.3 0.7C13.6866 1.0866 13.6866 1.7134 13.3 2.1L8.4 7L13.3 11.9C13.6866 12.2866 13.6866 12.9134 13.3 13.3C12.9134 13.6866 12.2866 13.6866 11.9 13.3L7 8.4L2.1 13.3Z"
              fill="#18181B"
            />
          </svg>
        </motion.div>
      </div>
      {/* <!--MODAL BODY--> */}
      <div className="my-4">
        <SocialButtons text={text} />
        <div className="flex justify-between">
          <p className="text-md">{text.contact.emailAddressParagraph}</p>
          <div className="flex items-center justify-center">
            <AnimatePresence initial={false} mode="wait">
              {copied && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onAnimationComplete={() => close()}
                  exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
                  className="text-sm text-center"
                  transition={{
                    duration: 1,
                    type: 'spring',
                    damping: 25,
                    stiffness: 500
                  }}
                >
                  {text.contact.copied}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* <!--BOX LINK--> */}
        <div className="grid grid-cols-12  justify-start items-center mt-4 w-full  transition-all">
          {/* RECORDAR DE PREGUNTAR A UN PROFE */}

          <div className="col-span-12 grid-cols-11 md:grid-cols-9 grid ">
            <div className="col-span-2 md:col-span-1 flex h-10 items-center justify-center rounded-l-lg  border-zinc-300 bg-zinc-300  fill-black">
              <div className="w-6 h-6 max-w-8 flex items-center justify-center shadow-xl min-w-6">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                    fill="#18181B"
                  />
                </svg>
              </div>
            </div>

            <div className="col-span-9 md:col-span-8 bg-zinc-900 flex items-center justify-center h-10  rounded-r-lg content-center  ">
              <div
                className="w-8 h-8 mx-2 overflow-hidden  cursor-pointer"
                id="copyButton"
                onClick={handleCopy}
              />
              <input
                id="emailInput"
                className="w-full outline-none bg-transparent font-medium  h-full sm:tracking-widest uppercase text-sm sm:text-lg"
                type="text"
                placeholder="email address"
                value={text.contact.email}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
