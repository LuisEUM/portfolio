import { motion } from 'framer-motion'

export default function LettersAnimation ({ text, tag, className, children, keyText }) {
  const words = text.split(' ')
  keyText = keyText || text

  if (tag === 'h1') {
    return (
      <h1
        className={`${className}`}
        key={keyText}
      >
        <Item words={words} className={className}>
          {children}
        </Item>
      </h1>
    )
  } else if (tag === 'h2') {
    return (
      <h2
        className={`${className}`}
        key={keyText}
      >
        <Item words={words} className={className}>
          {children}
        </Item>
      </h2>
    )
  } else if (tag === 'h3') {
    return (
      <h3
        className={`${className}`}
        key={keyText}
      >
        <Item words={words} className={className}>
          {children}
        </Item>
      </h3>
    )
  } else if (tag === 'h4') {
    return (
      <h4
        className={`${className}`}
        key={keyText}
      >
        <Item words={words} className={className}>
          {children}
        </Item>
      </h4>
    )
  } else if (tag === 'h5') {
    return (
      <h5
        className={`${className}`}
        key={keyText}
      >
        <Item words={words} className={className}>
          {children}
        </Item>
      </h5>
    )
  } else if (tag === 'h6') {
    return (
      <h6
        className={`${className}`}
        key={keyText}
      >
        <Item words={words} className={className}>
          {children}
        </Item>
      </h6>
    )
  } else {
    return (
      <p
        className={`${className}`}
        key={keyText}
      >
        <Item words={words} className={className}>
          {children}
        </Item>
      </p>
    )
  }
}

function Item ({ words, className, children }) {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 * i }
    })
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <>
      <motion.span variants={container} initial='hidden' animate='visible'>
        {words.map((word, index) => {
          if (word === '<br/>') {
            return <br key={index} />
          }
          if (word === '<span>') {
            return <motion.span key={index} variants={child} className='text-tangle-cyan-process'>{words[index + 1]}</motion.span>
          }
          if (words[index - 1] === '<span>') {
            return ''
          }
          if (word === '</span>') {
            return ''
          }
          if (word === '<em>') {
            return <motion.em key={index} variants={child}>{words[index + 1]}</motion.em>
          }
          if (words[index - 1] === '<em>') {
            return ''
          }
          if (word === '</em>') {
            return ''
          }
          return (
            <motion.span
              key={index}
              className={`${className} inline-flex mr-1 last:mr-0`}
            >
              {word.split('').map((letter, i) => (
                <motion.span
                  variants={child}
                  key={i}
                  className='last:mr-0'
                >
                  {letter}
                </motion.span>
              ))}
              {'\u00A0'}
            </motion.span>
          )
        })}
      </motion.span>
      {children}
    </>
  )
}
