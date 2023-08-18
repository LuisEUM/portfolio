import { motion } from "framer-motion";
import DragContainer from "./drag-container/DragContainer";
import TailwindGrid from "@/app/components/grid/TailwindGrid";
import { useCarousel } from "./hooks/useCarousel";
import CardsIndex from "./cards/CardsIndex";

type FlexCarouselProps = {
  width?: number;
  reduceGap?: number;
  dataCards?: any[];
  className?: string;
  type?: "classic" | "image" | "testimonial" | "category";
  data?: any[]; // Instead of children prop, use data prop directly.
  boxPositions?: any[];
  handleClick?: any
};

// Main Function
function FlexCarousel({
  dataCards,
  width = 60,
  reduceGap = 2,
  className,
  type = "classic",
  boxPositions,
  handleClick,
}: FlexCarouselProps) {
  const { data, containerRef, centerOrder, paginate, handlePagerClick } =
    useCarousel(dataCards, reduceGap);

  return (
    <>
      <TailwindGrid fullSize>
        <motion.div
          style={{
            paddingLeft: `${(100 - width) / 2}vw`,
            paddingRight: `${(100 - width) / 2}vw`,
            gap: `${10 / reduceGap}vw`,
            willChange: "contents",
          }}
          className="flex w-full col-span-12 overflow-x-hidden overflow-y-clip z-30 sticky"
          ref={containerRef}
          layout="position"
        >
          {data.map((container, index) => {
            return (
              <DragContainer
                containers={data}
                container={container}
                paginate={paginate}
                centerOrder={centerOrder}
                className={className}
                index={index}
                width={width}
              >
                {CardsIndex.filter((Card) => Card.id === type).map(
                  (Card, index) => (
                    <Card.content
                      key={index}
                      centerOrder={centerOrder}
                      container={container}
                      containers={data}
                      index={index}
                      boxPositions={boxPositions}
                      handleClick={handleClick}
                    />
                  )
                )}
              </DragContainer>
            );
          })}
        </motion.div>
        <div className="self-center justify-self-center place-self-center content-center justify-center h-10 flex w-full col-span-12 -z-10">
          {data.map((page, index) => (
            <div
              className={`w-2 h-2 rounded-full mx-2 my-0 cursor-pointer bg-neutral-500 last:hidden first:hidden -z-10 ${
                page.order === centerOrder ? "bg-primary" : "bg-neutral-500"
              }`}
              key={page.order}
              onClick={() => handlePagerClick(page.order)}
            />
          ))}
        </div>
      </TailwindGrid>
    </>
  );
}

export default FlexCarousel;
