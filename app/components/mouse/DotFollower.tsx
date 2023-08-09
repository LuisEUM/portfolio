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
            className="h-[15vw] w-[15vw] rounded-full z-40   bg-primary  absolute -top-[7.5vw] -left-[7.5vw] mix-blend-overlay  "
            initial={{
              x: mousePosition.x,
              y: mousePosition.y,
              height: 0,
              width: 0,
              opacity: 0,
            }}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              height: '15vw',
              width: '15vw',
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring" }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
