"use client";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

function DotFollower() {
  return (
    <div className=" ">
      <motion.div className="h-[3vw] absolute top-0 w-full bg-gradient-to-b from-[#0F0F0F] to-transparent  pointer-events-none mix-blend-luminosity" />

      <Box />
      <motion.div className="h-[3vw] absolute bottom-0 w-full bg-gradient-to-b from-transparent to-[#0F0F0F]  pointer-events-none mix-blend-luminosity" />
    </div>
  );
}

export default DotFollower;

function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;
  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}
const Box = () => {
  // const ref = useRef(null);
  // const { x, y } = useFollowPointer(ref);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    centerX: 0,
    centerY: 0,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const boxRef = useRef(null);

  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  return (
    <motion.div
      className="w-full h-full   mix-blend-overlay hidden items-center  lg:flex justify-center absolute top-0 left-0 bottom-0 -right-0 m-0 p-0 z-40"
      ref={boxRef}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="h-[15vw] w-[15vw] rounded-full z-40   bg-primary  absolute hover:p-[7.5vw]  mix-blend-overlay  "
            initial={{
              x: mousePosition.x,
              y: mousePosition.y,
              height: "0vw",
              width: "0vw",
              opacity: 1,
              top: "-0vw",
              left: "-0vw",
              padding: "0vw",
            }}
            whileHover={{
              padding: "7.5vw",
              height: "7.5vw",
              width: "7.5vw",
              opacity: 1,
              top: "-7.5vw",
              left: "-7.5vw",
            }}
            whileTap={{
              padding: "7vw",
              height: "7vw",
              width: "7vw",
              opacity: 1,
              top: "-7vw",
              left: "-7vw",
              filter: "brightness(1.5)",
            }}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              padding: isComplete ? "7.5vw" : "0vw",
              height: isComplete ? "7.5vw" : "3.75vw",
              width: isComplete ? "7.5vw" : "3.75vw",
              opacity: 1,
              top: isComplete ? "7.5vw" : "-1.875vw",
              left: isComplete ? "7.5vw" : "-1.875vw",
            }}
            exit={{
              opacity: 0,
              height: 0,
              width: 0,
              top: "-0vw",
              left: "-0vw",
              padding: "0vw",
            }}
            transition={{ type: "spring" }}
            onAnimationComplete={() => setIsComplete(true)}
            onAnimationStart={() => setIsComplete(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
