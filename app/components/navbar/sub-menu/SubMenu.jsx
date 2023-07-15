"use client";
import { deleteCookie, setCookie } from "cookies-next";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function SubMenu({
  isOpen,
  subIsOpen,
  setIsOpenList,
  text,
  itemVariants,
  className,
  setLanguageCookie,
  toggleOpen,
}) {
  const [selectedCategory, setSelectedCategory] = useState(
    text.menu.currentLanguage
  );
  const languageOptions = text.menu.languagesOptions;

  useEffect(() => {
    setSelectedCategory(text.menu.currentLanguage);
  }, [text]);

  return (
    <>
      <motion.ul
        variants={itemVariants}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        whileTap={{ scale: 0.97 }}
        whileHover={{ color: "black" }}
        className={`text-center hover:text-primary hover:stroke-primary  font-bold  w-full content-center ${className}`}
        onClick={() => setIsOpenList(!subIsOpen)}
      >
        <div className="flex justify-between align-middle items-center text-zinc-100 hover:text-primary hover:stroke-primary">
          <p className="text-zinc-100 hover:text-primary ">
            {text.menu.languages}
          </p>
          <div
            className={`${
              subIsOpen ? "rotate-90 stroke-primary text-primary" : ""
            }`}
          >
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="hover:text-primary hover:stroke-primary stroke-zinc-100"
                d="M1 13.5L7 7.5L1 1.5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <AnimatePresence>
          {isOpen &&
            subIsOpen &&
            languageOptions.map((category, index) => (
              <motion.li
                variants={itemVariants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                exit="closed"
                key={index}
                className={`${
                  selectedCategory === category.name
                    ? "text-primary"
                    : "text-zinc-100"
                } text-left border-b-2 hover:text-primary font-normal mt-5 flex-row w-full content-center justify-center`}
                onClick={() => {
                  setLanguageCookie && deleteCookie("language");
                  setLanguageCookie && setCookie("language", category.pathname);
                  setLanguageCookie && setLanguageCookie(category.pathname);
                  setTimeout(() => {
                    toggleOpen();
                  }, 300);
                }}
              >
                {category.name}
              </motion.li>
            ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}

export default SubMenu;
