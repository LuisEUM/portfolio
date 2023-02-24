import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import BlinkWordsChangers from '../ui/texts/blink-animation/blinkWordsChangersy'
import WordsAnimation from '../ui/texts/wordsAnimation'

const containerVariants = {
  initial: {
    width: '100vw',
    maxWidth: '100%'
  },
  animate: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
}

const TextsLoader = ({ className }) => {
  const [safeRemove, setSafeRemove] = useState(false)
  const [blink, setBlink] = useState(false)
  const [ready, setReady] = useState(false)

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={`flex bg-zinc-900 ${blink && 'invert'} gap-4 items-center justify-center h-screen mx-auto overflow-hidden relative  ${className}`}
    >
        <div
          className="absolute h-screen w-3/4 bg-red- flex items-center"
        >
          {!safeRemove &&
            <BlinkWordsChangers
              words={['Don\'t', 'blink']}
              alternative
              setSafeRemove={setSafeRemove}
              setBlink={setBlink}
              blink={blink}
            />
          }
          <AnimatePresence
            initial={false}
            mode='wait'
            onExitComplete={() => null}
          >
            {safeRemove && !ready &&
              <motion.div
                className=" items-center flex w-full"
                exit={{
                  y: '-100vh',
                  opacity: 0
                }}
                transition={{
                  type: 'spring',
                  damping: 12,
                  stiffness: 150
                }}
              >
                <div className="bg-slate- items-center flex w-full">
                  <WordsAnimation text='Are you ready for <span> Luis </span> ?' className=' text-6xl md:text-8xl lg:text-9xl font-black uppercase' setReady={setReady}/>
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </div>
        {ready && <p> Hola Luis</p>}
    </motion.div>
  )
}

export default TextsLoader
