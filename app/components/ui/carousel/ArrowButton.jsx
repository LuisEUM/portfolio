'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

const ArrowButton = ({ left, handleClickAfter, handleClickBefore }) => {
  const [hoverArrow, setHoverArrow] = useState(false)

  return (
    <motion.div className={`justify-center items-center select-none cursor-pointer flex font-bold w-5 h-5 z-50 text-lg rounded-full absolute -translate-y-1/2  ${left ? 'left-0 top-1/2 -scale-100' : 'right-0 top-1/2'} `} id='arrow2' onClick={left ? handleClickBefore : handleClickAfter} onHoverStart={() => setHoverArrow(true)} onHoverEnd={() => setHoverArrow(false)}>
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Carrusel/Back">
        <rect x="0.13623" y="0.647705" width="18" height="18" rx="9.34773" className={`${hoverArrow ? 'fill-primary  stroke-primary' : 'fill-[#1D1D1D] stroke-[#1D1D1D]'}`} />
        <path id="Vector 1" d="M8.31592 6.21753L11.8213 9.72293L8.31592 13.2283" strokeOpacity="0.62" strokeWidth="1.16847" strokeLinecap="round" strokeLinejoin="round" className={`${hoverArrow ? 'stroke-neutral-900' : 'stroke-neutral-200'}`} />
      </g>
    </svg>
  </motion.div>
  )
}

export default ArrowButton
