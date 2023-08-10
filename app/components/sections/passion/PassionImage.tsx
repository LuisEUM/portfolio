import { motion } from "framer-motion";
import Image from "next/image";
import PassionFloatingElements from "./PassionFloatingElements";

type PassionIMageProps = {
  srcBody?: string;
  srcHead?: string;
};

function PassionImage({ srcBody, srcHead }: PassionIMageProps) {
  return (
    <section className="order-1 overflow-x-hidden md:overflow-visible overflow-y-clip -mb-[ 5vw] md:mb-[0] pl-[8vw] md:pl-[0] md:order-2 col-start-1 col-end-5 md:col-start-6 md:col-end-9  lg:col-start-9  lg:col-end-12 items-center  -purple-500/10 flex pt-[4vw]  ">
      <div className="    aspect-square w-10/12 max-w-screen  md:absolute md:w-[40vw] md:h-[40vw]  lg:relative lg:left-[0] md:left-[50vw] z-10 lg:z-30 lg:h-[30vw] lg:w-[30vw] lg:-ml-[10vw] group -slate-700/30 relative ">
        <PassionFloatingElements />
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: "-15deg" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          className="clipped w-full h-full  bg-gradient-to-b from-primary to-green-800  group-hover:-rotate-90 flex items-center align-middle justify-center aspect-square z-40"
        >
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: "15deg" }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            width={2000}
            height={2000}
            src={
              srcBody
                ? srcBody
                : "/images/gousty-completo.gif"
            }
            alt="Luis "
            className="w-full h-full object-contain  group-hover:rotate-90 absolute cursor-none pointer-events-none"
          />
        </motion.div>
        <Image
          width={2000}
          height={2000}
          src={
            srcHead
              ? srcHead
              : "/images/gousty-completo.gif"
          }
          alt="Luis "
          className="w-full h-full object-contain absolute top-0 cursor-none pointer-events-none"
          priority
        />
        <svg className="svg absolute w-0 h-0 ">
          <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M0.623,0.028 C0.67,-0.02,0.752,0.001,0.77,0.067 L0.884,0.478 L0.997,0.89 C1,0.955,0.956,1,0.89,0.999 L0.067,0.785 C0.001,0.768,-0.022,0.686,0.026,0.637 L0.324,0.333 L0.623,0.028"></path>
          </clipPath>
        </svg>
      </div>
    </section>
  );
}

export default PassionImage;
