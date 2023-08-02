"use client";
import { LanguageContext } from "@/app/context/languageContext";
import Link from "next/link";
import React, { useContext } from "react";
import ContactModalButton from "../ui/buttons/ContactModalButton";
import { motion } from "framer-motion";
import Image from "next/image";

function Footer() {
  const { text } = useContext(LanguageContext);

  return (
    <div className="w-full min-h-[400px] flex-col justify-center items-center gap-y-10 inline-flex bg-zinc-900/50 pt-10">
      <div className="flex flex-wrap gap-x-2 gap-y-4   2xl:w-2/12   justify-center items-center">
        {text.footer.socials.map((social, index) => (
          <div
            className={`flex justify-center min-h-9 min-w-9 items-center h-8 shadow  rounded-full w-1/6 ${
              social.hidden && "hidden"
            }`}
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="group bg-white cursor-pointer hover:bg-zinc-700 rounded-full transition-all"
            >
              <Image
                width={40}
                height={40}
                alt={social.name}
                src={social.icon}
                className="w-8 h-8 group-hover:invert cursor-pointer"
              />
            </motion.button>
          </div>
        ))}
      </div>
      <div className="justify-start items-start gap-10 inline-flex ">
        {text.footer.routes.map((route) => (
          <motion.div
            className="flex justify-center px-4"
            key={route.pathname}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href={
                route.pathname === "/projects"
                  ? "/projects?category=All&page=1"
                  : route.pathname
              }
              className="self-center flex items-center hover:scale-105 hover:text-primary transition-all text-white text-base font-normal"
            >
              {route.name}
            </Link>
          </motion.div>
        ))}
      </div>
      <ContactModalButton
        className="text-center text-black text-base font-bold px-7 py-2 bg-primary rounded-3xl border border-primary justify-center items-center gap-2.5 inline-flex hover:shadow-primary/50 hover:shadow-md "
        setModalOpenNavbar={undefined}
      />

      <div className="w-full h-[0px] border border-white"></div>
      <p className="text-xs font-light pb-10 capitalize">
        {text.footer.website} {text.footer.rights}
      </p>
    </div>
  );
}

export default Footer;
