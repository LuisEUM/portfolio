import { motion } from "framer-motion";
import { useContext, useState } from "react";
import BackdropUpToDown from "../backdrop/BackdropUpToDown";
import AnimatedSwitch from "../switch/animatedSwitch";
import { LanguageContext } from "../../../context/languageContext";
import Image from "next/image";

const dropIn = {
  open: {
    y: "0vh",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 500,
      when: "beforeChildren",
    },
  },
  closed: {
    y: "100vh",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 500,
      when: "afterChildren",
    },
  },
};

const ModalCookies = ({ modalOpen, handleClose }) => {
  const { text } = useContext(LanguageContext);

  return (
    <BackdropUpToDown onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="closed"
        animate="open"
        exit="closed"
        className="w-[clamp(550px,50%,75vw)] md:max-w-2xl max-w-sm  m-auto py-2 px-8 rounded-xl flex flex-col justify-between items-center shadow bg-zinc-800  "
        key="modalCookies"
      >
        <ModalContent
          text={text}
          handleClose={handleClose}
          modalOpen={modalOpen}
        />
      </motion.div>
    </BackdropUpToDown>
  );
};

export default ModalCookies;

function ModalContent({ text, handleClose, modalOpen }) {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="'w-full rounded-xl flex flex-col ">
      {/* <!--MODAL HEADER--> */}
      <div className="flex justify-between items center border-b border-gray-200 py-3">
        <div className="flex flex-col items-center justify-center">
          <p className=" text-xl text-zinc-100 font-medium uppercase ">
            {text.settings.header}
          </p>
        </div>
        <motion.div
          className="bg-gray-300 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-9 h-9 flex items-center justify-center rounded-full"
          onClick={handleClose}
          whileHover={{ backgroundColor: "rgb(107 114 128)", scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.1 13.3C1.7134 13.6866 1.0866 13.6866 0.7 13.3C0.313401 12.9134 0.313401 12.2866 0.7 11.9L5.6 7L0.7 2.1C0.3134 1.7134 0.313401 1.0866 0.7 0.7C1.0866 0.313401 1.7134 0.313401 2.1 0.7L7 5.6L11.9 0.7C12.2866 0.3134 12.9134 0.313401 13.3 0.7C13.6866 1.0866 13.6866 1.7134 13.3 2.1L8.4 7L13.3 11.9C13.6866 12.2866 13.6866 12.9134 13.3 13.3C12.9134 13.6866 12.2866 13.6866 11.9 13.3L7 8.4L2.1 13.3Z"
              fill="#18181B"
            />
          </svg>
        </motion.div>
      </div>
      <section className="py-3 flex flex-col items-center gap-5 justify-between content-between">
        <div className="mt-3">
          <Image
            src="/icons/cookies.svg"
            width={56}
            height={56}
            alt="cookies icon"
          />
        </div>

        <p className="text-lg font-medium text-center">
          {text.settings.description}
        </p>
        {modalOpen && (
          <AnimatedSwitch className=" md:mb-0 " isOn={isOn} setIsOn={setIsOn} />
        )}
      </section>
    </div>
  );
}
