'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import Image from 'next/image'
import ArrowButton from './ArrowButton'

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

export default function Carrousel ({ numbers, bullets, thumbnails, arrows, className, immagesArray, longCard }) {
  const [page, setPage] = useState(initialIndex)
  const images = immagesArray
  const paginationBullets = bullets || false
  const paginationNumbers = numbers || false
  const paginationArrows = arrows || false
  const paginationThumbnails = thumbnails || false
  const imageRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

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

  
  useEffect(() => {
    const interval = setInterval(() => {
      handleClickAfter()
    }, 5000)
    return () => clearInterval(interval)
  }, [handleClickAfter, page])

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: imageRef.current.offsetWidth,
        height: imageRef.current.offsetHeight
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={`${className}  max-w-full flex flex-col`}>
      <div className={`overflow-hidden rounded-lg md:rounded-xl lg:rounded-3xl shadow relative flex aspect-video ${longCard ? 'max-h-[667px] h-[667px] justify-center content-start items-start' : ' justify-center items-center'}`}>
        <AnimatePresence initial={false} custom={page}>
          {images && images.map((image, index) => {
            const isCurrent = index === page
            const direction = index - page
            return (
              <motion.div
                className='absolute h-full w-full rounded-lg md:rounded-xl lg:rounded-3xl top-0 cursor-grab '
                key={index}
                custom={direction}
                variants={variants}
                initial={!isCurrent ? 'enter' : 'center'}
                animate={isCurrent ? 'center' : 'exit'}
                exit='exit'
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag='x'
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
                  ref={imageRef}
                  src={image}
                  className={`pointer-events-none top-0 h-full w-full ${longCard ? 'absolute object-scale-down' : 'absolute object-cover rounded-lg md:rounded-xl lg:rounded-3xl'} `}
                />
              </motion.div>
            )
          })}
        </AnimatePresence>
        {paginationArrows && (
          <>
            <div className='justify-center items-center select-none cursor-pointer flex font-bold z-50 w-10 h-10 text-lg rounded-full  absolute right-3 top-1/2 ' onClick={handleClickAfter}>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-full h-full m-3' viewBox='0 0 6.52 11.15'>
                <path d='m.43.43l5.43,4.69c.3.26.3.72,0,.98L.43,10.71' stroke='#01ADE4' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0.86px' fill='none' />
              </svg>
            </div>
            <div className='justify-center items-center select-none cursor-pointer flex font-bold z-50 w-10 h-10 text-lg rounded-full  absolute left-3 top-1/2 -scale-100' onClick={handleClickBefore}>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-full h-full m-3' viewBox='0 0 6.52 11.15'>
                <path d='m.43.43l5.43,4.69c.3.26.3.72,0,.98L.43,10.71' stroke='#01ADE4' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0.86px' fill='none' />
              </svg>
            </div>
          </>
        )}
      </div>

      {paginationBullets && (
        <>
          <div style={{ bottom: `calc(${1 / dimensions.width * 1 / 0.85 * 10000}%)` }} className={`flex self-center justify-self-center place-self-center content-center justify-center my-2 ${longCard && 'absolute'}`}>
            {images.map((image, index) => {
              const isCurrent = index === page
              return (
                <div
                  className={`w-2 h-2 rounded-full  mx-2 my-0 cursor-pointer ${isCurrent ? 'bg-primary' : 'bg-neutral-500'} `}
                  onClick={() => setPage(index)}
                  key={index}
                />
              )
            })}
          </div>
        </>
      )}

      {paginationThumbnails && (
        <div className='relative flex items-center justify-center'>
          <div className='flex px-5 self-center justify-self-center place-self-center content-center justify-center my-4'>
            {images.map((image, index) => {
              const isCurrent = index === page
              return (
                <div
                  className='mx-2 my-auto cursor-pointer aspect-video flex self-center justify-self-center place-self-center content-center justify-center'
                  onClick={() => setPage(index)}
                  key={index}
                >
                  <Image
                    width={300}
                    height={300}
                    alt={image}
                    ref={imageRef}
                    src={image}
                    className={`w-full h-full rounded lg:rounded-md object-cover ${isCurrent ? 'border border-primary' : 'hover:border hover:border-primary'} `}
                  />
                </div>
              )
            })}
          </div>
          <ArrowButton handleClickBefore={handleClickBefore} handleClickAfter={handleClickAfter}/>
          <ArrowButton left handleClickBefore={handleClickBefore} handleClickAfter={handleClickAfter}/>
        </div>
      )}

      {paginationNumbers && (
        <>
          <div className='flex content-center justify-center w-full'>
            <div className='mr-2'>{page + 1}</div>
            <div className=''>/ </div>
            <div className='ml-2'>{images.length}</div>
          </div>
        </>
      )}

    </div>
  )
}

Carrousel.propTypes = {
  heigth: PropTypes.string
}
