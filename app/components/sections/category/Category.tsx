import { motion, AnimatePresence } from "framer-motion";
import secretIcon from "@/public/icons/secret_folder.svg";
import ResponsiveList from "../../list/ResponsiveList";
import CategoryCard from "../../card/CategoryCard";
import Image from "next/image";
import { useEffect, useState } from "react";

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
  duration: 3,
  delay: 1,
};

const variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  enter: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

function Category({ text }) {
  const dataCategoriesSection = text.home.categoriesSection;
  const [index, setIndex] = useState(0);
  const currentWord = text.home.categoriesSection.categories[index];

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((i) => (i + 1) % text.home.categoriesSection.categories.length);
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, [index]);

  return (
    <motion.section
      className="flex-col space-y-5 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={spring}
      viewport={{ once: true }}
    >
      <h2 className="lg:max-w-7xl lg:px-8 mx-auto text-5xl font-bold text-left text-zinc-400">
        {dataCategoriesSection.subtitle}
        <motion.span
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={{
            duration: 3,
            type: "spring",
            stiffness: 300,
            damping: 24,
            delay: 3,
          }}
          className="text-center inline-block relative self-baseline"
        >
          <AnimatePresence
            initial={false}
            onExitComplete={() => null}
            mode="wait"
          >
            <motion.em
              className="inline-block relative w-[max-content] self-baseline mt-2 mr-2 text-3xl md:text-6xl lg:text-6xl font-black text-primary "
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
              key={currentWord.name}
              transition={{
                duration: 3,
                type: "spring",
                stiffness: 300,
                damping: 24,
              }}
            >
              {currentWord.name ||
                text.home.categoriesSection.categories[0].name}
            </motion.em>
          </AnimatePresence>
        </motion.span>
      </h2>
      <p className="lg:max-w-7xl lg:px-8 mx-auto text-left text-xl font-medium ">
        {dataCategoriesSection.paragraph}
      </p>
      <ResponsiveList
        mobile={1}
        tablet={1}
        desktop={3}
        className={"px-16 lg:px-8  mb-5 lg:max-w-7xl mx-auto pt-10 relative"}
      >
        {dataCategoriesSection &&
          dataCategoriesSection.categories.map((category, i) => (
            <CategoryCard category={category} />
          ))}
      </ResponsiveList>

      <div className="flex flex-col justify-center relative overflow-hidden sm:py-12 ">
        <div className="max-w-7xl mx-auto">
          <div className="relative group opacity-5 hover:opacity-100 cursor-pointer transition duration-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-7 py-6 bg-zinc-900  ring-1 ring-zinc-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <Image
                width={300}
                height={300}
                priority
                src={secretIcon}
                className="w-8 h-8 "
                alt="Follow us on Twitter"
              />

              <div className="flex ">
                <p className="font-bold m-auto ">TOP SECRET</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Category;
