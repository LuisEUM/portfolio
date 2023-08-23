'use client'
import { useEffect, useLayoutEffect, useState } from "react";

function useElementWidth(ref) {
  const [elementWidth, setElementWidth] = useState(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      setElementWidth(rect.width);
    }

    const handleResize = () => {
      const rect = element.getBoundingClientRect();
      setElementWidth(rect.width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref, elementWidth]);

  return elementWidth;
}

export default useElementWidth;
