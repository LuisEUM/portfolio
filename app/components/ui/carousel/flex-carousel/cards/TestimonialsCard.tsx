"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type TestimonialsCardProps = {
  container: {
    order: number;
    src?: string;
    name?: string;
    position?: string;
    description?: string;
    url?: string;
    icon?: string;
  };
  containers?: Array<{
    order: number;
    src?: string;
  }>;
  children?: React.ReactNode;
  centerOrder?: number;
};

function RenderDescription({
  container,
  centerOrder,
  showFullDescription,
  toggleDescription,
}) {
  const wordsLimit = 40;
  const wordsArray = container.description?.split(" ");
  const truncatedDescription = wordsArray?.slice(0, wordsLimit).join(" ");

  if (container.order === centerOrder || !truncatedDescription) {
    return (
      <AnimatePresence mode="wait" initial={false}>
        {!showFullDescription ? (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.01 }}
              className="max-w-full text-slate-50 text-md md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal tracking-tight"
            >
              {truncatedDescription}...
            </motion.p>
            <ButtonMoreOrLess toggleDescription={toggleDescription} more />
          </>
        ) : (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.01 }}
              className="max-w-full text-slate-50  text-md md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal tracking-tight"
            >
              {container.description}
            </motion.p>
            <ButtonMoreOrLess
              toggleDescription={toggleDescription}
              more={false}
            />
          </>
        )}
      </AnimatePresence>
    );
  } else {
    return (
      <>
        <p className="max-w-full text-slate-50  text-md md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal tracking-tight">
          {truncatedDescription}...
        </p>
        <ButtonMoreOrLess toggleDescription={toggleDescription} more />
      </>
    );
  }
}

function ButtonMoreOrLess({ more, toggleDescription }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className="text-primary font-normal underline  text-md md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw]  cursor-pointer z-30 p-2"
      onClick={toggleDescription}
      dragListener={false}
    >
      {more ? "Read More" : "Read Less"}
    </motion.button>
  );
}

function TestimonialsCard({ container, centerOrder }: TestimonialsCardProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    if (container.order !== centerOrder) {
      setShowFullDescription(false);
    }
  }, [centerOrder, container.order]);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <>
      {container.order && container.icon && (
        <motion.div
          layout="position"
          layoutId={`${container.order}`}
          style={{ willChange: "auto" }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="items-center justify-center text-center bg-zinc-900 rounded-xl shadow flex flex-col gap-y-2 mx-auto px-[8%] py-[5%] "
        >
          {container.url && (
            <Link
              href={container.url}
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
                  width={32}
                  height={32}
                  alt={container.name}
                  src={container.icon}
                  className="w-8 h-8 group-hover:invert cursor-pointer"
                />
              </motion.button>
            </Link>
          )}

          <Image
            className="rounded-full pointer-events-none w-3/12 aspect-square object-cover "
            width={80}
            height={80}
            alt={`${container.order}`}
            src={container.src}
          />
          <h4 className="text-center text-lg md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-bold">
            {container.name}
          </h4>
          <h5 className="text-zinc-400 text-sm md:text-[1.4vw] lg:text-[1.2vw] 2xl:text-[0.8vw] font-medium">
            {container.position}
          </h5>
          <RenderDescription
            container={container}
            centerOrder={centerOrder}
            showFullDescription={showFullDescription}
            toggleDescription={toggleDescription}
          />
        </motion.div>
      )}
    </>
  );
}

export default TestimonialsCard;
