"use client";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";

type IconsSliderProps = {
  children?: React.ReactNode;
  velocity?: number;
  reverse?: boolean;
};

function TextSlider({ children, velocity, reverse }: IconsSliderProps) {
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
    <>
      <div className="w-full -rotate-90 origin-top-right absolute -left-48 top-0 pointer-events-none">
        <motion.div
          className="whitespace-nowrap z-100 w-[100dvh] text flex "
          ref={sliderContentRef}
          animate={{
            translateX: [
              reverse ? -sliderContentWidth : 0,
              reverse ? 0 : -sliderContentWidth * 2,
            ],
          }}
          transition={{
            type: "linear",
            duration: velocity ? velocity : 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <p className="text-zinc-800 text-opacity-40 text-[135px] font-black">
            {new Array(50).fill(0).map((_, i) => content)}
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default TextSlider;
