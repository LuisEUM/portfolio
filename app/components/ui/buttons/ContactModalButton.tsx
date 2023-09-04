"use client";
import { useContext, useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { LanguageContext } from "../../../context/languageContext";
import ModalContact from "../modals/modalContact";
import BackdropUpToDown from "../backdrop/BackdropUpToDown";

function ContactModalButton({ className, setModalOpenNavbar }) {
  const { text } = useContext(LanguageContext);
  const [modalOpen, setModalOpen] = useState(false);
  const close = () =>
    setModalOpenNavbar ? setModalOpenNavbar(false) : setModalOpen(false);
  const open = () =>
    setModalOpenNavbar ? setModalOpenNavbar(true) : setModalOpen(true);

  return (
    <>
      <motion.button
        className={
          className ||
          "self-center b text-primary  border  border-primary font-bold rounded-md bg-zinc-950/30 hover:text-zinc-950 hover:bg-primary px-4 h-8 uppercase"
        }
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.93 }}
        onClick={open}
      >
        {text?.menu.contact}
      </motion.button>
      <AnimatePresence mode="wait" initial={false} onExitComplete={close}>
        {modalOpen && (
            <ModalContact handleClose={close} />
        )}
      </AnimatePresence>
    </>
  );
}

export default ContactModalButton;
