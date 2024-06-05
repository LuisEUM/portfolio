"use client";
import { useContext, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageContext } from "../../../context/languageContext";
import Link from "next/link.js";
import ContactModalButton from "../../ui/buttons/ContactModalButton.tsx";
import LanguaguesSwitch from "../../ui/switch/languaguesSwitch.jsx";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MainMenu = ({ isOpen, toggleOpen, setModalOpenNavbar }) => {
  const { text } = useContext(LanguageContext);
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: false })
  const routes = text.menu.routes;
  const currentPathname = usePathname();

  const itemVariants = {
    open: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 1 * i,
        delayChildren: 0.75 * i,
        when: "beforeChildren",
        staggerDirection: 1,
      },
    }),
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 1,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  return (
    <motion.ul
      variants={itemVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      className="flex-row group-first:border-b-2 top-[75px] right-0 fixed flex col-span-full  h-full  items-start  justify-center "
      ref={ref}
    >
      <AnimatePresence mode="wait">
        {isOpen && (
          <div className="w-full min-w-[300px] flex justify-between items-center">
            <div className="min-w-[300px] flex flex-col w-full">
              {routes.map((route) => (
                <Link
                  key={route.pathname}
                  href={
                    route.pathname === "/projects"
                      ? "/projects?category=All&page=1"
                      : route.pathname
                  }
                  className={`relative items-center    tracking-wider rounded-md w-full  ${
                    currentPathname === route.pathname
                      ? "text-primary"
                      : "text-zinc-100  hover:scale-105 hover:text-primary transition-all"
                  }`}
                >
                  <motion.div
                    className="justify-center hover:bg-zinc-800 py-5 w-full "
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-full flex flex-row gap-5  mx-auto pl-5">
                      <Image
                        src={route.icon}
                        width={32}
                        height={32}
                        alt="Projects folder icon"
                        className=" fill-zinc-300 h-6 w-6 col-span-1   "
                      />
                      <p className="text-zinc-100 text-xl tracking-wider col-span-10 col-start-3 h-full">
                        {route.name}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}

              <div className="grid grid-cols-12 py-5 px-5">
                <div className="grid col-span-12 grid-cols-12 relative w-full">
                  <Image
                    priority
                    src="/icons/navbar/Translate.svg"
                    fill
                    sizes="fill"
                    alt="Follow us on Twitter"
                    className="flex h-6 w-6 self-center items-center justify-center col-span-1 fill-zinc-300 col-start-1 lg:col-start-2"
                  />

                  <p className="text-zinc-100 text-xl tracking-wider col-span-9 col-start-3 h-full">
                    {text.menu.languages}
                  </p>
                </div>
                <div className="flex col-span-9 col-start-3  my-5 gap-x-2 items-center">
                  <p className=" text-lg tracking-wider ">ES</p>
                  <LanguaguesSwitch className="w-16" />
                  <p className=" text-lg tracking-wider">EN</p>
                </div>
              </div>
            </div>
            <div
              className="  py-5 px-10 w-full  absolute bottom-28 "
              onClick={toggleOpen}
            >
              <ContactModalButton
                setModalOpenNavbar={setModalOpenNavbar}
                className="text-center px-7  self-center border border-primary justify-center items-center gap-2.5 inline-flex hover:shadow-primary/50 hover:shadow-md w-full  rounded-3xl bg-primary col-span-10 uppercase text-zinc-900 tracking-wider font-extrabold text-lg  py-3"
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.ul>
  );
};

export default MainMenu;
