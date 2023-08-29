"use client"
import { motion } from "framer-motion";

type SecondaryButton_Props = {
  children?: React.ReactNode;
  className?: string;
};

function SecondaryButton({ children, className }: SecondaryButton_Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.93 }}
      transition={{ duration: 0.2 }}
      className={`${
        className ||
        "bg-zinc-950/40 backdrop-blur-lg bg-clip-padding backdrop-filter cursor-pointer text-[min(1rem,,3.16vw)]  lg:text-[1vw] justify-center items-center flex self-stretch lg:min-w-[172px] w-full lg:w-[13vw]  rounded-md border h-12 gap-2 pl-4 pr-2.5 border-white text-white hover:text-zinc-950 hover:bg-white text-center -zinc-950 font-bold uppercase"
      }`}
    >
      {children}
    </motion.button>
  );
}

export default SecondaryButton;
