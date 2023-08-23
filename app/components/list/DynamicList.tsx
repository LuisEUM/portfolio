'use client'
import { useBoxClick } from "./useBoxClick";
import { motion } from "framer-motion";
import DynamicListItem from "./DynamicListItem";

function DynamicList({ setIndex, categories }) {
  const { boxPositions, handleClick } = useBoxClick([0, 1, 2], setIndex);

  return (
    <>
      <motion.div
        className="lg:grid hidden col-span-4 grid-cols-4 md:col-span-8 md:grid-cols-8 lg:col-span-11 lg:grid-cols-11 w-full gap-4 "
        layout
        key="DinamycList"
      >
        {categories.map((category, index) => (
          <DynamicListItem
            key={index}
            category={category}
            index={index}
            boxPositions={boxPositions}
            handleClick={handleClick}
          />
        ))}
      </motion.div>
    </>
  );
}

export default DynamicList;
