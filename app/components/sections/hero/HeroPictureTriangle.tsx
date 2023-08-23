"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import headPicture from "@/public/images/cabeza.webp";
import bodyPicture from "@/public/images/cuerpo-completo.webp";

type HeroPictureTriangleProps = {
  srcBody?: string;
  srcHead?: string;
};

function HeroPictureTriangle({ srcBody, srcHead }: HeroPictureTriangleProps) {
  return (
    <>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: "-15deg" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "cover",
          WebkitClipPath: "url(#my-clip-path)",
          clipPath: "url(#my-clip-path)",
        }}
        className="w-full h-full  bg-gradient-to-b from-primary to-green-800  group-hover:-rotate-90 flex items-center align-middle justify-center aspect-square z-40"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: "15deg" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          className="w-full h-full object-contain  group-hover:rotate-90 absolute cursor-none pointer-events-none"
        >
          <Image
            fill
            src={srcBody ? srcBody : bodyPicture}
            alt="Luis"
            className="w-full h-full object-contain  cursor-none pointer-events-none"
            priority
          />
        </motion.div>
      </motion.div>
      <Image
        fill
        src={srcHead ? srcHead : headPicture}
        alt="Luis "
        className="w-full h-full object-contain absolute top-0 cursor-none pointer-events-none"
        priority
      />
      <svg className="svg absolute w-0 h-0 ">
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0.623,0.028 C0.67,-0.02,0.752,0.001,0.77,0.067 L0.884,0.478 L0.997,0.89 C1,0.955,0.956,1,0.89,0.999 L0.067,0.785 C0.001,0.768,-0.022,0.686,0.026,0.637 L0.324,0.333 L0.623,0.028"></path>
        </clipPath>
      </svg>
    </>
  );
}

export default HeroPictureTriangle;
