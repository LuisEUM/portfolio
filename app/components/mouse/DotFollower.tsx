"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

function DotFollower() {
  return (
    <div className="hidden flex-col justify-center items-center w-full  absolute top-0 h-full z-40  mix-blend-overlay overflow-hidden-x lg:flex">
      <Box />
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
      className="w-full h-full relative mix-blend-overlay"
      ref={boxRef}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`absolute w-[15vw] h-[15vw] bg-white  -m-[7.5vw] rounded-full z-40 ${
          isHovered ? "opacity-100" : "opacity-0"
        } hover:mix-blend-overlay`}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring" }}
      />
    </motion.div>
  );
};
