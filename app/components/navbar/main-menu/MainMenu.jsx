'use client'
import { useContext, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import SubMenu from '../sub-menu/SubMenu.jsx'
import { LanguageContext } from '../../../context/languageContext.jsx'
import Link from 'next/link.js'

const MainMenu = ({ isOpen, toggleOpen }) => {
  const [openLanguagues, setOpenLanguagues] = useState(false)
  const { text, setLanguageCookie } = useContext(LanguageContext)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const itemVariants = {
    open: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 1 * i,
        delayChildren: 0.75 * i,
        when: 'beforeChildren',
        staggerDirection: 1
      }
    }),
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 1,
        staggerDirection: -1,
        when: 'afterChildren'

      }
    }
  }

  return (
    <motion.ul
      variants={itemVariants}
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      exit='closed'
      className='flex-row group-first:border-b-2 content-center justify-center top-[75px] right-0 px-14 fixed w-9/12 '
      ref={ref}
    >
      <AnimatePresence>
        {isOpen &&
          <>
            <Link href={text.menu.home_pathname} >
              <motion.p
                variants={itemVariants}
                initial='closed'
                animate={isOpen && isInView ? 'open' : 'closed'}
                exit='closed'
                className='block text-center text-zinc-100 font-bold hover:text-tangle-green-blue-crayola hover:text-primary hover:stroke-primary'
                onClick={toggleOpen}
              >
                <div className='flex justify-between align-middle items-center hover:text-primary hover:stroke-primary'>
                  <p>{text.menu.home}</p>
                </div>
              </motion.p>
            </Link>

            <Link href={text.menu.projects_pathname}>
              <motion.p
                variants={itemVariants}
                initial='closed'
                animate={isOpen ? 'open' : 'closed'}
                exit='closed'
                onClick={toggleOpen}
                className='block mt-5 text-center text-zinc-100 font-bold hover:text-primary hover:stroke-primary'
              >
                <div className='flex justify-between align-middle items-center'>
                  <p>{text.menu.projects}</p>
                </div>
              </motion.p>
            </Link>

            <motion.div
              variants={itemVariants}
              initial='closed'
              animate={isOpen ? 'open' : 'closed'}
              exit='closed'
              className='cursor-pointer text-zinc-100 hover:text-primary hover:stroke-primary'
            >
              <SubMenu
                itemVariants={itemVariants}
                isOpen={isOpen}
                toggleOpen={toggleOpen}
                initial='closed'
                animate={isOpen ? 'open' : 'closed'}
                exit='closed'
                subIsOpen={openLanguagues}
                setIsOpenList={setOpenLanguagues}
                text={text}
                className='mt-5 text-zinc-100 hover:text-primary hover:stroke-primary '
                setLanguageCookie={setLanguageCookie}
              />
            </motion.div>

          </>}
      </AnimatePresence>
    </motion.ul>
  )
}

export default MainMenu
