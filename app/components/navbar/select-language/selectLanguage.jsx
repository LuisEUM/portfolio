'use client'
import { useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LanguageContext } from '../../../context/languageContext'
import { deleteCookie, setCookie } from 'cookies-next'

const itemVariants = {
  open: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      staggerChildren: 1
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
      staggerDirection: -1
    }
  }
}

const mobileNavbar = {
  open: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05
    }
  },
  closed: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3
    }
  }
}

export default function SelectLanguage () {
  const { text, setLanguageCookie } = useContext(LanguageContext)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(
    text.menu.currentLanguage
  )
  const languageOptions = text.menu.languagesOptions

  useEffect(() => {
    setSelectedCategory(text.menu.currentLanguage)
  }, [text])

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className=" flex flex-col self-center "
    >
      <motion.button
        whileHover={{ scale: 1.03, fill: '#00BB31' }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="relative cursor-pointer w-full flex justify-between items-center text-left fill-white"
      >
        <div className="self-center">
          {/* <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12H22"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
          <svg
            width="20"
            height="20"
            x="0"
            y="0"
            viewBox="0 0 20 20"
            className=""
          >
            <g>
              <path
                fillRule="evenodd"
                d="M7 2a1 1 0 0 1 1 1v1h3a1 1 0 1 1 0 2H9.578a18.87 18.87 0 0 1-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 0 1-1.44 1.389 21.034 21.034 0 0 1-.554-.6 19.095 19.095 0 0 1-3.107 3.567 1 1 0 0 1-1.334-1.49 17.09 17.09 0 0 0 3.13-3.733 18.995 18.995 0 0 1-1.487-2.494 1 1 0 1 1 1.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 0 1 0-2h3V3a1 1 0 0 1 1-1zm6 6a1 1 0 0 1 .894.553l2.991 5.982a.88.88 0 0 1 .02.037l.99 1.98a1 1 0 1 1-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 1 1-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0 1 13 8zm-1.382 6h2.764L13 11.236z"
                clipRule="evenodd"
                data-original="#fff"
                className=""
              ></path>
            </g>
          </svg>
        </div>
        <p className="fs-6 fw-normal text-zinc-100  mx-2 font-bold uppercase">
          {selectedCategory || 'Language'}
        </p>
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke={isOpen ? 'rgb(0 187 49)' : 'rgb(244 244 245)'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.button>
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => null}>
        {isOpen && (
          <>
            {/* <div className={`self-end h-0 w-0  border-l-transparent border-r-8 border-r-transparent  border-t-transparent ${isOpen ? '' : 'hidden'} border-solid border-[10px] border-zinc-700 right-12 bottom-4 z-50 absolute`}></div> */}
            <motion.ul
              variants={mobileNavbar}
              className={`select-list w-28 absolute bg-zinc-700 text-zinc-100 top-16  list-none m-0 flex flex-col right-8 ${
                isOpen ? 'p-2 scale-1' : 'hidden scale-0'
              }`}
              exit="closed"
              style={{
                clipPath: isOpen
                  ? 'inset(0% round 0px)'
                  : 'inset(10% 50% 90% 50% round 10px)',
                pointerEvents: isOpen ? 'auto' : 'none'
              }}
            >
              <AnimatePresence
                mode="wait"
                initial={false}
                onExitComplete={() => null}
              >
                {languageOptions &&
                  languageOptions.map((category, index) => (
                    <motion.li
                      key={index}
                      className="text-center text-md last:border-b-0 border-b-2  font-medium  first:pb-2 last:pt-2  flex-row w-full content-center justify-center cursor-pointer"
                      whileHover={{ color: '#C7D1DA', fontSize: '18px' }}
                      whileTap={{ color: '#C7D1DA', fontSize: '14px' }}
                      variants={itemVariants}
                      initial="closed"
                      animate={isOpen ? 'open' : 'closed'}
                      exit="closed"
                      value={category.id}
                      onClick={() => {
                        setIsOpen(false)
                        deleteCookie('language')
                        setCookie('language', category.pathname)
                        setLanguageCookie(category.pathname)
                      }}
                    >
                      {category.name}
                    </motion.li>
                  ))}
              </AnimatePresence>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
