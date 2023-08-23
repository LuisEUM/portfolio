'use client'
import { motion } from 'framer-motion'

function PrimaryButton ({ text, icon = 'download', textLeft = false }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.93 }}
      transition={{ duration: 0.2 }}
      className={`${icon === 'medium' ? 'hover:text-zinc-900 bg-zinc-900' : 'hover:text-zinc-950 bg-zinc-950/40'} group  self-stretch cursor-pointer justify-center items-center inline-flex lg:min-w-[172px] w-full lg:w-[13vw]  rounded-md border border-primary text-primary  backdrop-blur-lg bg-clip-padding backdrop-filter hover:bg-primary  h-12 gap-2`}
    >
      <div className="justify-center items-center gap-4 px-4 flex ">
        {textLeft && (
          <p className=" text-left  text-[2.8vw] md:text-[min(1vw,22px)]   group-hover:text-zinc-800   font-bold uppercase mx-auto">
            {text}
          </p>
        )}
        <div className="w-[15px] h-[19px] relative">
          {icon === 'download' && (
            <svg
              viewBox="0 0 15 20"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full aspect-square fill-primary group-hover:fill-zinc-950 "
            >
              <g id="Group">
                <path
                  id="Vector"
                  d="M5.30004 6.42137C5.86004 6.42137 6.31004 5.97137 6.31004 5.41137C6.31004 4.85137 5.86004 4.40137 5.30004 4.40137C4.74004 4.40137 4.29004 4.85137 4.29004 5.41137C4.29004 5.97137 4.74004 6.42137 5.30004 6.42137Z"
                />
                <path
                  id="Vector_2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.33 8.62123C7.33 7.54123 6.42 6.76123 5.3 6.76123C4.18 6.76123 3.27 7.54123 3.27 8.62123V9.13123C3.27 9.22123 3.31 9.31123 3.37 9.37123C3.43 9.43123 3.52 9.47123 3.61 9.47123H6.99C7.08 9.47123 7.17 9.43123 7.23 9.37123C7.29 9.31123 7.33 9.22123 7.33 9.13123V8.62123ZM3.25 11.5712C3.25 11.3723 3.32902 11.1816 3.46967 11.0409C3.61032 10.9002 3.80109 10.8212 4 10.8212H11C11.1989 10.8212 11.3897 10.9002 11.5303 11.0409C11.671 11.1816 11.75 11.3723 11.75 11.5712C11.75 11.7701 11.671 11.9609 11.5303 12.1016C11.3897 12.2422 11.1989 12.3212 11 12.3212H4C3.80109 12.3212 3.61032 12.2422 3.46967 12.1016C3.32902 11.9609 3.25 11.7701 3.25 11.5712ZM3.25 14.5712C3.25 14.3723 3.32902 14.1816 3.46967 14.0409C3.61032 13.9002 3.80109 13.8212 4 13.8212H11C11.1989 13.8212 11.3897 13.9002 11.5303 14.0409C11.671 14.1816 11.75 14.3723 11.75 14.5712C11.75 14.7701 11.671 14.9609 11.5303 15.1016C11.3897 15.2422 11.1989 15.3212 11 15.3212H4C3.80109 15.3212 3.61032 15.2422 3.46967 15.1016C3.32902 14.9609 3.25 14.7701 3.25 14.5712Z"
                />
                <path
                  id="Vector_3"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 2.57129C0 1.46929 0.898 0.571289 2 0.571289H8.69C9.252 0.571289 9.782 0.809289 10.155 1.20229L10.161 1.20929L14.473 5.91129C14.832 6.29429 15 6.79529 15 7.27129V17.5713C15 18.6733 14.102 19.5713 13 19.5713H2C0.898 19.5713 0 18.6733 0 17.5713V2.57129ZM8.689 2.57129H2V17.5713H13V7.26329L8.704 2.57829L8.701 2.57729C8.69736 2.57464 8.6933 2.57262 8.689 2.57129Z"
                />
                <path
                  id="Vector_4"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.68994 0.571289C8.95516 0.571289 9.20951 0.676646 9.39705 0.864182C9.58459 1.05172 9.68994 1.30607 9.68994 1.57129V6.27129H13.9999C14.1313 6.27129 14.2613 6.29716 14.3826 6.34741C14.504 6.39766 14.6142 6.47132 14.707 6.56418C14.7999 6.65704 14.8736 6.76728 14.9238 6.88861C14.9741 7.00993 14.9999 7.13997 14.9999 7.27129C14.9999 7.40261 14.9741 7.53265 14.9238 7.65397C14.8736 7.7753 14.7999 7.88554 14.707 7.9784C14.6142 8.07125 14.504 8.14491 14.3826 8.19517C14.2613 8.24542 14.1313 8.27129 13.9999 8.27129H8.68994C8.42472 8.27129 8.17037 8.16593 7.98283 7.9784C7.7953 7.79086 7.68994 7.53651 7.68994 7.27129V1.57129C7.68994 1.30607 7.7953 1.05172 7.98283 0.864182C8.17037 0.676646 8.42472 0.571289 8.68994 0.571289Z"
                />
              </g>
            </svg>
          )}
          {icon === 'medium' && (
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[19px] aspect-square fill-zinc-800 group-hover:fill-primary group-hover:bg-zinc-800 bg-primary rounded-full"
            >
              <g id="medium">
                <path
                  id="Vector"
                  d="M8.11111 16C8.93623 16 9.72755 15.6313 10.311 14.9749C10.8944 14.3185 11.2222 13.4283 11.2222 12.5C11.2222 11.5717 10.8944 10.6815 10.311 10.0251C9.72755 9.36875 8.93623 9 8.11111 9C7.28599 9 6.49467 9.36875 5.91122 10.0251C5.32778 10.6815 5 11.5717 5 12.5C5 13.4283 5.32778 14.3185 5.91122 14.9749C6.49467 15.6313 7.28599 16 8.11111 16ZM14.3333 16C15.1928 16 15.8889 14.4338 15.8889 12.5C15.8889 10.5662 15.1928 9 14.3333 9C13.4739 9 12.7778 10.5662 12.7778 12.5C12.7778 14.4338 13.4739 16 14.3333 16ZM18.2222 16C18.6516 16 19 14.4338 19 12.5C19 10.5662 18.6516 9 18.2222 9C17.7929 9 17.4444 10.5662 17.4444 12.5C17.4444 14.4338 17.7929 16 18.2222 16Z"
                  stroke="#27272A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          )}
        </div>
        {!textLeft && (
          <p className=" text-center -zinc-950 lg:text-[1vw] font-bold uppercase mx-auto">
            {text}
          </p>
        )}
      </div>
    </motion.button>
  )
}

export default PrimaryButton
