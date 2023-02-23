'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import WordsAnimation from './wordsAnimation'


export default function WordsChangers({ words, alternative, setSafeRemove, setBlink, blink}) {
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)

  const currentWord = words[index]

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, alternative ? 1000 : 2000)

    if(index === words.length - 1) {
      clearInterval(i)
    }

    return () => {
      clearInterval(i)
    }
  }, [words, index])

  console.log(index, words.length)

  const variants = {
    initial: {
      opacity: 0,
      scale: 5
    },
    enter: {
      opacity: 1,
      scale: 1
    },
    exit: {
      position: 'absolute',
      opacity: 0,
      scale: 0
    }
  }


  const afterTheEndOfAnimation = (blink, setBlink, setSafeRemove, setCount, count) => {
      // const interval = setInterval(()=>{
      //   if (count <= 4 )
      //   { 
      //     setBlink(!blink), 
      //     setCount(count => count + 1)}
      //   },
      //   console.log(count, ' another counter') 

      //   , 200)
      console.log(count, 'counter Inside') 

      if(count === 1){
        setTimeout(()=>{
          setBlink(!blink)
          console.log('First timeOut')
        }, 200)
  
        setTimeout(()=>{
          setBlink(!blink)
          console.log('Second timeOut')
        }, 400)

        setTimeout(()=>{
          // clearInterval(interval),
          setSafeRemove(true),
          setBlink(false),
          console.log('Third timeOut')
  
        }, 600)
      }



  }

  console.log(count, 'counter') 

  return (
    <>
      <motion.span
        variants={variants}
        initial='initial'
        animate='enter'
        exit='exit'
        transition={{
          duration: 3,
          type: 'spring',
          stiffness: 300,
          damping: 24
        }}
        className='uppercase items-center bg- h-screen w-full invite-place text-6xl md:text-8xl lg:text-9xl inline-block relative  overflow-hidden min-h-[60px] text-center '
      >
        <motion.strong
          className='invite-place bg-red- h-screen items-center text-6xl md:text-8xl lg:text-9xl font-main_bold inline-block relative w-[max-content] self-baseline mt-2 px-2'
          variants={variants}
          initial='initial'
          animate='enter'
          exit='exit'
          key={currentWord}
          transition={{
            duration: 2,
            type: 'spring',
            stiffness: 500,
            damping: 80
          }}
          onAnimationComplete={() => {}}
        >
          <WordsAnimation text={currentWord} />
        </motion.strong> 
        {/* <span className='text-6xl md:text-8xl lg:text-9xl text-black header-invite self-baseline font-main_outline'>?</span> */}
      </motion.span>
    </>
)
}

