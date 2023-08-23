"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type TestimonialsDesktopCardProps = {
  container: {
    order: number;
    src?: string;
    name?: string;
    position?: string;
    description?: string;
    url?: string;
    icon?: string;
  };
};

function TestimonialsDesktopCard({ container }: TestimonialsDesktopCardProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const renderDescription = () => {
    if (showFullDescription) {
      return (
        <>
          <p className="items-center justify-center text-center px-6 py-5 bg-zinc-900 rounded-2xl shadow flex flex-col gap-y-2 mx-auto md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal tracking-tight">
            {container.description}
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-primary font-normal underline md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw]  cursor-pointer z-30 p-2"
            onClick={toggleDescription}
            dragListener={false}
          >
            Read Less
          </motion.button>
        </>
      );
    } else {
      const wordsLimit = 40; // Set the number of words you want to show initially
      const wordsArray = container.description.split(" ");
      const truncatedDescription = wordsArray.slice(0, wordsLimit).join(" ");

      return (
        <>
          <p className="max-w-full md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal tracking-tight">
            {truncatedDescription}...
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-primary font-normal underline md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw]  cursor-pointer z-30 p-2"
            onClick={toggleDescription}
            dragListener={false}
          >
            Read More
          </motion.button>
        </>
      );
    }
  };

  return (
    <motion.div
      layout="position"
      className="items-center justify-center text-center bg-zinc-900 rounded-xl shadow flex flex-col gap-y-2 mx-auto  px-[8%] py-[5%]"
    >
      {container.url && (
        <Link
          href={container.url} // Reemplaza esta URL con la URL correcta de tu perfil de LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="-mb-8 self-end"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="group bg-white cursor-pointer hover:bg-zinc-700 rounded-full transition-all"
          >
            <Image
              width={40}
              height={40}
              alt={container.name}
              src={container.icon}
              className="w-8 h-8 group-hover:invert cursor-pointer"
            />
          </motion.button>
        </Link>
      )}
      <Image
        className="rounded-full pointer-events-none w-3/12 aspect-square object-cover"
        width={360}
        height={360}
        alt={`${container.order}`}
        src={container.src}
      />
      <h4 className="text-center md:text-[1.8vw] lg:text-[1.6vw] 2xl:text-[1.2vw] font-bold">
        {container.name}
      </h4>
      <h5 className="text-zinc-400 text-xs md:text-[1.4vw] lg:text-[1.2vw] 2xl:text-[0.8vw] font-medium">
        {container.position}
      </h5>
      <motion.div
        layout="position"
        layoutId={container.name}
        transition={{ duration: 0.25 }}
      >
        {renderDescription()}
      </motion.div>
    </motion.div>
  );
}

export default TestimonialsDesktopCard;
