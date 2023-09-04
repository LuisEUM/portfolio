"use client"
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import Symbol from "../../svg/Symbol";

function HeroFloatingElements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1 * i,
        staggerDirection: -1,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 400,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 400,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
    >
      <motion.div
        variants={child}
        className="-right-[5vw] top-[35vw]  absolute md:-top-[3.5vw] md:right-[1.5vw] lg:-top-[4.5vw] lg:right-[3vw] z-30"
      >
        <div className="relative w-[12vw] h-[12vw] md:w-[4.5vw] md:h-[4.5vw] lg:w-[5vw] lg:h-[5vw] ">
          <Symbol
            className="stroke-primary w-full h-full"
            delay={0.5}
            type="triangle"
            size={1}
          />
        </div>
      </motion.div>
      <motion.div
        variants={child}
        className="hidden md:block absolute md:-right-[2vw] md:top-[2.5vw] lg:top-[0.5vw] lg:-right-[0.75vw]  z-30"
      >
        <div className="relative w-[3.75vw] h-[3.75vw] lg:w-[4.5vw] lg:h-[4.5vw] ">
          <Symbol
            className="stroke-zinc-700  w-full h-full"
            delay={0.25}
            type="square"
            size={0.8}
          />
        </div>
      </motion.div>
      <motion.div
        variants={child}
        className="hidden md:block absolute md:bottom-[12vw] md:-right-[2vw] lg:bottom-[20vw] lg:-right-[2vw]"
      >
        <div className="relative w-[2.75vw] h-[2.75vw] lg:w-[3.5vw] lg:h-[3.5vw] ">
          <Symbol
            className="stroke-zinc-700  w-full h-full"
            delay={1}
            type="x"
            size={1.2}
            reverse
          />
        </div>
      </motion.div>
      <motion.div
        variants={child}
        className="absolute bottom-[55vw] right-[0vw] md:bottom-[18vw] md:-right-[5vw] lg:bottom-[25vw] lg:-right-[7vw]  z-30"
      >
        <div className="relative w-[7vw] h-[7vw] md:w-[4vw] md:h-[4vw] lg:w-[4.5vw] lg:h-[4.5vw] ">
          <Symbol
            className="stroke-zinc-700  md:stroke-primary w-full h-full"
            delay={0}
            type="circle"
            size={1.25}
          />
        </div>
      </motion.div>
      <motion.div
        variants={child}
        className="absolute  bottom-[55vw] left-[8vw]  md:bottom-[21.5vw] md:-left-[2.5vw] lg:bottom-[17vw] lg:-left-[2.5vw] z-30"
      >
        <div className="relative w-[8vw] h-[8vw] md:w-[4.25vw] md:h-[4.25vw]  lg:w-[4.5vw] lg:h-[4.5vw] ">
          <Symbol
            className="stroke-primary w-full h-full "
            delay={0}
            type="x"
            size={1.25}
          />
        </div>
      </motion.div>
      <motion.div
        variants={child}
        className="hidden md:block absolute md:bottom-[20vw] md:left-[5.5vw] lg:bottom-[20vw] lg:left-[6vw] "
      >
        <div className="relative w-[1.75vw] h-[1.75vw] lg:w-[2.75vw] lg:h-[2.75vw] ">
          <Symbol
            className="stroke-zinc-900 w-full h-full"
            delay={1}
            type="circle"
            size={1.5}
          />
        </div>
      </motion.div>
      <motion.div
        variants={child}
        className=" md:block absolute -left-[5vw] top-[30vw] md:-top-[2.5vw] md:left-[5vw] lg:-top-[2.5vw] lg:left-[5vw] z-30"
      >
        <div className="relative w-[9vw] h-[9vw] md:w-[4vw] md:h-[4vw] lg:w-[4.5vw] lg:h-[4.5vw] ">
          <Symbol
            className="stroke-zinc-700 md:stroke-primary  w-full h-full"
            delay={0.75}
            type="square"
            size={1.2}
            reverse
          />
        </div>
      </motion.div>

      <motion.div
        variants={child}
        className="hidden md:block absolute md:top-[2vw] md:left-[9vw] lg:top-[2vw] lg:left-[9vw] -z-40"
      >
        <div className="relative w-[3vw] h-[3vw] lg:w-[3.75vw] lg:h-[3.75vw] ">
          <Symbol
            className="stroke-zinc-900 w-full h-full"
            delay={1.5}
            type="triangle"
            size={1}
            reverse
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HeroFloatingElements;

{
  /* <AnimatePresence mode="wait">
        {!clicked && (
          <motion.div
            className=" md:block absolute  md:bottom-36 md:-left-16 lg:bottom-4 lg:-left-20 z-30"
            exit={{ opacity: 0, left: "-60vw" }}
            transition={{ type: "spring", duration: 1.25 }}
          >
            <div
              className="relative w-[4.5vw] h-[4.5vw]"
              onClick={() => {
                setClicked(true);
              }}
            >
              <Symbol
                className="stroke-primary w-[10vw] h-[10vw] md:w-full md:h-full "
                delay={0}
                type="x"
                size={1.25}
              />
            </div>
            <div className="absolute right-8 top-1/2  translate-y-1/2 w-[50vw] -mt-1 border-dashed  border-2 border-zinc-700 -z-10 hidden lg:block" />
          </motion.div>
        )}
      </AnimatePresence> */
}
