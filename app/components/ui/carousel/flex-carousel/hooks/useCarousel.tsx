import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePagination } from "./usePagination";
import useScreenWidth from "./useScreenWitdh";

export function useCarousel(dataConteiners, reduceGap = 2) {
  const containerRef = useRef(null); // Ref para el div contenedor
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const screenCenter = useScreenWidth();
  const { data, centerOrder, paginate } = usePagination(dataConteiners);

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
        itemWidth * Math.floor(data.length / 2) +
        (itemWidth / (6 * reduceGap)) * Math.floor(data.length / 2),
      behavior: "smooth",
    });
  };

  const handlePagerClick = (clickedOrder) => {
    const direction = clickedOrder - centerOrder;
    paginate(direction, data);
  };

  return { data, containerRef, centerOrder, paginate, handlePagerClick };
}
