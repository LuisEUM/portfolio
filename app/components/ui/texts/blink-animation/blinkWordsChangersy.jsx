"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlinkWordsAnimation from "./blinkWordsAnimation";

export default function BlinkWordsChangers({
  words,
  setSafeRemove,
  setBlink,
  blink,
}) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  const currentWord = words[index];

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 1000);

    if (index === words.length - 1) {
      clearInterval(i);
    }

    return () => {
      clearInterval(i);
    };
  }, [words, index]);

  const variants = {
    initial: {
      opacity: 0,
      scale: 5,
    },
    enter: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      position: "absolute",
      opacity: 0,
      scale: 0,
    },
  };

  const afterTheEndOfAnimation = (
    blink,
    setBlink,
    setSafeRemove,
    setCount,
    count
  ) => {
    if (count === 0) {
      setTimeout(() => {
        setBlink(!blink);
      }, 1000);

      setTimeout(() => {
        setBlink(!blink);
      }, 1100);

      setTimeout(() => {
        setSafeRemove(true);
        setBlink(false);
      }, 1300);
    }
  };

  return (
    <>
      <motion.span
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{
          duration: 3,
          type: "spring",
          stiffness: 300,
          damping: 24,
        }}
        className="uppercase items-center bg- h-[100dvh] w-full invite-place text-6xl md:text-8xl lg:text-9xl inline-block relative  overflow-hidden min-h-[60px] text-center "
      >
        <motion.strong
          className="invite-place bg-red- h-[100dvh] items-center text-6xl md:text-8xl lg:text-9xl font-main_bold inline-block relative w-[max-content] self-baseline mt-2 px-2"
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          key={currentWord}
          transition={{
            duration: 2,
            type: "spring",
            stiffness: 500,
            damping: 80,
          }}
          onAnimationComplete={() => {
            afterTheEndOfAnimation(
              blink,
              setBlink,
              setSafeRemove,
              setCount,
              count
            );
            setCount((count) => count + 1);
          }}
        >
          <BlinkWordsAnimation text={currentWord} />
        </motion.strong>
      </motion.span>
    </>
  );
}
