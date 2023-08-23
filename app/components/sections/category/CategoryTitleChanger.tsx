'use client'
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

function CategoryTitleChanger({ name, subtitle }) {
  const variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    enter: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  };

  return (
    <h2
      className="xl:text-[3.vw] 2xl:text-[3vw] text-start text-[7vw] leading-[8vw] md:text-[4.8vw] md:leading-[4.8vw] lg:text-[3vw] lg:leading-[3vw] font-black"
      key={name}
    >
      {subtitle}
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
        className="text-center inline-block relative self-baseline"
      >
        <AnimatePresence
          initial={false}
          onExitComplete={() => null}
          mode="wait"
        >
          <motion.em
            key={name}
            className="inline-block relative w-[max-content] self-baseline mt-2 mr-2 font-black text-primary "
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
          >
            {name}
          </motion.em>
        </AnimatePresence>
      </motion.span>
    </h2>
  );
}

export default CategoryTitleChanger;
