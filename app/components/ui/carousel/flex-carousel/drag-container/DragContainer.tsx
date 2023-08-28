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
  itemWidth,
  containerWidth,
  handleCategoryWord,
}) {
  const activeSides = Math.floor(containers.length / 2);
  const edgeLeft = activeSides - 1;
  const edgeRigth = activeSides + 1;
  const parentRef = useRef(null);
  const control = useDragControls();

  return (
    <>
      {containerWidth <= 360 ? (
        <motion.section
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
            willChange: "contents",
          }}
          key={index}
          className={` ${container.order > edgeRigth && "invisible"} ${
            container.order < edgeLeft && "invisible"
          } last:invisible  first:invisible  flex justify-center items-center  content-box`}
          layout="position"
        >
          <motion.div
            style={{
              willChange: "contents",
              width: `360px`,
            }}
            drag="x"
            dragConstraints={parentRef}
            dragControls={control}
            dragElastic={0.25}
            whileFocus={{ cursor: "grabbing", paddingTop: "8px", paddingBottom: "8px" }}
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            whileTap={{ scale: 0.95, cursor: "grabbing", paddingTop: "8px", paddingBottom: "8px" }}
            whileHover={{ scale: 1.05, paddingTop: "8px", paddingBottom: "8px" }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                console.log("left");
                paginate(1, containers);
                handleCategoryWord(1, 1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1, containers);
                handleCategoryWord(-1, 1);
              }
            }}
            className={
              className ||
              `items-center justify-center text-center cursor-grab hover:cursor-grab  rounded-xl shadow flex flex-col my-2 gap-y-2  `
            }
            layout="position"
          >
            {children}
          </motion.div>
        </motion.section>
      ) : (
        <motion.section
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
            willChange: "contents",
          }}
          key={index}
          className={` ${container.order > edgeRigth && "invisible"} ${
            container.order < edgeLeft && "invisible"
          } last:invisible  first:invisible  flex justify-center items-center`}
          layout="position"
        >
          <motion.div
            style={{
              willChange: "contents",
              width: `${width}vw`,
            }}
            drag="x"
            dragConstraints={parentRef}
            dragControls={control}
            dragElastic={0.25}
            whileFocus={{ cursor: "grabbing", paddingTop: "8px", paddingBottom: "8px" }}
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            whileTap={{ scale: 0.95, cursor: "grabbing", paddingTop: "8px", paddingBottom: "8px" }}
            whileHover={{ scale: 1.05, paddingTop: "8px", paddingBottom: "8px" }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1, containers);
                handleCategoryWord(1, 1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1, containers);
                handleCategoryWord(-1, 1);
              }
            }}
            className={
              className ||
              `items-center justify-center text-center cursor-grab hover:cursor-grab  rounded-xl  flex flex-col gap-y-2  my-2 box-content`
            }
            layout="position"
          >
            {children}
          </motion.div>
        </motion.section>
      )}
    </>
  );
}

export default DragContainer;
