import { motion } from 'framer-motion'

export default function WordsAnimation ({ text, tag, className, keyText, setReady }) {
  const words = text.split(' ')
  keyText = keyText || text

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i }
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
      x: 150,
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
        <Item words={words} child={child} className={className} setReady={setReady} />
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
        <Item words={words} child={child} className={className} setReady={setReady} />
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
        <Item words={words} child={child} className={className} setReady={setReady} />
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
        <Item words={words} child={child} className={className} setReady={setReady} />
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
        <Item words={words} child={child} className={className} setReady={setReady} />
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
        <Item words={words} child={child} className={className} setReady={setReady} />
      </motion.h6>
    )
  } else {
    return (
      <motion.p
        className={`${className} flex flex-wrap w-full bg-blue- m-5 h-full items-center`}
        variants={container}
        initial='hidden'
        animate='visible'
        key={keyText}
      >
        <Item words={words} child={child} className={className} setReady={setReady} />
      </motion.p>
    )
  }
}

function Item ({ words, child, className, setReady }) {
  return (
    words.map((word, index) => {
      if (word === '<span>') {
        return <motion.span key={index} variants={child} className='text-[#00BB31] ml-5 mr-1'>{words[index + 1]}</motion.span>
      }
      if (words[index - 1] === '<span>') {
        return ''
      }
      if (word === '</span>') {
        return ''
      }
      if (word === '?') {
        return <motion.span key={index} variants={child} className='ml-5 mr-1' onAnimationComplete={() => { setTimeout(() => { setReady(true) }, 500) }}>?</motion.span>
      }
      return (
      <motion.span
        variants={child}
        style={{ marginRight: '5px' }}
        key={index}
        className={`${className} bg-yellow- m-5`}
      >
        {word}
      </motion.span>
      )
    })
  )
}
