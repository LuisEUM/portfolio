"use client";
import { createContext, useEffect, useRef, useState } from "react";
import textData from "../data/text.json";
// import imageData from '../data/images.json'
import { AnimatePresence, LayoutGroup, motion, useInView } from "framer-motion";
import { getCookie, setCookie } from "cookies-next";
import TextsLoader from "../components/loaders/textsLoader";
import CookiesSoundButton from "../components/ui/buttons/cookiesButton";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [languageCookie, setLanguageCookie] = useState(getCookie("language"));
  const [text, setText] = useState(null);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const container = {
    hidden: { opacity: 0 },
    show: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 0.25 * i,
      },
    }),
  };

  // const child = {
  //   show: {
  //     opacity: 1,
  //     y: 0,
  //     scale: 1,
  //     transition: {
  //       ease: [0.6, 0.1, -0.05, 0.95],
  //       duration: 3
  //     }
  //   },
  //   hidden: {
  //     opacity: 0,
  //     scale: 0,
  //     y: 200
  //   },
  //   exit: {
  //     opacity: 0,
  //     scale: 0,
  //     y: 0,
  //     x: 0
  //   }
  // }

  useEffect(() => {
    if (languageCookie === undefined) {
      setCookie("language", "en");
    }

    const finalText = getText(languageCookie, textData);
    setText(finalText);
  }, [languageCookie]);

  return (
    <LayoutGroup>
      <AnimatePresence>
        {loading || text === null ? (
          <motion.div
            key="loader"
            className="h-[100dvh] grid grid-cols-1 align-middle justify-around overflow-hidden max-w-full"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            ref={ref}
            // onAnimationComplete={() => { setTimeout(()=>{setLoading(false)}, 2000) }}
          >
            {/* <TextsLoader setLoading={setLoading}/> */}
            <TextsLoader setLoading={setLoading} />

            {/* <div
                className='max-w-full bg-transparent'
                variants={child}
                key='Loading'
                initial='hidden'
                animate='show'
                exit='exit'
              >
                <LettersAnimation
                  className='text-center font-bold bg-transparent mt-5'
                  text='Loading...'
                  tag='p'
                />
                <p> loading </p>
              </div> */}
            <CookiesSoundButton />
          </motion.div>
        ) : (
          <LanguageContext.Provider value={{ text, setLanguageCookie }}>
            {children}
          </LanguageContext.Provider>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

function getText(languageCookie, textData) {
  if (languageCookie === undefined) {
    return textData.en;
  } else if (languageCookie.includes("en")) {
    return textData.en;
  } else if (languageCookie.includes("es")) {
    return textData.es;
  } else {
    return textData.en;
  }
}
