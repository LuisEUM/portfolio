'use client'
import { LanguageContext } from '../../../context/languageContext'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import Backdrop from '../backdrop/backdrop'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

const ModalContact = ({ handleClose }) => {
  const { text } = useContext(LanguageContext)

  return (
      <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className=' w-[clamp(90%,700px,90px)] md:max-w-lg m-auto py-2 px-8 rounded-xl flex flex-col justify-between items-center shadow bg-zinc-800 '
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <ModalContent text={text} handleClose={handleClose}/>
          </motion.div>
      </Backdrop>
  )
}

export default ModalContact

function ModalContent ({ text, handleClose }) {
  const [copied, setCopied] = useState(false)
  const close = () => setCopied(false)
  const open = () => setCopied(true)

  const handleCopy = (event) => {
    // Prevent default behavior of the button to avoid unexpected results
    event.preventDefault()

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
      <div className='w-full rounded-xl' >
        {/* <!--MODAL HEADER--> */}
        <div
          className='flex justify-between items center border-b border-gray-200 py-3'
        >
          <div className='flex items-center justify-center'>
            <p className='text-xl text-zinc-100 font-medium uppercase '>{text.contact.header}</p>
          </div>
          <motion.div
            className='bg-gray-300 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-9 h-9 flex items-center justify-center rounded-full'
            onClick={handleClose}
            whileHover={{ backgroundColor: 'rgb(107 114 128)', scale: 1.10 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M2.1 13.3C1.7134 13.6866 1.0866 13.6866 0.7 13.3C0.313401 12.9134 0.313401 12.2866 0.7 11.9L5.6 7L0.7 2.1C0.3134 1.7134 0.313401 1.0866 0.7 0.7C1.0866 0.313401 1.7134 0.313401 2.1 0.7L7 5.6L11.9 0.7C12.2866 0.3134 12.9134 0.313401 13.3 0.7C13.6866 1.0866 13.6866 1.7134 13.3 2.1L8.4 7L13.3 11.9C13.6866 12.2866 13.6866 12.9134 13.3 13.3C12.9134 13.6866 12.2866 13.6866 11.9 13.3L7 8.4L2.1 13.3Z' fill='#18181B'/>
            </svg>

          </motion.div>
        </div>
        {/* <!--MODAL BODY--> */}
        <div className='my-4'>
          <p className='text-md'>{text.contact.socialNetworksParagraph}</p>
          <div className='flex flex-wrap justify-start gap-7 my-4'>

            {/* <!--WHATSAPP ICON--> */}
            <a
              href={text.contact.socialNetwoks.whatsApp.url}
              target="_blank"
              rel="noreferrer"
              className={`${text.contact.socialNetwoks.whatsApp.hidden && 'hidden'} hover:fill-primary transition-all w-12 h-12 bg-zinc-300 rounded-full flex items-center justify-center shadow-xl  cursor-pointer`}
            >
              <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M20.4054 3.4875C18.1607 1.2375 15.1714 0 11.9946 0C5.4375 0 0.101786 5.33571 0.101786 11.8929C0.101786 13.9875 0.648214 16.0339 1.6875 17.8393L0 24L6.30536 22.3446C8.04107 23.2929 9.99643 23.7911 11.9893 23.7911H11.9946C18.5464 23.7911 24 18.4554 24 11.8982C24 8.72143 22.65 5.7375 20.4054 3.4875ZM11.9946 21.7875C10.2161 21.7875 8.475 21.3107 6.95893 20.4107L6.6 20.1964L2.86071 21.1768L3.85714 17.5286L3.62143 17.1536C2.63036 15.5786 2.11071 13.7625 2.11071 11.8929C2.11071 6.44464 6.54643 2.00893 12 2.00893C14.6411 2.00893 17.1214 3.0375 18.9857 4.90714C20.85 6.77679 21.9964 9.25714 21.9911 11.8982C21.9911 17.3518 17.4429 21.7875 11.9946 21.7875ZM17.4161 14.3839C17.1214 14.2339 15.6589 13.5161 15.3857 13.4196C15.1125 13.3179 14.9143 13.2696 14.7161 13.5696C14.5179 13.8696 13.95 14.5339 13.7732 14.7375C13.6018 14.9357 13.425 14.9625 13.1304 14.8125C11.3839 13.9393 10.2375 13.2536 9.08572 11.2768C8.78036 10.7518 9.39107 10.7893 9.95893 9.65357C10.0554 9.45536 10.0071 9.28393 9.93214 9.13393C9.85714 8.98393 9.2625 7.52143 9.01607 6.92679C8.775 6.34821 8.52857 6.42857 8.34643 6.41786C8.175 6.40714 7.97679 6.40714 7.77857 6.40714C7.58036 6.40714 7.25893 6.48214 6.98571 6.77679C6.7125 7.07679 5.94643 7.79464 5.94643 9.25714C5.94643 10.7196 7.0125 12.1339 7.15714 12.3321C7.30714 12.5304 9.25179 15.5304 12.2357 16.8214C14.1214 17.6357 14.8607 17.7054 15.8036 17.5661C16.3768 17.4804 17.5607 16.8482 17.8071 16.1518C18.0536 15.4554 18.0536 14.8607 17.9786 14.7375C17.9089 14.6036 17.7107 14.5286 17.4161 14.3839Z' />
              </svg>
            </a>

            {/* <!--LINKEDIN ICON--> */}
            <a
              href={text.contact.socialNetwoks.linkedIn.url}
              target="_blank"
              rel="noreferrer"
              className={`${text.contact.socialNetwoks.linkedIn.hidden && 'hidden'} hover:fill-[#1877f2] transition-all w-12 h-12 bg-zinc-300 rounded-full flex items-center justify-center shadow-xl cursor-pointer`}
            >
              <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' >
                <path d='M5.37214 24H0.396429V7.97643H5.37214V24ZM2.88161 5.79066C1.29054 5.79066 0 4.47278 0 2.88167C1.13882e-08 2.1174 0.303597 1.38444 0.844003 0.844022C1.38441 0.303604 2.11736 0 2.88161 0C3.64586 0 4.3788 0.303604 4.91921 0.844022C5.45962 1.38444 5.76321 2.1174 5.76321 2.88167C5.76321 4.47278 4.47214 5.79066 2.88161 5.79066ZM23.9946 24H19.0296V16.1998C19.0296 14.3409 18.9921 11.9569 16.4427 11.9569C13.8557 11.9569 13.4593 13.9766 13.4593 16.0659V24H8.48893V7.97643H13.2611V10.1622H13.3307C13.995 8.90323 15.6177 7.57463 18.0386 7.57463C23.0743 7.57463 24 10.8908 24 15.198V24H23.9946Z' />
              </svg>
            </a>

            {/* <!--INSTAGRAM ICON--> */}
            <a
              href={text.contact.socialNetwoks.instagram.url}
              target="_blank"
              rel="noreferrer"
              className={`${text.contact.socialNetwoks.instagram.hidden && 'hidden'} hover:fill-[#bc2a8d] transition-all w-12 h-12 bg-zinc-300 rounded-full flex items-center justify-center shadow-xl cursor-pointer`}
            >
              <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12.0027 5.8467C8.59744 5.8467 5.85075 8.594 5.85075 12C5.85075 15.406 8.59744 18.1533 12.0027 18.1533C15.4079 18.1533 18.1546 15.406 18.1546 12C18.1546 8.594 15.4079 5.8467 12.0027 5.8467ZM12.0027 16.0004C9.80212 16.0004 8.00312 14.2064 8.00312 12C8.00312 9.7936 9.79677 7.99955 12.0027 7.99955C14.2086 7.99955 16.0022 9.7936 16.0022 12C16.0022 14.2064 14.2032 16.0004 12.0027 16.0004ZM19.8412 5.595C19.8412 6.39295 19.1987 7.03024 18.4062 7.03024C17.6085 7.03024 16.9713 6.38759 16.9713 5.595C16.9713 4.80241 17.6138 4.15977 18.4062 4.15977C19.1987 4.15977 19.8412 4.80241 19.8412 5.595ZM23.9157 7.05166C23.8247 5.12909 23.3856 3.42609 21.9775 2.02298C20.5747 0.619882 18.8721 0.180743 16.9499 0.0843468C14.9689 -0.0281156 9.03112 -0.0281156 7.05008 0.0843468C5.1333 0.175388 3.43067 0.614526 2.02253 2.01763C0.61439 3.42073 0.180703 5.12373 0.0843279 7.0463C-0.0281093 9.02778 -0.0281093 14.9669 0.0843279 16.9483C0.175349 18.8709 0.61439 20.5739 2.02253 21.977C3.43067 23.3801 5.12794 23.8193 7.05008 23.9157C9.03112 24.0281 14.9689 24.0281 16.9499 23.9157C18.8721 23.8246 20.5747 23.3855 21.9775 21.977C23.3803 20.5739 23.8193 18.8709 23.9157 16.9483C24.0281 14.9669 24.0281 9.03314 23.9157 7.05166ZM21.3564 19.0744C20.9388 20.1241 20.1303 20.9327 19.0755 21.3558C17.496 21.9824 13.7481 21.8378 12.0027 21.8378C10.2572 21.8378 6.50396 21.977 4.92984 21.3558C3.88042 20.9381 3.07195 20.1294 2.64897 19.0744C2.02253 17.4946 2.16709 13.7458 2.16709 12C2.16709 10.2542 2.02789 6.50006 2.64897 4.92558C3.06659 3.87593 3.87507 3.06728 4.92984 2.6442C6.50931 2.01763 10.2572 2.16222 12.0027 2.16222C13.7481 2.16222 17.5014 2.02298 19.0755 2.6442C20.1249 3.06192 20.9334 3.87058 21.3564 4.92558C21.9828 6.50541 21.8383 10.2542 21.8383 12C21.8383 13.7458 21.9828 17.4999 21.3564 19.0744Z'/>
              </svg>
            </a>

            {/* <!--TWITTER ICON--> */}
            <div
              href={text.contact.socialNetwoks.twitter.url}
              target="_blank"
              rel="noreferrer"
              className={`${text.contact.socialNetwoks.twitter.hidden && 'hidden'} hover:fill-[#1d9bf0] transition-all w-12 h-12 bg-zinc-300 rounded-full flex items-center justify-center shadow-xl ursor-pointer'`}
            >
              <svg width="24" height="20" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5331 4.85786C21.5483 5.07105 21.5483 5.28429 21.5483 5.49747C21.5483 12 16.5991 19.4924 7.55333 19.4924C4.7665 19.4924 2.17768 18.6853 0 17.2843C0.395955 17.33 0.776628 17.3452 1.18782 17.3452C3.48728 17.3452 5.60407 16.5686 7.29444 15.2437C5.13199 15.198 3.31979 13.7818 2.69542 11.8325C3.00001 11.8782 3.30456 11.9086 3.62439 11.9086C4.066 11.9086 4.50766 11.8477 4.9188 11.7412C2.66499 11.2843 0.974582 9.30458 0.974582 6.91371V6.85282C1.62938 7.21831 2.39087 7.44673 3.19792 7.47715C1.87304 6.59388 1.00505 5.08629 1.00505 3.38069C1.00505 2.46699 1.24866 1.62943 1.67508 0.898457C4.09642 3.88323 7.73605 5.83244 11.8172 6.04568C11.7411 5.68019 11.6954 5.29952 11.6954 4.9188C11.6954 2.2081 13.8883 0 16.6142 0C18.0304 0 19.3096 0.593909 20.2081 1.5533C21.3198 1.34011 22.3858 0.928926 23.33 0.365486C22.9644 1.50765 22.1878 2.46704 21.1675 3.07614C22.1574 2.96959 23.1168 2.69542 24 2.31474C23.3301 3.28933 22.4924 4.15731 21.5331 4.85786Z"/>
              </svg>
            </div>

            {/* <!--TELEGRAM ICON--> */}
            <a
              href={text.contact.socialNetwoks.telegram.url}
              target="_blank"
              rel="noreferrer"
              className={`${text.contact.socialNetwoks.telegram.hidden && 'hidden'}  hover:fill-[#229ED9] transition-all w-12 h-12 bg-zinc-300 rounded-full flex items-center justify-center shadow-xl ursor-pointer`}
            >
              <svg width='24' height='20' viewBox='0 0 24 20' xmlns='http://www.w3.org/2000/svg'>
                <path d='M22.9744 1.75904L19.4975 18.1559C19.2352 19.3132 18.5511 19.6012 17.579 19.056L12.2814 15.1522L9.72517 17.6107C9.44229 17.8936 9.2057 18.1302 8.6605 18.1302L9.04111 12.7349L18.8597 3.86266C19.2866 3.48206 18.7671 3.27118 18.1962 3.65178L6.05799 11.2948L0.832377 9.65918C-0.304296 9.30429 -0.324869 8.52251 1.06897 7.97731L21.5085 0.102897C22.4549 -0.251992 23.283 0.313773 22.9744 1.75904Z'/>
              </svg>

            </a>
          </div>
          <div className='flex justify-between'>
            <p className='text-md'>{text.contact.emailAddressParagraph}</p>
            <div className='flex items-center justify-center'>
              <AnimatePresence
                initial={false}
                mode='wait'
                onExitComplete={() => (close())}
              >
                {copied && (
                  <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onAnimationComplete={() => (close())}
                  exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
                  className='text-sm text-center'
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
          <div className='grid grid-cols-12  justify-start items-center mt-4 w-full  transition-all'>
            {/* RECORDAR DE PREGUNTAR A UN PROFE */}

            <div className='col-span-12 grid-cols-11 md:grid-cols-9 grid '>
              <div className='col-span-2 md:col-span-1 flex h-10 items-center justify-center rounded-l-lg  border-zinc-300 bg-zinc-300  fill-black'>
                <div className='w-6 h-6 max-w-8 flex items-center justify-center shadow-xl min-w-6'>
                  <svg width='20' height='16' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg' >
                    <path d='M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z' fill='#18181B' />
                  </svg>
                </div>
              </div>

              <div className='col-span-9 md:col-span-8 bg-zinc-900 flex items-center justify-center h-10  rounded-r-lg content-center  '>
                <div className='w-8 h-8 mx-2 overflow-hidden  cursor-pointer' id='copyButton' onClick={handleCopy} />
                <input id='emailInput' className='w-full outline-none bg-transparent font-medium  h-full sm:tracking-widest uppercase text-sm sm:text-lg' type='text' placeholder='email address' value={text.contact.email}/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
