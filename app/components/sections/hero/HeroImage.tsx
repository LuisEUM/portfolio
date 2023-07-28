import { motion } from "framer-motion";
import Image from "next/image";
import Symbol from "../../svg/Symbol";

function HeroImage() {
  return (
    <section className="col-start-8  col-end-13 items-center  -purple-500/10 flex ">
      <div className="w-[40vw] h-[40vw] -ml-[10vw] group -slate-700/30 relative ">
        <div className="absolute -top-20 right-24 z-50">
          <div className="relative w-50 h-50">
            <Symbol
              className="stroke-primary"
              delay={0}
              type="triangle"
              size={1}
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 z-50">
          <div className="relative w-full h-full  flex flex-col items-center justify-center">
            <Symbol
              className="stroke-zinc-700"
              delay={0}
              type="square"
              size={0.8}
            />
          </div>
        </div>
        <div className="absolute bottom-64 right-0">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <Symbol
              className="stroke-zinc-700"
              delay={0}
              type="square"
              size={1.2}
            />
          </div>
        </div>
        <div className="absolute bottom-44 -right-20  z-50">
          <div className="relative flex flex-col items-center justify-center">
            <Symbol
              className="stroke-primary"
              delay={0}
              type="circle"
              size={1.25}
            />
          </div>
        </div>
        <div className=" absolute bottom-20 -left-20">
          <div className="relative w-full h-full flex flex-col items-center justify-center ">
            <Symbol 
              className="stroke-primary" 
              delay={0} 
              type="x" 
              size={1.25} 
            />
          </div>
        </div>
        <div className="  absolute bottom-0 left-36  z-50">
          <div className="relative   flex flex-col items-center justify-center">
            <Symbol
              className="stroke-zinc-900"
              delay={0}
              type="circle"
              size={1.5}
            />
          </div>
        </div>
        <div className="absolute -top-10 left-0  z-50">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <Symbol
              className="stroke-primary"
              delay={0}
              type="square"
              size={1}
            />
          </div>
        </div>
        <div className="absolute top-0 left-28  z-50">
          <div className="relative w-50 h-50">
            <Symbol
              className="stroke-zinc-900"
              delay={0}
              type="triangle"
              size={1}
            />
          </div>
        </div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: "-15deg" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          className="clipped w-full h-full  bg-gradient-to-b from-primary to-green-800  group-hover:-rotate-90 flex items-center align-middle justify-center"
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
            width={200}
            height={200}
            src="/images/luis-eduardo-urdaneta-martucci-completo.webp"
            alt="Luis "
            className="w-full h-full object-contain  group-hover:rotate-90 absolute cursor-none pointer-events-none"
          />
        </motion.div>
        <Image
          width={200}
          height={200}
          src="/images/luis-eduardo-urdaneta-martucci-cabeza.webp"
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

export default HeroImage;
