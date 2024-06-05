import { AnimatePresence, motion } from "framer-motion";

// always remember to make stop the propagation inside the childrens, add the next code to the main container onClick={(e) => e.stopPropagation()}

const BackdropUpToDown = ({ children, onClick }) => {
  const dropIn = {
    open: {
      y: "0vh",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
        when: "beforeChildren",
      },
    },
    closed: {
      y: "-100dvh",
      opacity: 0,
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
      y: "-100dvh",
    },
  };

  return (
    <>
      <motion.div
        onClick={onClick}
        className="z-30 fixed top-0 left-0 h-[100dvh] w-full bg-zinc-950/80 "
        variants={fadeIn}
        initial="closed"
        animate="open"
        exit="closed"
      ></motion.div>
      <motion.div
        onClick={onClick}
        className="z-50 fixed top-0 left-0 h-[100dvh] w-full  flex items-center justify-center"
        variants={dropIn}
        initial="closed"
        animate="open"
        exit="closed"
      >
        <AnimatePresence initial={false} mode="wait" onExitComplete={onClick}>
          {children}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default BackdropUpToDown;
