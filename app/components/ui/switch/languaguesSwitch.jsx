import { LanguageContext } from "../../../context/languageContext";
import { deleteCookie, setCookie } from "cookies-next";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";

export default function LanguaguesSwitch({ className }) {
  const [isOn, setIsOn] = useState(true);
  const { setLanguageCookie, text } = useContext(LanguageContext);

  return (
    <>
      <div
        className={`h-7  rounded-full flex items-center box-border py-0 px-1 cursor-pointer transition-all bg-primary ${className} ${
          isOn ? "justify-end" : "justify-start"
        }`}
        onClick={() => {
          setIsOn(!isOn);
          deleteCookie("language");
          isOn
            ? setCookie("language", text.menu.languagesOptions[1].pathname)
            : setCookie("language", text.menu.languagesOptions[0].pathname);
          isOn
            ? setLanguageCookie(text.menu.languagesOptions[1].pathname)
            : setLanguageCookie(text.menu.languagesOptions[0].pathname);
        }}
        style={{ justifyContent: isOn ? "flex-end" : "flex-start" }}
      >
        <motion.div
          layout
          className="handle h-6 w-6 rounded-full grid items-center justify-center bg-zinc-900 overflow-hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className={`${isOn ? "text-divrimary" : "text-[#6E0D25]"}`}
              key={isOn ? "moon" : "sun"}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
