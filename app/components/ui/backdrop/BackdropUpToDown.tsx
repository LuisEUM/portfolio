import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// always remember to make stop the propagation inside the childrens, add the next code to the main container onClick={(e) => e.stopPropagation()}

const BackdropUpToDown = ({ children, onClick }) => {
  const dropIn = {
    open: {
      y: "0vh",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
        when: "beforeChildren",
      },
    },
    closed: {
      y: "-100vh",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
        when: "afterChildren",
      },
    },
  };

  const fadeIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const handleModalClose = () => {
    onClick();
  };

  return (
    <>
      <motion.div
        onClick={handleModalClose}
        className="z-30 fixed top-0 left-0 h-screen w-full bg-zinc-950/80 "
        variants={fadeIn}
        initial="closed"
        animate="open"
        exit="closed"
      ></motion.div>
      <motion.div
        onClick={handleModalClose}
        className="z-50 fixed top-0 left-0 h-screen w-full  flex items-center justify-center"
        variants={dropIn}
        initial="closed"
        animate="open"
        exit="closed"
      >
        <AnimatePresence
          initial={false}
          mode="sync"
          onExitComplete={handleModalClose}
        >
          {children}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default BackdropUpToDown;
