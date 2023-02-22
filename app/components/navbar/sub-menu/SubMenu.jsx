'use client'
import { deleteCookie, setCookie } from 'cookies-next'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function SubMenu ({
  isOpen,
  subIsOpen,
  setIsOpenList,
  text,
  itemVariants,
  className,
  setLanguageCookie
}) {
  const [selectedCategory, setSelectedCategory] = useState(text.menu[0].current_language)
  const languageOptions = text.menu[0].languages_options

  useEffect(() => {
    setSelectedCategory(text.menu[0].current_language)
  }, [text])

  return (
    <>
      <motion.ul
        variants={itemVariants}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        whileTap={{ scale: 0.97 }}
        whileHover={{ color: 'black' }}
        className={`text-center  font-bold  w-full content-center ${className}`}
        onClick={() => setIsOpenList(!subIsOpen)}
      >
        <div className='flex justify-between align-middle items-center hover:text-tangle-green-blue-crayola'>
          <p className='hover:text-tangle-green-blue-crayola '>{text.menu[0].languages}</p>
          <div className={`${subIsOpen ? 'rotate-90' : ''}`}>
            <svg width='8' height='15' viewBox='0 0 8 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path className='hover:stroke-tangle-green-blue-crayola' d='M1 13.5L7 7.5L1 1.5' stroke='#0D111B' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </div>
        </div>
        <AnimatePresence>
          {isOpen &&
            subIsOpen &&
            languageOptions.map((category, index) => (
              <motion.li
                variants={itemVariants}
                initial='closed'
                animate={isOpen ? 'open' : 'closed'}
                exit='closed'
                key={index}
                className={`${(selectedCategory === category.name) ? 'text-tangle-green-blue-crayola' : 'text-neutral-600'} text-left border-b-2 hover:text-tangle-green-blue-crayola  text-neutral-600 font-normal mt-5 flex-row w-full content-center justify-center`}
                onClick={() => {
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
  )
}

export default SubMenu
