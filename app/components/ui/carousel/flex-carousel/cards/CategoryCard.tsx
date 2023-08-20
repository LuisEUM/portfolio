import { RiveAnimation } from "@/app/components/rive/RiveAnimation";
import { motion } from "framer-motion";
import { useState } from "react";

function CategoryCard({ container, centerOrder }) {
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
        className="w-full relative group items-end flex p-4 text-center rounded-3xl content-center justify-center"
      >
        <div
          className={`h-[96%] bottom-[2%]  absolute w-full bg-gradient-to-b from-primary to-primary rounded-lg blur transition duration-200 ${
            centerOrder === container.order ? "opacity-50" : "opacity-0"
          }`}
        />
        <div
          className="w-full mx-auto relative  bg-zinc-900  rounded-3xl flex-col content-center items-center justify-center  cursor-pointer py-11"
          onMouseDown={() => setHover(true)}
          onMouseUp={() => setHover(false)}
        >
          <motion.div
            className={
              true
                ? "h-56 aspect-square mx-auto"
                : "h-32 aspect-square mx-auto "
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
              className="mx-auto text-center mt-5 px-10 max-w-full text-xs md:text-[1.4vw] lg:text-[1.2vw] 2xl:text-[0.8vw] font-normal tracking-tight"
            >
              {container?.summary}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default CategoryCard;
