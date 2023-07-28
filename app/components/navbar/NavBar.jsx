'use client'
import { useRef, React, useContext, useState } from 'react'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { useDimensions } from './hook/use-dimensions.jsx'
import { ToggleMenu } from './toggle-menu/ToggleMenu'
import MainMenu from './main-menu/MainMenu'
import { LanguageContext } from '../../context/languageContext'
import Link from 'next/link.js'
import SelectLanguage from './select-language/selectLanguage.jsx'
import Backdrop from '../ui/backdrop/backdrop.jsx'
import ContactButton from '../ui/buttons/contactButton.jsx'
import ModalContact from '../ui/modals/modalContact.jsx'

const sidebar = {
  open: {
    clipPath: 'inset(0 0 0 0%)',
    transition: {
      type: 'spring',
      stiffness: 40,
      restDelta: 1,
      duration: 5,
      when: 'beforeChildren'
    }
  },
  closed: {
    clipPath: 'inset(0 0 0 100%)',
    transition: {
      type: 'spring',
      stiffness: 40,
      restDelta: 1,
      duration: 5,
      when: 'afterChildren'
    }
  }
}

export default function NavBar () {
  const { text } = useContext(LanguageContext)
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  const [modalOpenNavbar, setModalOpenNavbar] = useState(false)
  const close = () => setModalOpenNavbar(false)
  const open = () => setModalOpenNavbar(true)

  return (
    <div className="top-0 z-30 w-full">
      <div
        style={{
          transitionDuration: '600ms',
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        className="flex h-20 absolute justify-between lg:fixed top-0 w-full  bg-zinc-900 bg-opacity-80"
      >
        <div className=" ml-8 col-span-2 flex justify-center items-center">
          <Link
            href="/"
            className="w-full self-center flex items-center cursor-pointer"
          >
            {/* <motion.img layoutId='navbarLogo' src={imageData.logos[0]} alt='Luis Urdaneta Logo' width='50px' height='50px' className='max-h-[50px] max-w-full' /> */}
            <motion.p className="font-main_regular  text-3xl font-bold ">
              <span className="text-primary">&lt;</span>LuisUrdaneta
              <span className="text-primary">/&gt;</span>
            </motion.p>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <div className="flex justify-center px-4">
            <Link
              href={text.menu.projectsPathname}
              className="self-center flex items-center text-zinc-100  hover:scale-105 hover:text-primary  transition-all   font-bold rounded-md px-4 h-8  uppercase"
            >
              {text.menu.projects}
            </Link>
          </div>
          <div className="flex justify-center px-4">
            <Link
              href={text.menu.blogPathname}
              className="self-center flex items-center text-zinc-100 hover:scale-105 hover:text-primary  transition-all font-bold rounded-md px-4 h-8  uppercase"
            >
              {text.menu.blog}
            </Link>
          </div>
          <div className="flex justify-center px-4">
            {/* <Link href={text.menu.contactPathname} className='self-center'>
              <motion.button
              className='bg-gradient-to-r from-primary via-tertiary to-secondary text-zinc-900 font-bold rounded-md px-4 h-8 self-center uppercase'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.93 }}
              >
                {text.menu.contact}
              </motion.button>
            </Link> */}
            <ContactButton />
          </div>
          <div className="flex justify-center pr-8 pl-4">
            <SelectLanguage />
          </div>
        </div>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
          // if you prefer to make the elements behind touchable change to flex instead w-full
          className="absolute lg:hidden top-0 right-0 bottom-0 "
        >
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => modalOpenNavbar && open()}
          >
            {isOpen && (
              <Backdrop onClick={() => toggleOpen()}>
                <motion.div
                  className={`fixed h-screen top-0 right-0 bottom-0 max-w-full overflow-hidden  ${
                    isOpen ? 'bg-[#121212] w-9/12' : 'bg-[#121212]'
                  } `}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sidebar}
                  layout
                  layoutId="sidebar"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MainMenu
                    isOpen={isOpen}
                    setModalOpenNavbar={setModalOpenNavbar}
                    toggleOpen={toggleOpen}
                  />
                </motion.div>
              </Backdrop>
            )}
          </AnimatePresence>
          {modalOpenNavbar && <ModalContact handleClose={close} />}

          <ToggleMenu isOpen={isOpen} toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
    </div>
  )
}
