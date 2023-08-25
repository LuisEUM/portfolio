"use client";
import { RiveAnimation } from "@/app/components/rive/RiveAnimation";
import { motion } from "framer-motion";
import { useState } from "react";

function CategoriesCard({ container, centerOrder }) {
  const [hover, setHover] = useState(false);

  return (
    <>
      <motion.div
        layout
        transition={{
          type: "spring",
          damping: 100,
          stiffness: 1000,
          mass: 0.1,
        }}
        className="w-full relative group items-end flex text-center rounded-3xl content-center justify-center "
      >
        <div
          className="w-full max-w-full mx-auto relative  bg-zinc-900  rounded-3xl flex-col content-center items-center justify-center  cursor-pointer py-11"
          onMouseDown={() => setHover(true)}
          onMouseUp={() => setHover(false)}
        >
          <motion.div
            className={
              true
                ? "max-h-56 aspect-square mx-auto  max-w-full "
                : "max-h-32 aspect-square mx-auto max-w-full flex-wrap"
            }
          >
            <RiveAnimation
              hover={centerOrder === container.order || hover}
              artboardName={container?.artboardName}
            />
          </motion.div>
          <motion.div>
            <h3 className="text-center  text-xl font-black uppercase m-auto w-full ">
              {container?.name?.split("").map((word, wordIndex) => {
                if (word === "_") return <span key={wordIndex}> </span>;
                return <span key={wordIndex}>{word}</span>;
              })}
            </h3>

            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                type: "spring",
                damping: 100,
                stiffness: 1000,
                mass: 0.1,
                delay: 0.25,
              }}
              className="mx-auto text-center mt-5 px-10 max-w-full text-md md:text-[1.4vw] lg:text-[1.2vw] 2xl:text-[0.8vw] font-normal tracking-tight"
            >
              {container?.summary}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default CategoriesCard;
