'use client'
import { useEffect, useState } from "react";

function useCenterOfElement(ref) {
  const [center, setCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setCenter({ x: centerX, y: centerY });
    }

    const handleResize = () => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setCenter({ x: centerX, y: centerY });
    };

    window.addEventListener("resize", handleResize);
    console.log(center)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return center;
}

export default useCenterOfElement;