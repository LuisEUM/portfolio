'use client'
import { useRef, React, useContext, useState, useEffect } from 'react'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { ToggleMenu } from './toggle-menu/ToggleMenu'
import MainMenu from './main-menu/MainMenu'
import TailwindGrid from '../grid/TailwindGrid'
import { LanguageContext } from '../../context/languageContext'
import Link from 'next/link.js'
import SelectLanguage from './select-language/selectLanguage'
import BackdropLeftToRigth from '../ui/backdrop/BackdropLeftToRigth'
import ContactModalButton from '../ui/buttons/ContactModalButton'
import ModalContact from '../ui/modals/modalContact'
import { usePathname } from 'next/navigation'

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
  const [modalOpenNavbar, setModalOpenNavbar] = useState(false)
  const close = () => setModalOpenNavbar(false)
  const open = () => setModalOpenNavbar(true)
  const routes = text.menu.routes
  const currentPathname = usePathname()

  const [scrollY, setScrollY] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY
      setIsScrollingDown(newScrollY > scrollY)
      setScrollY(newScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollY])

  return (
    <AnimatePresence>
      {!isScrollingDown && (
        <motion.nav
          initial={{ y: '-5rem', opacity: 0 }}
          animate={{ y: '0rem', opacity: 1 }}
          transition={{
            delay: 0.5,
            type: 'spring',
            stiffness: 100,
            damping: 30
          }}
          exit={{ y: '-5rem' }}
          className={`h-20 max-w-full z-50 fixed ${
            isScrollingDown ? '-top-20' : 'top-0'
          } left-0 w-full bg-zinc-950/40 backdrop-blur-lg bg-clip-padding backdrop-filter shadow-l`}
        >
          <TailwindGrid fullSize>
            <div className="w-full lg:w-11/12 absolute top-0 right-0 col-span-full flex justify-end ">
              <div className=" flex h-20 justify-between w-full lg:w-12/12 self-end  ">
                <div className=" ml-8 col-span-2 flex justify-center items-center">
                  <Link
                    href="/"
                    className="w-full self-center flex items-center cursor-pointer"
                  >
                    {/* <motion.img layoutId='navbarLogo' src={imageData.logos[0]} alt='Luis Urdaneta Logo' width='50px' height='50px' className='max-h-[50px] max-w-full' /> */}
                    <motion.p
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="font-main_regular  text-3xl font-bold "
                    >
                      <span className="text-primary">&lt;</span>
                      <span className="hidden md:inline">LuisUrdaneta</span>
                      <span className="md:hidden">Luis</span>
                      <span className="text-primary">/&gt;</span>
                    </motion.p>
                  </Link>
                </div>
                <div className="hidden lg:flex">
                  {routes.map((route) => (
                    <motion.div
                      className="flex justify-center px-4"
                      key={route.pathname}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href={
                          route.pathname === '/projects'
                            ? '/projects?category=All&page=1'
                            : route.pathname
                        }
                        className={
                          currentPathname === route.pathname
                            ? 'self-center flex items-center text-primary font-bold rounded-md px-4 h-8 uppercase'
                            : 'self-center flex items-center text-zinc-100  hover:scale-105 hover:text-primary transition-all font-bold rounded-md px-4 h-8 uppercase'
                        }
                      >
                        {route.name}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="flex justify-center px-4">
                    <ContactModalButton />
                  </div>
                  <div className="flex justify-center pr-8 pl-4">
                    <SelectLanguage />
                  </div>
                </div>
                <motion.nav
                  initial={false}
                  animate={isOpen ? 'open' : 'closed'}
                  ref={containerRef}
                  // if you prefer to make the elements behind touchable change to flex instead w-full
                  className="absolute lg:hidden top-0 right-0 bottom-0 h-20"
                >
                  <AnimatePresence
                    initial={false}
                    mode="wait"
                    onExitComplete={() => modalOpenNavbar && open()}
                  >
                    {isOpen && (
                      <BackdropLeftToRigth onClick={() => toggleOpen()}>
                        <motion.div
                          className={`fixed h-screen top-0 right-0 bottom-0 max-w-full overflow-hidden -z-30  ${
                            isOpen ? 'bg-[#121212] w-7/12' : 'bg-[#121212]'
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
                      </BackdropLeftToRigth>
                    )}
                  </AnimatePresence>
                  <AnimatePresence
                    initial={false}
                    mode="wait"
                    onExitComplete={() => modalOpenNavbar && open()}
                  >
                    {modalOpenNavbar && <ModalContact handleClose={close} />}
                  </AnimatePresence>

                  <ToggleMenu isOpen={isOpen} toggle={() => toggleOpen()} />
                </motion.nav>
              </div>
            </div>
          </TailwindGrid>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
