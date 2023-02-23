import { motion } from "framer-motion";
import { useState } from "react";
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

const dotVariants = {
  initial: {
    y:0 
  },
  animate: {
    y: [20, -20, 20],
    opacity: [1, 0.1, 1],
    backgroundColor: ["#00BB31", "#125D26", "#125D26", "#125D26", "#00BB31"],
    transition: {
      type: "spring",
      duration: 2,
      damping: 300,
      bounce: 0.25,
      mass: 0.5,
      stiffness: 50,
      restDelta: 0.5,
      repeat: Infinity,
      velocity: 2
    }
  }
};

const DotsLoader = ({ count = 5, className, setLoading}) => {
  const [safeRemove, setSafeRemove] = useState(false)
  const [blink, setBlink] = useState(false)

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={`flex bg-black ${blink && 'invert'} gap-4 items-center justify-center h-screen mx-auto overflow-hidden relative  ${className}`}
    >
      {/* {Array(count)
        .fill(null)
        .map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={dotVariants}
              style={{
                height: 20,
                width: 20,
                // backgroundColor: colors[index % colors.length],
                borderRadius: 20
              }}
            />
          );
        })} */}
        {/* <motion.div
          className="absolute"
          initial={{opacity: 1,height:'0vh', width:'0vw', borderRadius: 999999, backgroundColor:'#0D0D0D'}}
          animate={{
            opacity:1, 
            height:'450vw',
            width: '450vw',
            transition:{
              type: "spring",
              duration: 1,
              delay: 2,
              bounce: 0.25
            }
          }}
        /> */}
        {/* <motion.div
              className="absolute"
              initial={{y: '100vh',height:20, width: 20, borderRadius: 20, backgroundColor:'#0D0D0D'}}
              animate={{
                y:0, 
                transition:{
                  type: "spring",
                  duration: 2,
                  bounce: 0.25
                }
              }}
              // onAnimationComplete={() => { setTimeout(()=>{setLoading(false)}, 2000) }}
            /> */}

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
          {!safeRemove && <WordsChangers words={[`Don't`, `blink`]} alternative setSafeRemove={setSafeRemove} setBlink={setBlink} blink={blink}/> }
          {/* {safeRemove &&
            <div className="bg-slate- items-center flex w-full">
              <WordsChangers words={['Are', 'you', 'ready', 'for', 'Luis?']} />
            </div>
          } */}
          </div>
          {/* <WordsAnimation text={`don't blink`} className="text-center font-black text-9xl uppercase justify-center"/> */}
          {/* <div className="bg-slate- items-center flex w-full">
            <WordsChangers words={['Are', 'you', 'ready', 'for', 'Luis?']} />
          </div> */}
          {/* <div className="flex flex-wrap max-w-md bg-orange-900">
            <span className="bg-blue-500 text-white px-2 py-1 rounded mr-2 mb-2 w-">Span 1</span>
            <span className="bg-green-500 text-white px-2 py-1 rounded mr-2 mb-2">Span 2</span>
            <span className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 mb-2">Span 3</span>
            <span className="bg-red-500 text-white px-2 py-1 rounded mr-2 mb-2">Span 4</span>
            <span className="bg-indigo-500 text-white px-2 py-1 rounded mr-2 mb-2">Span 5</span>
            <span className="bg-pink-500 text-white px-2 py-1 rounded mr-2 mb-2">Span 6</span>
          </div> */}
        </div>


        {/* <header className="p-4 bg-[#121212] ">
          <div className="container flex justify-between h-16 mx-auto">
            <Link rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-violet-400">
                <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
              </svg>
            </Link>
            <div className="flex justify-between">
              <ul className="items-stretch hidden space-x-3 lg:flex">
                <li className="flex">
                  <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-violet-400">Link</a>
                </li>
                <li className="flex">
                  <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-violet-400">Link</a>
                </li>
                <li className="flex">
                  <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-violet-400">Link</a>
                </li>
                <li className="flex">
                  <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-violet-400">Link</a>
                </li>
              </ul>
              <div className="items-center flex-shrink-0 hidden lg:flex">
                <button className="self-center px-8 py-3 rounded hover:text-violet-400">Sign in</button>
                <button className="self-center px-8 py-3 font-semibold rounded bg-violet-400  text-gray-900">Sign up</button>
              </div>
            </div>

            <button className="p-4 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </header> */}
    </motion.div>
  );
};

export default DotsLoader;
