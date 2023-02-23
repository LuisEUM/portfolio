import { motion } from "framer-motion";
import { useState } from "react";
import BlinkWordsChangers from "../ui/texts/blink-animation/blinkWordsChangersy";
import WordsAnimation from "../ui/texts/wordsAnimation";
import WordsChangers from "../ui/texts/wordsChangers";

const containerVariants = {
  initial: {
    width:'100vw',
    maxWidth:'100%'
  },
  animate: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};


const TextsLoader = ({ className}) => {
  const [safeRemove, setSafeRemove] = useState(false)
  const [blink, setBlink] = useState(false)

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={`flex bg-black ${blink && 'invert'} gap-4 items-center justify-center h-screen mx-auto overflow-hidden relative  ${className}`}
    >
        <div
        className="absolute h-screen w-3/4 bg-red- flex items-center"
              initial={{height:'100vh', width: '100vw', backgroundColor:'red'}}
              animate={{
                y:0, 
                transition:{
                  type: "spring",
                  duration: 2,
                  bounce: 0.25
                }
              }}
            >
          <div className=" items-center flex w-full">
          {!safeRemove && <BlinkWordsChangers words={[`Don't`, `blink`]} alternative setSafeRemove={setSafeRemove} setBlink={setBlink} blink={blink}/> }
          {safeRemove &&
            <div className="bg-slate- items-center flex w-full">
              <WordsAnimation text='Are you ready for Luis?' className=' text-6xl md:text-8xl lg:text-9xl font-black uppercase'  />
            </div>
          }
          </div>
        </div>
    </motion.div>
  );
};

export default TextsLoader;
