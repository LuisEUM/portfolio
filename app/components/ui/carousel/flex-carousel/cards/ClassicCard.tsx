import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TestimonialsDesktopCardProps = {
  container: {
    order?: number;
    src?: string;
    name?: string;
    position?: string;
    description?: string;
  };
  containers?: Array<{
    order?: number;
    src?: string;
  }>;
  index?: number;
  children?: React.ReactNode;
  className?: string;
  centerOrder?: number;
};

function TestimonialsDesktopCard({
  container,
  centerOrder,
  children,
  index,
  className,
}: TestimonialsDesktopCardProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const renderDescription = () => {
    if (showFullDescription || !container.description) {
      return (
        <>
          <p className="max-w-full text-slate-50 md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal tracking-tight">
            {container.description}
          </p>
          {showFullDescription && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-primary font-normal underline md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw]  cursor-pointer z-30 p-2"
              onClick={toggleDescription}
              dragListener={false}
            >
              Read Less
            </motion.button>
          )}
        </>
      );
    } else {
      const wordsLimit = 40; // Set the number of words you want to show initially
      const wordsArray = container.description.split(" ");
      const truncatedDescription = wordsArray.slice(0, wordsLimit).join(" ");

      return (
        <>
          <p className="max-w-full text-slate-50 md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal tracking-tight">
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
    <div
      className={
        className ||
        "items-center justify-center text-center bg-zinc-900 rounded-xl shadow flex flex-col gap-y-2 mx-auto px-5 lg:px-10 py-5 mt-1 mb-5"
      }
    >
      <Image
        className="rounded-full pointer-events-none w-3/12 aspect-square object-cover"
        width={700}
        height={700}
        alt={`${container.order}`}
        src={container.src}
      />
      <h4 className="text-center text-white md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-bold">
        {container.name}
      </h4>
      <h5 className="text-zinc-400 text-xs md:text-[1.4vw] lg:text-[1.2vw] 2xl:text-[0.8vw] font-medium">
        {container.position}
      </h5>
      {renderDescription()}
    </div>
  );
}

export default TestimonialsDesktopCard;
