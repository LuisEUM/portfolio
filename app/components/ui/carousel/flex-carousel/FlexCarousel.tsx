import { motion } from "framer-motion";
import DragContainer from "./drag-container/DragContainer";
import TailwindGrid from "@/app/components/grid/TailwindGrid";
import { useCarousel } from "./hooks/useCarousel";
import CardsIndex from "./cards/CardsIndex";

const dataConteiners = [
  {
    order: 1,
    src: "https://picsum.photos/id/202/900/1600",
  },
  {
    order: 2,
    src: "https://picsum.photos/id/203/900/1600",
  },
  {
    order: 3,
    src: "https://picsum.photos/id/204/900/1600",
  },
  {
    order: 4,
    src: "https://picsum.photos/id/201/900/1600",
  },
  {
    order: 5,
    src: "https://picsum.photos/id/199/900/1600",
  },
];

type FlexCarouselProps = {
  width?: number;
  reduceGap?: number;
  dataCards?: any[];
  children?: (data: any[]) => any[];
  className?: string;
  type?: "classic" | "image"| "testimonial";
  data?: any[]; // Instead of children prop, use data prop directly.
};

// Main Function
function FlexCarousel({
  dataCards,
  width = 60,
  reduceGap = 2,
  children,
  className,
  type = "classic"
}: FlexCarouselProps) {
  const { data, containerRef, centerOrder, paginate, handlePagerClick } =
    useCarousel(dataCards || dataConteiners, reduceGap);

  // Apply the children render prop to modify the data array

  return (
    <>
      <TailwindGrid fullSize>
        <motion.div
          style={{
            paddingLeft: `${(100 - width) / 2}vw`,
            paddingRight: `${(100 - width) / 2}vw`,
            gap: `${10 / reduceGap}vw`,
          }}
          className="flex w-full col-span-12 overflow-hidden"
          ref={containerRef}
          layout
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

                {CardsIndex.filter((Card) => Card.id === type).map((Card, index) => (
                  <Card.content key={index} centerOrder={centerOrder} container={container} containers={data} index={index}/>
                ))}
              </DragContainer>
            );
          })}
        </motion.div>
      </TailwindGrid>
      <TailwindGrid>
        <div className="self-center justify-self-center place-self-center content-center justify-center h-10 flex w-full col-span-12 z-40">
          {data.map((page, index) => (
            <div
              className={`w-2 h-2 rounded-full mx-2 my-0 cursor-pointer bg-neutral-500 last:hidden first:hidden ${
                page.order === centerOrder
                  ? "bg-primary"
                  : "bg-neutral-500"
              } `}
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
