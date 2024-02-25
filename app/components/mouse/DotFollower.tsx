"use client";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMousePosition from "@/app/hooks/useMousePosition";

function DotFollower() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = 400;
  const [isComplete, setIsComplete] = useState(false);

  const maskStyle = {
    WebkitMaskImage: "url('../../public/mask.svg')",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
    WebkitMaskSize: `${size}px`,
    background: "#ec4e39", // Este color se puede ajustar usando clases de Tailwind si es estático
  };

  return (
    <div className=" ">
      <motion.div className="h-[3vw] absolute top-0 w-full bg-gradient-to-b from-[#0F0F0F] to-transparent  pointer-events-none mix-blend-luminosity" />
      {/* <main className="">
        <motion.div
          className="rounded-full z-40   bg-primary  absolute  mix-blend-overlay  "
          style={{
            width: size,
            height: size,
            x: x - size / 2,
            y: y - size / 2,
            padding: "200px",
          }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          initial={{
            x: x,
            y: y,
            height: "0vw",
            opacity: 1,
            top: "-0vw",
            left: "-0vw",
            padding: size,
          }}

          whileTap={{
            opacity: 1,
            scale: 1.1,
            filter: "brightness(1.5)",
          }}
          animate={{
            x: x - (size/2) ,
            y: y - size ,
            padding: size/2,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            height: 0,
            width: 0,
            x: 0,
            y: 0,
            padding: "0vw",
          }}
          // onAnimationComplete={() => setIsComplete(true)}
          // onAnimationStart={() => setIsComplete(false)}
        />
      </main> */}
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
            className="h-[15vw] w-[15vw] rounded-full z-40   bg-primary  absolute  mix-blend-overlay  "
            initial={{
              x: mousePosition.x,
              y: mousePosition.y,
              height: "0vw",
              width: "0vw",
              opacity: 1,
              scale: 0,
              padding: "0vw",
              top: "-7.5vw",
              left: "-7.5vw",
            }}
            whileHover={{
              scale: 2,
              opacity: 1,
            }}
            whileTap={{
              opacity: 1,
              scale: 1.8,
              filter: "brightness(1.5)",
            }}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              padding: "3.75vw",
              scale: isComplete ? 0.8 : 0.4,
              opacity: 1,
              top: "-3.75vw",
              left: "-3.75vw",
            }}
            exit={{
              opacity: 0,
              height: 0,
              width: 0,
              top: "-0vw",
              left: "-0vw",
              padding: "0vw",
            }}
            onAnimationComplete={() => setIsComplete(true)}
            onAnimationStart={() => setIsComplete(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
