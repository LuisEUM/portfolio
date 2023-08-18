import { useState } from "react";

export function useBoxClick(initialPositions, setIndex) {
  const [boxPositions, setBoxPositions] = useState(initialPositions);

  const handleClick = (boxIndex) => {
    const newPositions = [...boxPositions];
    if (boxIndex === 0) {
      setIndex(0)
      if (newPositions[boxIndex] === 2) {
        if (newPositions[2] === 1) {
          newPositions[boxIndex] = 1;
          newPositions[1] = 0;
          newPositions[2] = 2;
        }
        if (newPositions[2] === 0) {
          newPositions[boxIndex] = 1;
          newPositions[1] = 2;
          newPositions[2] = 0;
        }
      } else {
        if (newPositions[2] === 1) {
          newPositions[boxIndex] = 1;
          newPositions[1] = 2;
          newPositions[2] = 0;
        }

        if (newPositions[1] === 1) {
          newPositions[boxIndex] = 1;
          newPositions[1] = 0;
          newPositions[2] = 2;
        }
      }
    }

    if (boxIndex === 1) {
      setIndex(1)
      if (newPositions[boxIndex] === 0) {
        if (newPositions[2] === 1) {
          newPositions[boxIndex] = 1;
          newPositions[2] = 0;
        }
        if (newPositions[0] === 1) {
          newPositions[boxIndex] = 1;
          newPositions[0] = 0;
        }
      } else {
        if (newPositions[2] === 1) {
          newPositions[boxIndex] = 1;
          newPositions[2] = 2;
        }
        if (newPositions[0] === 1) {
          newPositions[boxIndex] = 1;
          newPositions[0] = 2;
        }
      }
    }

    if (boxIndex === 2) {
      setIndex(2)
      if (newPositions[boxIndex] === 0) {
        if (newPositions[0] === 2) {
          newPositions[boxIndex] = 1;
          newPositions[1] = 0;
          newPositions[0] = 2;
        }
        if (newPositions[0] === 1) {
          newPositions[boxIndex] = 1;
          newPositions[1] = 2;
          newPositions[0] = 0;
        }
      } else {
        if (newPositions[1] === 0) {
          newPositions[boxIndex] = 1;
          newPositions[1] = 0;
          newPositions[0] = 2;
        }
        if (newPositions[1] === 1) {
          newPositions[boxIndex] = 1;
          newPositions[1] = 2;
          newPositions[0] = 0;
        }
      }
    }
    setBoxPositions(newPositions);
  };

  return { boxPositions, handleClick };
}
