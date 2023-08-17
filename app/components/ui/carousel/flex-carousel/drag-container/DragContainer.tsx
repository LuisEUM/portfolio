import { motion, useDragControls } from "framer-motion";
import { useRef } from "react";

const swipeConfidenceThreshold = 5000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function DragContainer({
  containers,
  container,
  paginate,
  centerOrder,
  className,
  index,
  width,
  children,
}) {
  const activeSides = Math.floor(containers.length / 2);
  const edgeLeft = activeSides - 1;
  const edgeRigth = activeSides + 1;
  const parentRef = useRef(null);
  const control = useDragControls();
  return (
    <motion.section
      layoutId={index + container.src}
      ref={parentRef}
      // transition={{ type: "spring", stiffness: 400, damping: 45, mass: 0.5 }}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        order: container.order,
        scale: container.order === centerOrder ? 1 : 0.9,
        opacity: container.order === centerOrder ? 1 : 0.5,
        zIndex: container.order === centerOrder ? 2 : 1,
        willChange: "contents"
      }}
      key={index}
      className={` ${container.order > edgeRigth && "invisible"} ${
        container.order < edgeLeft && "invisible"
      } last:invisible  first:invisible  flex justify-center items-center `}
    >
      <motion.div
        style={{ width: `${width}vw`, willChange: "contents" }}
        drag="x"
        dragConstraints={parentRef}
        dragControls={control}
        dragElastic={0.25}
        whileFocus={{ cursor: "grabbing" }}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        whileTap={{ scale: 0.95, cursor: "grabbing" }}
        whileHover={{ scale: 1.05 }}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1, containers);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1, containers);
          }
        }}
        className={
          className ||
          "  items-center justify-center text-center cursor-grab hover:cursor-grab  rounded-xl shadow flex flex-col gap-y-2 mx-auto  my-2 "
        }
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

export default DragContainer;
