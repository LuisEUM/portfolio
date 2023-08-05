"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TailwindGrid from "../../grid/TailwindGrid";
import useScreenWidth from "@/app/hooks/useScreenWitdh";
import LuisItemCarousel from "./LuisItemCarousel";

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

type LuisCarouselProps = {
  width?: number;
  gap?: number;
};

// Main Function
function LuisCarousel({ width = 60, gap = 0.75  }: LuisCarouselProps) {
  const [containers, setContainers] = useState([
    {
      order: 0, //max movements before
      src: "https://picsum.photos/id/199/900/1600",
    },
    ...dataConteiners,
    {
      order: dataConteiners.length + 1, //max movements after
      src: "https://picsum.photos/id/199/900/1600",
    },
  ]);
  const containerRef = useRef(null); // Ref para el div contenedor

  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const screenCenter = useScreenWidth();
  const [centerOrder, setCenterOrder] = useState(
    Math.floor(containers.length / 2)
  );

  // Función para modificar el orden de las imágenes según la dirección
  const paginate = (newDirection, containers) => {
    // Verificar si el último elemento ya tiene el order igual a la mitad más uno
    if (
      newDirection === 1 &&
      containers[containers.length - 1].order ===
        Math.floor(containers.length / 2) + 1
    ) {
      setContainers((prevContainers) => prevContainers);
      return;
    }

    // Verificar si el primer elemento ya tiene el order igual a la mitad menos uno
    if (
      newDirection === -1 &&
      containers[0].order === Math.floor(containers.length / 2) - 1
    ) {
      setContainers((prevContainers) => prevContainers);
      return;
    }

    // Calcula el valor que se restará al order de cada imagen
    const offset = newDirection;

    // Actualiza el estado con el nuevo array de imágenes con el orden modificado
    setContainers((prevContainers) =>
      prevContainers.map((img) => ({
        ...img,
        order:
          (img.order - offset + prevContainers.length) % prevContainers.length,
      }))
    );

    const newCenterOrder = Math.floor(containers.length / 2);
    setCenterOrder(newCenterOrder);
  };

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
        itemWidth * Math.floor(containers.length / 2) +
        (itemWidth / (60  * gap)) * Math.floor(containers.length / 2),
      behavior: "smooth",
    });
  };

  return (
    <>
      <TailwindGrid fullSize>
        <motion.div
          style={{
            paddingLeft: `${(100 - width) / 2}vw`,
            paddingRight: `${(100 - width) / 2}vw`,
            gap: `${1 / (gap)}vw`,
          }}
          className="flex w-full col-span-12 overflow-hidden"
          ref={containerRef}
          layout
        >
          {containers &&
            containers.map((container, index) => (
              <LuisItemCarousel
                paginate={paginate}
                centerOrder={centerOrder}
                key={screenCenter}
                container={container}
                index={index}
                containers={containers}
              />
            ))}
        </motion.div>
      </TailwindGrid>
    </>
  );
}

export default LuisCarousel;
