import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TailwindGrid from "../../grid/TailwindGrid";
import useCenterOfElement from "@/app/hooks/useCenterOfElement";

const witdh = 66.666667;
const swipeConfidenceThreshold = 5000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

type LuisCarouselProps = {
  height?: number;
};

// Main Function
function LuisCarousel({ height }: LuisCarouselProps) {
  const [images, setImages] = useState([
    {
      order: 2,
      src: "https://picsum.photos/id/202/900/1600",
    },
    {
      order: 3,
      src: "https://picsum.photos/id/203/900/1600",
    },
    {
      order: 4,
      src: "https://picsum.photos/id/204/900/1600",
    },
    {
      order: 5,
      src: "https://picsum.photos/id/199/900/1600",
    },
    {
      order: 6,
      src: "https://picsum.photos/id/199/900/1600",
    },
  ]);

  const [position, setPosition] = useState(1);
  const containerRef = useRef(null); // Ref para el div contenedor
  const center = useCenterOfElement(containerRef);
  const [positions, setPositions] = useState(images.map(() => 0)); // Inicializamos el array de posiciones con ceros.
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  const paginate = (newDirection) => {
    const newPosition = position + newDirection;
    console.log();
    if (newPosition >= -1 && newPosition < images.length - 1) {
      setPosition(newPosition);
    }
  };

  useEffect(() => {
    const newImages = [
      {
        order: 1,
        src: "https://picsum.photos/id/199/900/1600",
      },
      ...images,
      {
        order: 7,
        src: "https://picsum.photos/id/199/900/1600",
      },
    ];
    setImages(newImages); // Actualizar el estado con el nuevo array
  }, []);

  function getMiddleElement(array) {
    const middleIndex = Math.floor((array.length + 1) / 2);
    return middleIndex;
  }

  useEffect(() => {
    const middleElement = getMiddleElement(images);
    console.log("Center of container:", center);
    console.log("Element in the middle of the array:", middleElement);

    return () => {};
  }, [center]);

  useEffect(() => {
    // Actualizar las posiciones al estar montados los elementos.
    const newPositions = images.map(() => 0);
    setPositions(newPositions);
    return () => {};
  }, [images]);

  useLayoutEffect(() => {
    // Calcular las posiciones de los elementos una vez que estén renderizados.
    const newPositions = images.map((_, index) => {
      const element = containerRef.current.children[index];
      const rect = element.getBoundingClientRect();
      return rect.left + rect.width / 2;
    });
    setPositions(newPositions);
  }, [images, containerRef]);

  useLayoutEffect(() => {
    // Calcular el ancho del contenedor y de los elementos
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
      const firstItem = containerRef.current.children[0];
      if (firstItem) {
        setItemWidth(firstItem.clientWidth);
      }
    }
  }, [images, containerRef]);

  const centerScroll = () => {
    // Centrar el scroll
    containerRef.current.scrollTo({
      left:
        itemWidth * Math.floor((images.length + 2) / 2) +
        (itemWidth / 10) * Math.floor((images.length + 2) / 2),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    centerScroll();
  }, [containerWidth, itemWidth]);

  return (
    <>
      <TailwindGrid fullSize>
        <motion.div
          className="flex w-full gap-[6vw]  bg-red-500 col-span-12 px-[20vw] overflow-scroll"
          ref={containerRef}
          layout
        >
          {images.map((project, index) => (
            <motion.section
              style={{ order: project.order }}
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              className={`first:invisible last:invisible min-w-[60vw] relative  bg-zinc-900 rounded-[13.87px] odd:opacity-50 shadow flex flex-col gap-y-2 items-center justify-center text-center px-6 py-5  `}
              onDragEnd={(e, { offset, velocity }) => {
                // const position = info.point.x;
                // console.log(`Position of section ${index}: ${position}`);
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  alert('go after')
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  alert('go after')

                  paginate(-1);
                }
              }}
            >
              <Image
                className=" rounded-full pointer-events-none w-3/12 aspect-square"
                width={700}
                height={700}
                alt={project.src}
                src={project.src}
              />
              <h4 className=" text-center text-white md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw]  font-bold">
                Mark Johnson
              </h4>
              <h5 className=" text-zinc-400 text-xs md:text-[1.4vw] lg:text-[1.2vw] 2xl:text-[0.8vw]  font-medium">
                CEO of XYZ Company.
              </h5>
              <p className="max-w-full   text-slate-50   md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal tracking-tight ">
                I had the pleasure of collaborating with Luis on a design
                project, and the results exceeded my expectations. Their
                attention to detail, creativity, and ability to bring my vision
                to life was outstanding.
              </p>
            </motion.section>
          ))}
        </motion.div>
      </TailwindGrid>
    </>
  );
}

export default LuisCarousel;
