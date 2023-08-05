"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TailwindGrid from "../../grid/TailwindGrid";
import useScreenWidth from "@/app/hooks/useScreenWitdh";
import Image from "next/image";
// import LuisItemCarousel from "./LuisItemCarousel";

const swipeConfidenceThreshold = 5000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const dataImages = [
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

type LuisCarouselProps = {
  height?: number;
};

// Main Function
function LuisCarousel({ height }: LuisCarouselProps) {
  const [images, setImages] = useState(dataImages);

  const containerRef = useRef(null); // Ref para el div contenedor
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const screenCenter = useScreenWidth();
  const activeSides = Math.floor(images.length / 2);
  const edgeLeft = activeSides - 1;
  const edgeRigth = activeSides + 1;

  // Función para modificar el orden de las imágenes según la dirección
  const paginate = (newDirection) => {
    // Verificar si el último elemento ya tiene el order igual a la mitad más uno
    if (
      newDirection === 1 &&
      images[images.length - 1].order === Math.floor(images.length / 2) + 1
    ) {
      setImages((prevImages) => prevImages);
      return;
    }

    // Verificar si el primer elemento ya tiene el order igual a la mitad menos uno
    if (
      newDirection === -1 &&
      images[0].order === Math.floor(images.length / 2) - 1
    ) {
      setImages((prevImages) => prevImages);
      return;
    }

    // Calcula el valor que se restará al order de cada imagen
    const offset = newDirection;

    // Actualiza el estado con el nuevo array de imágenes con el orden modificado
    setImages((prevImages) =>
      prevImages.map((img) => ({
        ...img,
        order: (img.order - offset + prevImages.length) % prevImages.length,
      }))
    );
  };

  useEffect(() => {
    const newImages = [
      {
        order: 0, //max movements before
        src: "https://picsum.photos/id/199/900/1600",
      },
      ...images,
      {
        order: images.length + 1, //max movements after
        src: "https://picsum.photos/id/199/900/1600",
      },
    ];
    setImages(newImages); // Actualizar el estado con el nuevo array
  }, []);


  useLayoutEffect(() => {
    // Calcular el ancho del contenedor y de los elementos
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
      const firstItem = containerRef.current.children[0];
      if (firstItem) {
        setItemWidth(firstItem.clientWidth);
      }
    }
    centerScroll();
  }, [containerRef, screenCenter]);

  useEffect(() => {
    centerScroll();
    return () => {};
  }, [containerWidth, itemWidth]);

  const centerScroll = () => {
    // Centrar el scroll
    containerRef.current.scrollTo({
      left:
        itemWidth * Math.floor(images.length / 2) +
        (itemWidth / 10) * Math.floor(images.length / 2),
      behavior: "smooth",
    });
  };

  return (
    <>
      <TailwindGrid fullSize>
        <motion.div
          className="flex w-full gap-[6vw]   col-span-12 px-[20vw] overflow-scroll"
          ref={containerRef}
          layout
        >
          {images &&
            images.map((project, index) => (
              // <LuisItemCarousel
              //   project={project}
              //   index={index}
              //   paginate={paginate}
              //   projects={images}
              // />
              <motion.section
                layoutId={`${index}`}
                style={{ order: project.order }}
                key={index}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                whileDrag={{ scale: 1.05, cursor: "grabbing" }}
                whileTap={{ scale: 0.95, cursor: "grabbing" }}
                whileHover={{ scale: 1.05, cursor: "grab" }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={` ${project.order > edgeRigth && "invisible"} ${
                  project.order < edgeLeft && "invisible"
                } ${
                  project.order !== activeSides
                    ? " opacity-50 "
                    : " opacity-100 z-20"
                } hover:cursor-grab last:invisible first:invisible min-w-[60vw] relative   bg-zinc-900 rounded-[13.87px]  shadow flex flex-col gap-y-2 items-center justify-center text-center px-6 py-5 my-10 `}
                onDragEnd={(e, { offset, velocity }) => {
                  // const position = info.point.x;
                  // console.log(`Position of section ${index}: ${position}`);
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              >
                <Image
                  className={` rounded-full pointer-events-none w-3/12 aspect-square object-cover`}
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
                  attention to detail, creativity, and ability to bring my
                  vision to life was outstanding.
                </p>
              </motion.section>
            ))}
        </motion.div>
      </TailwindGrid>
    </>
  );
}

export default LuisCarousel;
