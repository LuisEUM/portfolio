import React, { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      zindex: 0
    }
  },
  center: {
    zindex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zindex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }
  }
}

const initialIndex = 0

function BasicCarrousel ({ slides, className }) {
  const images = slides
  const [page, setPage] = useState(initialIndex)

  const handleClickAfter = useCallback(() => {
    if (page >= images.length - 1) {
      setPage(initialIndex)
    } else {
      setPage((prevCount) => prevCount + 1)
    }
  }, [images.length, page])

  const handleClickBefore = useCallback(() => {
    if (page <= 0) {
      setPage(images.length - 1)
    } else {
      setPage((prevCount) => prevCount - 1)
    }
  }, [images.length, page])

  return (
    <div className={`${className} mx-5 px-5 py-10 w-1/2 h-full max-w-full flex flex-col`}>
      <div className="overflow-hidden rounded-lg md:rounded-xl lg:rounded-3xl shadow relative flex aspect-video justify-center items-center">
        <AnimatePresence initial={false} custom={page}>
          {images &&
            images.map((image, index) => {
              const isCurrent = index === page
              const direction = index - page
              return (
                <motion.div
                  className="absolute h-full w-full rounded-lg md:rounded-xl lg:rounded-3xl top-0 cursor-grab "
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial={!isCurrent ? 'enter' : 'center'}
                  animate={isCurrent ? 'center' : 'exit'}
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (offset.x > 50) {
                      handleClickAfter()
                    } else if (offset.x < -50) {
                      handleClickBefore()
                    }
                  }}
                  whileDrag={{ cursor: 'grabbing' }}
                >
                  <Image
                    width={300}
                    height={300}
                    alt={image}
                    src={image}
                    className="pointer-events-none top-0 h-full w-full absolute object-cover rounded-lg md:rounded-xl lg:rounded-3xl"
                  />
                </motion.div>
              )
            })}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default BasicCarrousel
