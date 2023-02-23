'use client'
import { useRef, React, useContext } from 'react'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { useDimensions } from './hook/use-dimensions.jsx'
import { ToggleMenu } from './toggle-menu/ToggleMenu'
import MainMenu from './main-menu/MainMenu'
import { LanguageContext } from '../../context/languageContext'
import Link from 'next/link.js'
// import imageData from '../../data/images.json'
import SelectLanguage from './select-language/selectLanguage.jsx'

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

  return (
    <div className='top-0 z-50 w-full opacity-100'>
      <div
        style={{
          transitionDuration: '600ms',
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        className='flex h-20 absolute justify-between md:fixed top-0 w-full  bg-[#121212]'
      >
        <div className=' ml-8 col-span-2 flex justify-center items-center'>
          <Link href='/' className='w-full self-center flex items-center'>
            {/* <motion.img layoutId='navbarLogo' src={imageData.logos[0]} alt='Luis Urdaneta Logo' width='50px' height='50px' className='max-h-[50px] max-w-full' /> */}
            <p className='font-main_regular  text-3xl '>Luis Urdaneta</p>
          </Link>
        </div>
        <div className='hidden md:flex'>
          <div className='flex justify-center px-4'>
            <Link href={text.menu.contact_pathname} className='self-center'>
              <motion.button className='bg-[#00BB31] text-black font-bold rounded-md px-4 h-8 self-center uppercase'>
                {text.menu.contact}
              </motion.button>
            </Link>
          </div>
          <div className='flex justify-center pr-8 pl-4'>
            <SelectLanguage />
          </div>
        </div>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
          className='absolute md:hidden top-0 right-0 bottom-0 w-full'
        >
          <AnimatePresence>
            {isOpen &&
              <>
                <motion.div
                  className={`fixed h-screen top-0 right-0 bottom-0 max-w-full overflow-hidden ${isOpen ? 'bg-white w-screen' : 'bg-white'} `}
                  initial='closed'
                  animate='open'
                  exit='closed'
                  variants={sidebar}
                  layout
                  layoutId='sidebar'
                >
                  <MainMenu isOpen={isOpen} />
                  {/* <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`${isOpen ? 'fixed' : 'hidden'} left-0 bottom-0 w-full px-14 transition-all`}
                    transition={{ duration: 0.1, delay: 1 }}
                  >
                    <p className='invite-place-two font-semibold text-sm'>{text.home[14].description}</p>
                  </motion.div> */}
                </motion.div>
              </>}
          </AnimatePresence>

          <ToggleMenu isOpen={isOpen} toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
    </div>
  )
}
