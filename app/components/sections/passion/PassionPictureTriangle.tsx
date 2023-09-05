"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import headPicture from "@/public/images/gousty-completo.gif";
import Link from "next/link";

type PassionPictureTriangleProps = {
  srcBody?: string;
  srcHead?: string;
  artboardName?: string;
};

function PassionPictureTriangle({
  srcBody,
  srcHead,
  artboardName,
}: PassionPictureTriangleProps) {
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
      />
      <div className="w-full h-full max-w-full max-h-full aspect-square mx-auto absolute -top-10 object-contain left-[2vw]">
        <Image
          fill
          src={headPicture}
          alt="Luis "
          sizes="contain"
          className="w-full h-full object-contain absolute top-0 cursor-none pointer-events-none"
        />
        <Link href={"https://alkitu.com/gousty"} target="_blank">
          <button
            style={{
              boxShadow:
                "0px 0px 20px 0px #6b21a8"
            }}
            className="flex justify-center items-center px-[4vw] py-[1vw] lg:px-[2vw] lg:py-[0.5vw]  absolute -bottom-10   bg-gradient-to-r from-primary via-zinc-800 to-purple-800 rounded-[33px] left-1/2 -translate-x-1/2   border-[1.5vw] md:border-[1vw] lg:border-[0.75vw] border-black uppercase font-black self-center text-center md:self-start md:text-start text-[6vw]  md:text-[2.8vw]  lg:text-[2.5vw] whitespace-nowrap"
          >
            Play Game
          </button>
        </Link>
      </div>

      <svg className="svg absolute w-0 h-0 ">
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0.623,0.028 C0.67,-0.02,0.752,0.001,0.77,0.067 L0.884,0.478 L0.997,0.89 C1,0.955,0.956,1,0.89,0.999 L0.067,0.785 C0.001,0.768,-0.022,0.686,0.026,0.637 L0.324,0.333 L0.623,0.028"></path>
        </clipPath>
      </svg>
    </>
  );
}

export default PassionPictureTriangle;
