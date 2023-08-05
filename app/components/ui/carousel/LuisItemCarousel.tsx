"use client";
import { motion, useDragControls } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const swipeConfidenceThreshold = 5000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function LuisItemCarousel({
  container,
  containers,
  index,
  paginate,
  centerOrder,
}) {
  const activeSides = Math.floor(containers.length / 2);
  const edgeLeft = activeSides - 1;
  const edgeRigth = activeSides + 1;
  const parentRef = useRef(null)
  const control = useDragControls();

  return (
    <>
      <motion.section
        layoutId={index + container.src}
        ref={parentRef}
        style={{
          order: container.order,
          scale: container.order === centerOrder ? 1 : 0.9,
          opacity: container.order === centerOrder ? 1 : 0.5,
          zIndex: container.order === centerOrder ? 2 : 1,
        }}
        key={index}
        className={` ${container.order > edgeRigth && "invisible"} ${
          container.order < edgeLeft && "invisible"
        } last:invisible  first:invisible  bg-red-500  flex justify-center items-center `}

      >
        <motion.div
          transition={{ type: "spring", duration: 0.5, bounce: 0.25 }}
          drag="x"
          dragConstraints={parentRef}
          dragControls={control}
          dragElastic={0.25}
          whileDrag={{ scale: 1.1, cursor: "grabbing" }}
          whileTap={{ scale: 0.95, cursor: "grabbing" }}
          whileHover={{ scale: 1.05, cursor: "grab" }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1, containers);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1, containers);
            }
          }}
          className=" min-w-[60vw] items-center justify-center text-center bg-zinc-900 rounded-xl shadow flex flex-col gap-y-2 mx-auto px-10 py-5 my-10 "
        >
          <Image
            className={` rounded-full pointer-events-none w-3/12 aspect-square object-cover`}
            width={700}
            height={700}
            alt={container.src}
            src={container.src}
          />
          <h4 className=" text-center text-white text-base md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw]  font-bold">
            Mark Johnson
          </h4>
          <h5 className=" text-zinc-400 text-xs md:text-[1.4vw] lg:text-[1.2vw] 2xl:text-[0.8vw]  font-medium">
            CEO of XYZ Company.
          </h5>
          <p className="max-w-full   text-slate-50 text-sm     md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal tracking-tight ">
            I had the pleasure of collaborating with Luis on a design project,
            and the results exceeded my expectations. Their attention to detail,
            creativity, and ability to bring my vision to life was outstanding.
          </p>
        </motion.div>
      </motion.section>
    </>
  );
}

export default LuisItemCarousel;
