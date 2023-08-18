import { useBoxClick } from "./useBoxClick";
import { motion } from "framer-motion";
import { RiveAnimation } from "../rive/RiveAnimation";
import { useState } from "react";

function NewDynamicList({ className, index, category, wordIndex, setIndex }) {
  const indexPosition = [0, 1, 2];
  const { boxPositions, handleClick } = useBoxClick(indexPosition, setIndex);
  const [hover, setHover] = useState(false);
  const isCenterCard = wordIndex === index;

  return (
    <motion.div
      key={category.name} // Add a unique key here
      style={{ order: boxPositions[index] }}
      transition={{
        type: "spring",
        damping: 100,
        stiffness: 1000,
        mass: 0.1,
      }}
      layout
      className={`relative w-[1/2] group items-end flex  ${className}
        ${isCenterCard ? "col-span-5 " : "col-span-3"} 
        `}
      onClick={() => handleClick(indexPosition[index])}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div
        className={`${isCenterCard ? "h-full mb-2 " : "h-2/3 mb-2 "} ${
          hover ? "opacity-50" : "opacity-0"
        } absolute w-full -bottom-2 bg-gradient-to-b from-primary to-primary rounded-lg blur transition duration-200 `}
      />
      <div
        className={`  w-[98%] mx-auto relative  bg-zinc-900  rounded-3xl flex-col content-center items-center justify-center  cursor-pointer  ${
          isCenterCard ? "  py-[3.77rem]" : "h-2/3 py-11"
        }`}
      >
        <div className="h-56 max-h-full aspect-square mx-auto">
          <RiveAnimation hover={hover} artboardName={category.artboardName} />
        </div>
        <div>
          <h3 className="text-center h-full text-xl font-black uppercase m-auto w-full ">
            {category.name.split("").map((word, index) => {
              if (word === "_") return <span key={word + index}> </span>;
              return <span key={word + index}>{word}</span>;
            })}
          </h3>
          {isCenterCard && <p className="mx-auto text-center mt-5">hola</p>}
        </div>
      </div>
    </motion.div>
  );
}

export default NewDynamicList;
