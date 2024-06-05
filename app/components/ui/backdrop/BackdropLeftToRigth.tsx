import { AnimatePresence, motion } from "framer-motion";

// always remember to make stop the propagation inside the childrens, add the next code to the main container onClick={(e) => e.stopPropagation()}

const BackdropLeftToRigth = ({ children, onClick }) => {
  const dropLeft = {
    closed: {
      x: "100vw",
      opacity: 0,
    },
    open: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };

  const fadeIn = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };

  const sidebar = {
    open: {
      clipPath: "inset(0 0 0 0%)",
      transition: {
        type: "spring",
        stiffness: 40,
        restDelta: 1,
        duration: 5,
        when: "beforeChildren",
      },
    },
    closed: {
      clipPath: "inset(0 0 0 100%)",
      transition: {
        type: "spring",
        stiffness: 40,
        restDelta: 1,
        duration: 5,
        when: "afterChildren",
      },
    },
  };

  const sidebar2 = {
    open: {
      clipPath: "inset(0 0 0 0%)",
      x: "0vw",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 0.8,
        when: "beforeChildren",
      },
    },
    closed: {
      clipPath: "inset(0 0 0 100%)",
      x: "100vw",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 0.8,
        when: "afterChildren",
      },
    },
  };

  const handleModalClose = () => {
    onClick();
  };

  return (
    <>
      <motion.div
        onClick={handleModalClose}
        className="z-30 fixed top-0 left-0 h-[100dvh] w-full bg-zinc-950/80 "
        variants={fadeIn}
        initial="closed"
        animate="open"
        exit="closed"
      ></motion.div>
      <motion.div
        onClick={handleModalClose}
        className="z-50 fixed top-0 left-0 h-[100dvh] w-full   flex items-center justify-center"
        variants={sidebar2}
        initial="closed"
        animate="open"
        exit="closed"
      >
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={handleModalClose}
        >
          {children}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default BackdropLeftToRigth;
