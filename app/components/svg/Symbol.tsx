"use client";
import { motion } from "framer-motion";

type Symbol_Props = {
  delay: number;
  type: "x" | "circle" | "triangle" | "square";
  className: string;
  size: number;
  reverse?: boolean;
};

function Symbol({
  delay = 0,
  type = "x",
  reverse = false,
  className,
  size = 1,
}: Symbol_Props) {
  return (
    <>
      <motion.div
        className="bg-red- flex items-center justify-center relative cursor-pointer "
        initial={{ scale: size }} // Escala inicial del motion.div
        whileHover={{ scale: size * 1.2, opacity: 0.5 }} // Escala cuando el cursor está sobre el contenedor
        whileTap={{ scale: size * 0.8, opacity: 0.25 }} // Escala cuando se hace clic en el contenedor
      >
        {type === "x" && (
          <motion.svg
            initial={{ rotate: 0 }}
            animate={{ rotate: reverse ? [0, -90, -90, 0] : [0, 90, 90, 0] }}
            transition={{
              duration: 4,
              times: [0, 0.1, 0.76, 1],
              ease: ["easeInOut", "easeInOut", "easeInOut"],
              repeat: Infinity,
              repeatType: "reverse",
              delay: delay,
            }}
            width="57"
            height="57"
            viewBox="0 0 57 57"
            className={`  ${
              className ? className : "stroke-primary w-full h-full "
            } fill-none `}
          >
            <path
              d="M10.9351 11.0649L45.9351 46.0649M45.9351 11.0649L10.9351 46.0649"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </motion.svg>
        )}
        {type === "circle" && (
          <>
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: reverse ? [1.15, 0.9] : [0.9, 1.15] }}
              transition={{
                duration: 5,
                type: "spring",
                damping: 5,
                stiffness: 300,
                restDelta: 0.5,
                delay: delay,
                repeat: Infinity,
              }}
              className={` w-full h-full ${
                className ? className : "stroke-primary  w-full h-full"
              } fill-none`}
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="61"
              viewBox="0 0 61 61"
            >
              <circle cx="30.5" cy="30.5" r="21" stroke-width="5" />
            </motion.svg>
          </>
        )}
        {type === "square" && (
          <>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="68"
              viewBox="0 0 68 68"
              initial={{ rotate: 0 }}
              animate={{ rotate: reverse ? [0, -360] : [0, 360] }}
              transition={{
                duration: 10,
                times: [0, 1],
                ease: ["linear"],
                repeat: Infinity,
                delay: delay,
              }}
              className={`  ${
                className ? className : "stroke-primary w-full h-full "
              } fill-none`}
            >
              <rect
                x="8.59117"
                y="24.2557"
                width="38"
                height="38"
                transform="rotate(-24.1633 8.59117 24.2557)"
                stroke-width="5"
              />
            </motion.svg>
          </>
        )}
        {type === "triangle" && (
          <motion.svg
            initial={{ rotate: 0 }}
            animate={{
              rotate: reverse ? [90, 0] : [0, 90],
              y: reverse ? [0, 20] : [20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: delay,
              repeatType: "reverse",
            }}
            width="71"
            height="71"
            viewBox="0 0 71 71"
            className={` ${
              className ? className : "stroke-primary w-full h-full"
            } fill-none`}
          >
            <path
              d="M9.28529 50.75L35.5002 5.0263L61.7151 50.75L9.28529 50.75Z"
              stroke-width="5"
            />
          </motion.svg>
        )}
      </motion.div>
    </>
  );
}

export default Symbol;
