'use client'
import { useContext, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LanguageContext } from '../../../context/languageContext.jsx'
import Link from 'next/link.js'
import ContactButton from '../../ui/buttons/contactButton.jsx'
import LanguaguesSwitch from '../../ui/switch/languaguesSwitch.jsx'

const MainMenu = ({ isOpen, toggleOpen, setModalOpenNavbar }) => {
  const { text } = useContext(LanguageContext)
  const ref = useRef(null)
  // const isInView = useInView(ref, { once: false })

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
      className='flex-row group-first:border-b-2 top-[75px] right-0 fixed w-9/12 h-full'
      ref={ref}
    >
      <AnimatePresence>
        {isOpen &&
          <>
          <div>
            <Link href={text.menu.home_pathname} onClick={toggleOpen} className='grid grid-cols-12  hover:bg-zinc-800 py-5 px-5 '>
                  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className='flex self-center items-center justify-center col-span-1 fill-zinc-300 col-start-2'>
                    <path d="M3.33325 17.5V7.5L9.99992 2.5L16.6666 7.5V17.5H11.6666V11.6667H8.33325V17.5H3.33325Z" />
                  </svg>
                  <p className='text-zinc-100 text-xl tracking-wider col-span-9 col-start-3 h-full'> {text.menu.home} </p>
              </Link>

              <Link href={text.menu.projects_pathname} onClick={toggleOpen} className='grid grid-cols-12  hover:bg-zinc-800 py-5 px-5 '>
              <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg" className='flex items-center self-center justify-center col-span-1 fill-zinc-300 col-start-2'>
                <path d="M3.20001 4.2498H0.624005C0.328005 4.2498 0.032005 4.5218 0.072005 4.9638L1.32001 13.4553C1.32001 13.4553 2.8 7.1993 3.088 5.6948C3.176 5.2443 3.57601 5.0998 3.87201 5.0998H8.00001C8.00001 5.0998 7.44001 3.3318 7.38401 3.1363C7.288 2.7623 7.11201 2.5498 6.76001 2.5498H4.112C3.824 2.5498 3.55201 2.7453 3.47201 3.0938C3.40001 3.4338 3.20001 4.2498 3.20001 4.2498ZM7.10401 4.2498H3.90401C3.90401 4.2498 4.24001 3.3998 4.60001 3.3998H6.30401C6.688 3.3998 7.10401 4.2498 7.10401 4.2498ZM2.13601 13.8123C1.88801 14.2118 1.52801 14.4498 1.12801 14.4498H13.712C14.144 14.4498 14.448 14.1863 14.536 13.7443C14.888 11.8828 15.88 6.5703 15.88 6.5703C15.936 6.1453 15.64 5.9498 15.384 5.9498H12.8V4.7003C12.8 4.5643 12.592 4.2498 12.272 4.2498H9.26401C8.84801 4.2498 8.56801 4.7428 8.56801 4.7428L8.00001 5.9498H4.47201C4.21601 5.9498 3.96801 6.1113 3.92001 6.3748C3.92001 6.3748 2.64801 12.0698 2.54401 12.6053C2.48801 12.9198 2.36801 13.4468 2.13601 13.8123ZM12.304 5.9498H8.80001C8.80001 5.9498 9.26401 5.0998 9.70401 5.0998H11.536C12.104 5.0998 12.304 5.9498 12.304 5.9498Z" />
              </svg>

                  <p className='text-zinc-100 text-xl tracking-wider col-span-9 col-start-3 h-full'> {text.menu.projects} </p>
              </Link>

              <div className='grid grid-cols-12 py-5 px-5'>
                <div className='grid col-span-12 grid-cols-12 '>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='flex items-center self-center justify-center col-span-1 fill-zinc-300 col-start-2'>
                    <path d="M8.33333 16.6667C7.19444 16.6667 6.11806 16.4478 5.10417 16.01C4.09028 15.5728 3.205 14.9756 2.44833 14.2183C1.69111 13.4617 1.09389 12.5764 0.656667 11.5625C0.218889 10.5486 0 9.47222 0 8.33333C0 7.18056 0.218889 6.10083 0.656667 5.09417C1.09389 4.08694 1.69111 3.205 2.44833 2.44833C3.205 1.69111 4.09028 1.09361 5.10417 0.655833C6.11806 0.218611 7.19444 0 8.33333 0C9.48611 0 10.5658 0.218611 11.5725 0.655833C12.5797 1.09361 13.4617 1.69111 14.2183 2.44833C14.9756 3.205 15.5728 4.08694 16.01 5.09417C16.4478 6.10083 16.6667 7.18056 16.6667 8.33333C16.6667 9.47222 16.4478 10.5486 16.01 11.5625C15.5728 12.5764 14.9756 13.4617 14.2183 14.2183C13.4617 14.9756 12.5797 15.5728 11.5725 16.01C10.5658 16.4478 9.48611 16.6667 8.33333 16.6667ZM8.33333 14.9583C8.69444 14.4583 9.00694 13.9375 9.27083 13.3958C9.53472 12.8542 9.75 12.2778 9.91667 11.6667H6.75C6.91667 12.2778 7.13194 12.8542 7.39583 13.3958C7.65972 13.9375 7.97222 14.4583 8.33333 14.9583ZM6.16667 14.625C5.91667 14.1667 5.69806 13.6908 5.51083 13.1975C5.32306 12.7047 5.16667 12.1944 5.04167 11.6667H2.58333C2.98611 12.3611 3.48944 12.9653 4.09333 13.4792C4.69778 13.9931 5.38889 14.375 6.16667 14.625ZM10.5 14.625C11.2778 14.375 11.9686 13.9931 12.5725 13.4792C13.1769 12.9653 13.6806 12.3611 14.0833 11.6667H11.625C11.5 12.1944 11.3439 12.7047 11.1567 13.1975C10.9689 13.6908 10.75 14.1667 10.5 14.625ZM1.875 10H4.70833C4.66667 9.72222 4.63528 9.44778 4.61417 9.17667C4.59361 8.90611 4.58333 8.625 4.58333 8.33333C4.58333 8.04167 4.59361 7.76056 4.61417 7.49C4.63528 7.21889 4.66667 6.94444 4.70833 6.66667H1.875C1.80556 6.94444 1.75333 7.21889 1.71833 7.49C1.68389 7.76056 1.66667 8.04167 1.66667 8.33333C1.66667 8.625 1.68389 8.90611 1.71833 9.17667C1.75333 9.44778 1.80556 9.72222 1.875 10ZM6.375 10H10.2917C10.3333 9.72222 10.3647 9.44778 10.3858 9.17667C10.4064 8.90611 10.4167 8.625 10.4167 8.33333C10.4167 8.04167 10.4064 7.76056 10.3858 7.49C10.3647 7.21889 10.3333 6.94444 10.2917 6.66667H6.375C6.33333 6.94444 6.30222 7.21889 6.28167 7.49C6.26056 7.76056 6.25 8.04167 6.25 8.33333C6.25 8.625 6.26056 8.90611 6.28167 9.17667C6.30222 9.44778 6.33333 9.72222 6.375 10ZM11.9583 10H14.7917C14.8611 9.72222 14.9133 9.44778 14.9483 9.17667C14.9828 8.90611 15 8.625 15 8.33333C15 8.04167 14.9828 7.76056 14.9483 7.49C14.9133 7.21889 14.8611 6.94444 14.7917 6.66667H11.9583C12 6.94444 12.0311 7.21889 12.0517 7.49C12.0728 7.76056 12.0833 8.04167 12.0833 8.33333C12.0833 8.625 12.0728 8.90611 12.0517 9.17667C12.0311 9.44778 12 9.72222 11.9583 10ZM11.625 5H14.0833C13.6806 4.30556 13.1769 3.70139 12.5725 3.1875C11.9686 2.67361 11.2778 2.29167 10.5 2.04167C10.75 2.5 10.9689 2.97556 11.1567 3.46833C11.3439 3.96167 11.5 4.47222 11.625 5ZM6.75 5H9.91667C9.75 4.38889 9.53472 3.8125 9.27083 3.27083C9.00694 2.72917 8.69444 2.20833 8.33333 1.70833C7.97222 2.20833 7.65972 2.72917 7.39583 3.27083C7.13194 3.8125 6.91667 4.38889 6.75 5ZM2.58333 5H5.04167C5.16667 4.47222 5.32306 3.96167 5.51083 3.46833C5.69806 2.97556 5.91667 2.5 6.16667 2.04167C5.38889 2.29167 4.69778 2.67361 4.09333 3.1875C3.48944 3.70139 2.98611 4.30556 2.58333 5Z" fill="#C7D1DA"/>
                  </svg>
                    <p className='text-zinc-100 text-xl tracking-wider col-span-9 col-start-3 h-full'> {text.menu.languages} </p>
                </div>
                <div className='flex col-span-9 col-start-3  my-5 gap-x-2 items-center'>
                    <p className=' text-lg tracking-wider '>ES</p>
                    <LanguaguesSwitch className='w-16'/>
                    <p className=' text-lg tracking-wider'>EN</p>

                </div>
              </div>
          </div>

            {/* <motion.div
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
                className='mt-5 text-zinc-100 hover:text-primary hover:stroke-primary'
                setLanguageCookie={setLanguageCookie}
              />
            </motion.div> */}
            <div className='grid grid-cols-12  py-5 px-5 w-full absolute bottom-28' onClick={toggleOpen}>
              <ContactButton setModalOpenNavbar={setModalOpenNavbar} className='w-full col-start-2 bg-primary col-span-10 uppercase text-zinc-900 tracking-wider font-extrabold text-lg rounded-lg py-3'/>
            </div>
          </>
        }
      </AnimatePresence>

    </motion.ul>
  )
}

export default MainMenu
