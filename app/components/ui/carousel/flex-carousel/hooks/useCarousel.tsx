"use client";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { usePagination } from "./usePagination";
import useScreenWidth from "./useScreenWitdh";

export function useCarousel(dataConteiners, reduceGap = 2) {
  const containerRef = useRef(null); // Ref para el div contenedor
  const [containerWidth, setContainerWidth] = useState(null);
  const [itemWidth, setItemWidth] = useState(null);
  const screenCenter = useScreenWidth();
  const { data, centerOrder, paginate } = usePagination(dataConteiners);
  const [isPending, startTransition] = useTransition();

  useLayoutEffect(() => {
    // Calcular el ancho del contenedor y de los elementos
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
      const firstItem = containerRef.current.children[0];
      if (firstItem) {
        setItemWidth(firstItem.clientWidth);
      }

      console.log(itemWidth, "el width del item que busco");
      console.log(
        containerWidth,
        "el width del container que busco",
        containerRef.current.client
      );
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
        containerWidth <= 360
          ? itemWidth * Math.floor(data.length / 2) 
          : itemWidth * Math.floor(data.length / 2) +
            (itemWidth / (6 * reduceGap)) * Math.floor(data.length / 2),
      behavior: "smooth",
    });
  };

  const handlePagerClick = (clickedOrder) => {
    const direction = clickedOrder - centerOrder;
    startTransition(() => {
      paginate(direction, data);
    });
  };

  return {
    data,
    containerRef,
    centerOrder,
    paginate,
    handlePagerClick,
    itemWidth,
    containerWidth,
  };
}
