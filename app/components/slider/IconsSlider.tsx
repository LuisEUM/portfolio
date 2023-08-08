"use client";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";

type IconsSliderProps = {
  children?: React.ReactNode;
  velocity?: number;
  reverse?: boolean;
};

function IconsSlider({ children, velocity, reverse }: IconsSliderProps) {
  const sliderContentRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderContentWidth, setSliderContentWidth] = useState(0);

  useLayoutEffect(() => {
    const sliderContentElement = sliderContentRef.current;
    const sliderElement = sliderContentElement.parentNode;
    const handleResize = () => {
      setSliderWidth(sliderElement.offsetWidth);
      setSliderContentWidth(sliderContentElement.offsetWidth);
    };

    handleResize(); // Set initial sizes
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sliderContentElement = sliderContentRef.current;
    const interval = setInterval(() => {
      if (sliderContentWidth > sliderWidth) {
        sliderContentElement.style.transform = `translateX(-${sliderContentWidth}px)`;
        sliderContentElement.style.transition = "none";

        setTimeout(() => {
          sliderContentElement.style.transform = "translateX(0px)";
          sliderContentElement.style.transition = "30s linear";
        }, 100);
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [sliderContentWidth, sliderWidth]);

  let content = children ? children : "UX/UI - ";

  return (
    <motion.div
      className="whitespace-nowrap  w-full text flex justify-start items-center "
      ref={sliderContentRef}
      animate={{
        translateX: [
          reverse ? -sliderContentWidth : 0,
          reverse ? 0 : -sliderContentWidth,
        ],
      }}
      transition={{
        ease: "easeInOut",
        duration: velocity ? velocity : 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {new Array(2).fill(0).map((_, i) => content)}
    </motion.div>
  );
}

export default IconsSlider;
