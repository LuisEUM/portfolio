import Image from "next/image";
import { motion } from "framer-motion";

function CategoryCard({ category, className, index, wordIndex }) {
  const isCenterCard = wordIndex === index;

  return (
    <motion.div
      layout
      transition={{ type: "spring", damping: 100 , stiffness: 1000, mass: 0.1 }}
      className={`relative w-[1/2] group items-end flex  ${className}
        ${isCenterCard && "col-span-5"} 
        ${isCenterCard && index === 0 && "order-4 col-span-3"} 
        ${isCenterCard && index === 1 && "order-2 col-span-3"}
        ${isCenterCard && index === 2 && "order-4 col-span-3"}
        ${!isCenterCard && index === 0 && "order-1 col-span-3"}
        ${!isCenterCard && index === 1 && "order-5 col-span-3"}
        ${!isCenterCard && index === 2 && "order-3 col-span-3"}
        `}
      key={category.name}
    >
      <div
        className={`${
          wordIndex === index ? "h-96" : "h-64"
        } absolute w-full -bottom-2 bg-gradient-to-b from-primary to-primary rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
      ></div>
      <div
        className={`  w-[98%] mx-auto relative  bg-zinc-900  rounded-3xl flex-col content-center items-center justify-center   ${
          wordIndex === index ? "h-68  py-[3.77rem]" : "h-60 py-11"
        }`}
      >
        <Image
          width={wordIndex === index ? 256 : 256}
          height={wordIndex === index ? 256 : 256}
          priority
          src={category.icon}
          className={`h-full  mx-auto  ${
            wordIndex === index ? "-mt-9 " : "-mt-4 "
          }`}
          alt="Follow us on Twitter"
        />
        <p className="text-center h-full text-xl font-black uppercase m-auto w-full ">
          {category.name.split("").map((word, index) => {
            if (word === "_") return <span key={word + index}> </span>;
            return <span key={word + index}>{word}</span>;
          })}
        </p>
      </div>
    </motion.div>
  );
}

export default CategoryCard;
