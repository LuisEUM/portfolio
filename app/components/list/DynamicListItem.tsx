import { motion } from "framer-motion";
import { useState } from "react";
import { RiveAnimation } from "../rive/RiveAnimation";

function DynamicListItem({ category, index, boxPositions, handleClick }) {
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
        style={{ order: boxPositions[index] }}
        className={`${
          boxPositions[index] === 1
            ? "col-span-full md:col-span-4 lg:col-span-5"
            : "col-span-full md:col-span-2 lg:col-span-3"
        } relative  group items-end flex px-4 text-center  rounded-3xl content-center  justify-center   `}
      >
        <div
          className={`${
            boxPositions[index] === 1
              ? "h-[105%] -top-[2.5%]"
              : "md:h-60 lg:h-64 -bottom-2"
          } ${
            hover ? "opacity-50" : "opacity-0"
          } absolute w-full  bg-gradient-to-b from-primary to-primary rounded-lg blur transition duration-200 hidden lg:block `}
        />
        <div
          className={`  w-full mx-auto relative  bg-zinc-900  rounded-3xl flex-col content-center items-center justify-center  cursor-pointer  ${
            boxPositions[index] === 1
              ? "lg:h-68  py-[3.77rem]"
              : "lg:h-60 py-11"
          }`}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          onClick={() => handleClick(index)}
        >
          <motion.div
            className={
              boxPositions[index] === 1
                ? "h-56 max-h-full max-w-full aspect-square mx-auto "
                : "h-32 max-h-full max-w-full aspect-square mx-auto "
            }
          >
            <RiveAnimation
              hover={hover}
              artboardName={category.artboardName}
              key={boxPositions[index]}
            />
          </motion.div>
          <motion.div>
            <h3
              className={`${
                boxPositions[index] === 1 ? "lg:text-[2vw]" : "lg:text-[1.7vw] md:hidden lg:inline"
              } text-center  text-[6vw] md:text-[3.8vw] font-black uppercase m-auto w-full`}
            >
              {category.name.split("").map((word, wordIndex) => {
                if (word === "_") return <span key={wordIndex}> </span>;
                return <span key={wordIndex}>{word}</span>;
              })}
            </h3>
            {boxPositions[index] === 1 && (
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
                className="mx-auto text-center mt-5 px-10 max-w-full md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal tracking-tight"
              >
                {category.summary}
              </motion.p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default DynamicListItem;
