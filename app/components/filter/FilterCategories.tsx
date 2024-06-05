"use client";
import { LanguageContext } from "../../context/languageContext";
import { useDragControls, useMotionValue, motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import useScreenWidth from "../ui/carousel/flex-carousel/hooks/useScreenWitdh";
import useElementWidth from "@/app/hooks/useElementWidth";

type FilterCategories_Props = {
  search: string;
  className: string;
  setCurrentPage: (search: number) => void;
  setSearch: (search: string) => void;
};

export default function FilterCategories({
  search,
  setSearch,
  className,
  setCurrentPage,
}: FilterCategories_Props) {
  const { text } = useContext(LanguageContext);
  const categoriesRef = useRef(null);
  const constraintsRef = useRef(null);
  const controls = useDragControls();
  const screenWidth = useScreenWidth();
  const categoriesWidth = useElementWidth(categoriesRef);
  const [draggable, setDraggable] = useState(false);

  useEffect(() => {
    if (screenWidth >= 1700 && categoriesWidth > 1700) {
      setDraggable(true);
    } else {
      setDraggable(false);
    }

    console.log(screenWidth, categoriesWidth, draggable);
    return () => {};
  }, [categoriesWidth, screenWidth]);

  const handleClick = (event) => {
    const { id } = event.currentTarget;
    setSearch(id);
    setCurrentPage(1);
  };

  function startDrag(event) {
    controls.start(event);
  }

  return (
    <>
      <motion.div
        onPointerDown={startDrag}
        ref={constraintsRef}
        className={`${
          draggable
            ? "justify-center hover:cursor-default focus:cursor-grabbing target:cursor-grabbing"
            : "justify-start hover:cursor-grab"
        } h-12 flex  overflow-hidden relative w-screen justify-start items-center content-center  ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {draggable === false && (
          <div className="absolute z-30 right-0 top-0 w-full flex justify-between  pointer-events-none opacity-90">
            <div className="w-[20%] from-[#0F0F0F] via-[#0F0F0F] via-10% md:via-10% to-transparent to-80% md:to-20% bg-gradient-to-r h-12 pointer-events-none" />
            <div className="w-[20%] from-[#0F0F0F] via-[#0F0F0F] via-10% md:via-10% to-transparent to-80% md:to-20% bg-gradient-to-l h-12 pointer-events-none" />
          </div>
        )}
        <motion.div
          ref={categoriesRef}
          dragPropagation
          key={screenWidth + 1}
          drag={draggable ? false : "x"}
          dragConstraints={constraintsRef}
          dragControls={controls}
          dragElastic={0}
          style={{ x: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          id="categories"
          className={`h-12 flex flex-row justify-start items-center text-center  relative   ${
            draggable ? "self-center" : "self-start pl-[10%]"
          } `}
          onDragEnd={(event, info) => {
            if (info.offset.x >= categoriesWidth) {
              alert("yes");
            }
          }}
          whileTap={{ cursor: draggable ? "default" : "grabbing" }}
        >
          <Link
            href={"projects" + "?" + "category=" + "All" + "&" + "page=" + 1}
            className={`w-20 ml-8 mr-2 ${
              search === "All"
                ? "transition-all text-primary border-primary border font-normal tracking-wider rounded-full py-2 px-4 uppercase"
                : "transition-all hover:text-primary hover:border-primary border-white border text-white font-normal tracking-wider rounded-full py-2 px-4  uppercase"
            }`}
            id="All"
            onClick={handleClick}
          >
            All
          </Link>

          {text &&
            text.portfolio.categories.map((category, i) => {
              return (
                <Link
                  href={
                    "projects" +
                    "?" +
                    "category=" +
                    category.name +
                    "&" +
                    "page=" +
                    1
                  }
                  key={category.name}
                  className={`mx-2 last:mr-8 flex items-center ${
                    search === category.name
                      ? "transition-all text-primary border-primary border font-normal tracking-wider rounded-full py-2 px-4 uppercase "
                      : "transition-all hover:text-primary hover:border-primary border-white border text-white font-normal tracking-wider rounded-full py-2 px-4  uppercase"
                  }`}
                  id={category.name}
                  onClick={handleClick}
                >
                  {category.name.split("").map((word, index) => {
                    if (word === "_") {
                      return (
                        <span key={word + index} className="text-transparent">
                          {word}
                        </span>
                      );
                    }
                    return <span key={word + index}>{word}</span>;
                  })}
                </Link>
              );
            })}
        </motion.div>
      </motion.div>
    </>
  );
}
