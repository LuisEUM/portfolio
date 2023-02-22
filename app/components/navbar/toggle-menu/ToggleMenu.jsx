'use client'
import * as React from 'react'
import { motion } from 'framer-motion'

const Path = props => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    {...props}
  />
)

export const ToggleMenu = ({ toggle, isOpen }) => (
  <button className={`flex items-center justify-center ${isOpen ? 'fixed' : 'absolute'} top-5 right-9 w-12 h-12 rounded-full bg-transparent`} onClick={toggle}>
    <svg width='23' height='23' viewBox='0 0 23 28'>
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5', stroke: 'rgb(255,255,255)', transition: { delay: 0.5 } },
          open: { d: 'M 3 16.5 L 17 2.5', stroke: 'rgb(0,0,0)' }
        }}
      />
      <Path
        d='M 2 9.423 L 20 9.423'
        variants={{
          closed: { opacity: 1, stroke: 'rgb(255,255,255)', transition: { delay: 0.5 } },
          open: { opacity: 0, stroke: 'rgb(0,0,0)' }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346', stroke: 'rgb(255,255,255)', transition: { delay: 0.5 } },
          open: { d: 'M 3 2.5 L 17 16.346', stroke: 'rgb(0,0,0)' }
        }}
      />
    </svg>
  </button>
)
