import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  'https://picsum.photos/id/200/900/1600',
  'https://picsum.photos/id/202/900/1600',
  'https://picsum.photos/id/203/900/1600',
  'https://picsum.photos/id/204/900/1600',
  'https://picsum.photos/id/199/900/1600'
]
const size = 66.666667
const swipeConfidenceThreshold = 5000

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

// Main Function
function CarouselSlider () {
  const [position, setPosition] = useState(1)

  const paginate = (newDirection) => {
    const newPosition = position + newDirection
    console.log()
    if (newPosition >= -1 && newPosition < images.length - 1) {
      setPosition(newPosition)
    }
  }

  return (
    <>
      <section
        style={{ height: `${size / 1.78}vw` }}
        className=" w-full md:hidden"
      />
      <section className="absolute max-h-min  z-10 overflow-hidden max-w-full flex items-center justify-center md:hidden ">
        <div
          style={{ height: `${size / 1.78}vw` }}
          className=" w-screen  overflow-hidden  self-center "
        >
          {images.map((image, index) => (
            <motion.div
              style={{ width: `${size}vw` }}
              className="   aspect-video bg-zinc-900  max-h-full rounded-xl overflow-hidden absolute  "
              key={index}
              animate={{
                left: `${(index - position) * size - 50.5}vw`,
                scale: index === position + 1 ? 1 : 0.9
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
            >
              <Image
                src={image}
                alt="d"
                width={1920}
                height={1080}
                className="mx-auto  max-h-full aspect-video object-cover pointer-events-none rounded-xl"
                style={{ opacity: index === position + 1 ? 1 : 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <div className="flex self-center justify-self-center place-self-center content-center justify-center my-2 absolute -bottom-10 z-40 md:hidden">
        {images.map((image, index) => {
          const isCurrent = index === position + 1
          return (
            <div
              className={`w-2 h-2 rounded-full  mx-2 my-0 cursor-pointer ${
                isCurrent ? 'bg-primary' : 'bg-neutral-500'
              } `}
              onClick={() => setPosition(index - 1)}
              key={index}
            />
          )
        })}
      </div>
    </>
  )
}

export default CarouselSlider
