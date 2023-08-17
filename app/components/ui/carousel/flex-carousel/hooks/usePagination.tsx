
import { useState } from "react";

type Item = {
  order: number;
  src?: string;
};

type PaginationResult = {
  data: Item[];
  centerOrder: number;
  paginate: (newDirection: number, data: Item[]) => void;
};

export function usePagination(initialData: Item[]): PaginationResult {

  const [data, setData] = useState<Item[]>([
    {
      order: 0,
    },
    ...initialData,
    {
      order: initialData.length + 1,
    },
  ]);

  const [centerOrder, setCenterOrder] = useState<number>(
    Math.floor(data.length / 2)
  );

  const paginate = (newDirection: number) => {
    // Verificar si el último elemento ya tiene el order igual a la mitad más uno
    if (
      newDirection === 1 &&
      data[data.length - 1].order === Math.floor(data.length / 2) + 1
    ) {
      setData((prevData) => prevData);
      return;
    }

    // Verificar si el primer elemento ya tiene el order igual a la mitad menos uno
    if (
      newDirection === -1 &&
      data[0].order === Math.floor(data.length / 2) - 1
    ) {
      setData((prevData) => prevData);
      return;
    }

    // Calcula el valor que se restará al order de cada imagen
    const offset = newDirection;

    // Actualiza el estado con el nuevo array de imágenes con el orden modificado
    setData((prevData) =>
      prevData.map((img) => ({
        ...img,
        order: (img.order - offset + prevData.length) % prevData.length,
      }))
    );

    const newCenterOrder = Math.floor(data.length / 2);
    setCenterOrder(newCenterOrder);
  };

  return {
    data,
    centerOrder,
    paginate,
  };
}

