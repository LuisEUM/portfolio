import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TailwindGrid from "../../grid/TailwindGrid";
import DynamicList from "../../list/DynamicList";
import FlexCarousel from "../../ui/carousel/flex-carousel/FlexCarousel";

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
  const [index, setIndex] = useState(1);
  const currentWord = text.home.categoriesSection.categories[index];

  return (
    <div className="mt-20   pt-10 lg:py-[min(7.5vw,11rem)] ">
      <TailwindGrid>
        <section className="col-start-1 lg:col-start-2 col-end-5 md:col-end-9 lg:col-end-13  ">
          <motion.section
            className="flex-col space-y-5 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={spring}
            viewport={{ once: true }}
          >
            <h2
              className="xl:text-[3.vw] 2xl:text-[3vw] text-start text-[7vw] leading-[8vw] md:text-[4.8vw] md:leading-[4.8vw] lg:text-[3vw] lg:leading-[3vw] font-black"
              key={currentWord.name}
            >
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
                }}
                className="text-center inline-block relative self-baseline"
              >
                <AnimatePresence
                  initial={false}
                  onExitComplete={() => null}
                  mode="wait"
                >
                  <motion.em
                    key={currentWord.name}
                    className="inline-block relative w-[max-content] self-baseline mt-2 mr-2 font-black text-primary "
                    variants={variants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
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
            <p className="text-left text-xl font-medium ">
              {dataCategoriesSection.paragraph}
            </p>

            {dataCategoriesSection.categories && (
              <DynamicList
                setIndex={setIndex}
                categories={dataCategoriesSection.categories}
              />
            )}
          </motion.section>
        </section>
      </TailwindGrid>

      <div className="col-span-12 max-w-full block lg:hidden w-full">
        <FlexCarousel
          dataCards={dataCategoriesSection.categories}
          width={70}
          reduceGap={15}
          key="category"
          type="category"
        />
      </div>
    </div>
  );
}

export default Category;
