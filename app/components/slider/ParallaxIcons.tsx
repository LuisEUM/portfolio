'use client'
import {
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
  motion,
} from "framer-motion";
import React, { useRef } from "react";

type ParallaxIconProps = {
  children: React.ReactNode;
  baseVelocity: number;
  enableDirectionChange?: boolean; // Nueva prop para activar/desactivar el cambio de dirección
};

function ParallaxIcon({
  children,
  baseVelocity = 100,
  enableDirectionChange = true,
}: ParallaxIconProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-0, -25, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (enableDirectionChange) {
      /**
       * This is what changes the direction of the scroll once we
       * switch scrolling directions.
       */
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
    }

    moveBy +=
      directionFactor.current *
      moveBy *
      (enableDirectionChange ? velocityFactor.get() : 1);

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap  ">
      <motion.div
        className="flex flex-nowrap whitespace-nowrap "
        style={{
          x,
        }}
      >
        <span className="block px-4">{children} </span>
        <span className="block px-4">{children} </span>
        <span className="block px-4">{children} </span>
        <span className="block px-4">{children} </span>
      </motion.div>
    </div>
  );
}

export default ParallaxIcon;
