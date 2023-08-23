import { motion } from "framer-motion";
import { useState } from "react";
import { RiveAnimation } from "../rive/RiveAnimation";

function CategoryCard({ category, className, index, wordIndex, setIndex }) {
  const isCenterCard = wordIndex === index;
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    console.log(wordIndex, index);

    if (wordIndex === index) {
      console.log("caso 0");
      return;
    } else if (wordIndex > index) {
      console.log("caso 1");

      if (wordIndex > index + 1) {
        setIndex((previndex) => previndex - 1);
        setTimeout(() => {
          setIndex((previndex) => previndex - 1);
        }, 250);
      } else {
        setIndex((previndex) => previndex - 1);
      }
    } else {
      console.log("caso 2");
      if (wordIndex < index - 1) {
        setIndex((previndex) => previndex + 1);
        setTimeout(() => {
          setIndex((previndex) => previndex + 1);
        }, 250);
      } else {
        setIndex((previndex) => previndex + 1);
      }
    }
  };

  return (
    <motion.div
      layout
      transition={{ type: "spring", damping: 100, stiffness: 1000, mass: 0.1 }}
      className={`relative w-[1/2] group items-end flex  ${className}
        ${isCenterCard && "col-span-5 "} 
        ${isCenterCard && index === 0 && "order-8 col-span-3"} 
        ${isCenterCard && index === 1 && "order-1 col-span-3"}
        ${isCenterCard && index === 2 && "order-4 col-span-3"}
        ${!isCenterCard && index === 0 && "order-1 col-span-3"}
        ${!isCenterCard && index === 1 && "order-7 col-span-3"}
        ${!isCenterCard && index === 2 && "order-9 col-span-3"}
        `}
      key={category.name}
    >
      <div
        className={`${wordIndex === index ? "h-full mb-2" : "h-2/3 mb-2"} ${
          hover ? "opacity-50" : "opacity-0"
        } absolute w-full -bottom-2 bg-gradient-to-b from-primary to-primary rounded-lg blur transition duration-200 `}
      />
      <div
        className={`  w-[98%] mx-auto relative  bg-zinc-900  rounded-3xl flex-col content-center items-center justify-center  cursor-pointer  ${
          wordIndex === index ? "  py-[3.77rem]" : "h-2/3 py-11"
        }`}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onClick={handleClick}
      >
        <div className="h-56 max-w-full max-h-full aspect-square mx-auto">
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

export default CategoryCard;
