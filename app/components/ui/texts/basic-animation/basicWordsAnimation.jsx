import React from 'react'
import { motion } from 'framer-motion'

export default function BasicWordsAnimation ({ text, tag, className, keyText }) {
  const words = text.split(' ')
  keyText = keyText || text

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i }
    })
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  }

  if (tag === 'h1') {
    return (
      <motion.h1
        className={`${className}`}
        variants={container}
        initial='hidden'
        animate='visible'
        key={keyText}
      >
        <Item words={words} child={child} className={className} />
      </motion.h1>
    )
  } else if (tag === 'h2') {
    return (
      <motion.h2
        className={`${className}`}
        variants={container}
        initial='hidden'
        animate='visible'
        key={keyText}
      >
        <Item words={words} child={child} className={className} />
      </motion.h2>
    )
  } else if (tag === 'h3') {
    return (
      <motion.h3
        className={`${className}`}
        variants={container}
        initial='hidden'
        animate='visible'
        key={keyText}
      >
        <Item words={words} child={child} className={className} />
      </motion.h3>
    )
  } else if (tag === 'h4') {
    return (
      <motion.h4
        className={`${className}`}
        variants={container}
        initial='hidden'
        animate='visible'
        key={keyText}
      >
        <Item words={words} child={child} className={className} />
      </motion.h4>
    )
  } else if (tag === 'h5') {
    return (
      <motion.h5
        className={`${className}`}
        variants={container}
        initial='hidden'
        animate='visible'
        key={keyText}
      >
        <Item words={words} child={child} className={className} />
      </motion.h5>
    )
  } else if (tag === 'h6') {
    return (
      <motion.h6
        className={`${className}`}
        variants={container}
        initial='hidden'
        animate='visible'
        key={keyText}
      >
        <Item words={words} child={child} className={className} />
      </motion.h6>
    )
  } else {
    return (
      <motion.p
        className={`${className} `}
        variants={container}
        initial='hidden'
        animate='visible'
        key={keyText}
      >
        <Item words={words} child={child} className={className} />
      </motion.p>
    )
  }
}

function Item ({ words, child, className }) {
  return (
    words.map((word, index) => (
      <motion.span
        variants={child}
        style={{ marginRight: '5px' }}
        key={index}
        className={`${className} inline-flex`}
      >
        {word + '\u00A0'}
      </motion.span>
    ))
  )
}
