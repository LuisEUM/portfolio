import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://picsum.photos/id/200/900/1600",
  "https://picsum.photos/id/202/900/1600",
  "https://picsum.photos/id/203/900/1600",
  "https://picsum.photos/id/204/900/1600",
  "https://picsum.photos/id/199/900/1600",
];

const witdh = 66.666667;
const swipeConfidenceThreshold = 5000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

type CardsCarouselSliderProps = {
  height?: number;
};

// Main Function
function CardsCarouselSlider({ height }: CardsCarouselSliderProps) {
  const [position, setPosition] = useState(1);

  const paginate = (newDirection) => {
    const newPosition = position + newDirection;
    console.log();
    if (newPosition >= -1 && newPosition < images.length - 1) {
      setPosition(newPosition);
    }
  };

  return (
    <>
      <section
        style={{ height: height ? height : `${witdh}vw` }}
        className=" w-full md:hidden mb-6"
      >
        <section className="absolute max-h-min  z-10 overflow-hidden max-w-full flex items-center justify-center md:hidden ">
          <div
            style={{ height: height ? height : `${witdh}vw` }}
            className=" w-screen  overflow-hidden  self-center  "
          >
            {images.map((image, index) => (
              <motion.div
                style={{ width: `${witdh}vw`, minHeight:  height && height  }}
                className=" shadow flex flex-col gap-y-2 items-center justify-center text-center px-6 py-5   bg-zinc-900  max-h-full rounded-xl overflow-hidden absolute  "
                key={index}
                animate={{
                  left: `${(index - position) * witdh - 50.5}vw`,
                  scale: index === position + 1 ? 1 : 0.9,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              >
                {" "}
                <Image
                  className=" rounded-full pointer-events-none w-3/12 aspect-square"
                  width={700}
                  height={700}
                  alt={image}
                  src="https://picsum.photos/id/199/900/1600"
                />
                <h4 className=" text-center text-white text-base font-bold">
                  Mark Johnson
                </h4>
                <h5 className=" text-zinc-400 text-xs  font-medium">
                  CEO of XYZ Company.
                </h5>
                <p className="max-w-full   text-slate-50 text-sm  font-normal tracking-tight ">
                  I had the pleasure of collaborating with Luis on a design
                  project, and the results exceeded my expectations. Their
                  attention to detail, creativity, and ability to bring my
                  vision to life was outstanding.
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </section>

      <div style={{top: height ? height : `${witdh}vw`}} className="flex self-center justify-self-center place-self-center content-center justify-center  mt-6 absolute  z-40 md:hidden">
        {images.map((image, index) => {
          const isCurrent = index === position + 1;
          return (
            <div
              className={`w-2 h-2 rounded-full  mx-2 my-0 cursor-pointer ${
                isCurrent ? "bg-primary" : "bg-neutral-500"
              } `}
              onClick={() => setPosition(index - 1)}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default CardsCarouselSlider;
