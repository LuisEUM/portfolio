'use client'
import { useEffect, useState, useRef } from 'react'
import './textSlider.css'

function TextSlider () {
  const sliderContentRef = useRef(null)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderContentWidth, setSliderContentWidth] = useState(0)

  useEffect(() => {
    const sliderContentElement = sliderContentRef.current
    const sliderElement = sliderContentElement.parentNode
    const handleResize = () => {
      setSliderWidth(sliderElement.offsetWidth)
      setSliderContentWidth(sliderContentElement.offsetWidth)
    }

    handleResize() // Set initial sizes
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const sliderContentElement = sliderContentRef.current
    const interval = setInterval(() => {
      if (sliderContentWidth > sliderWidth) {
        sliderContentElement.style.transform = `translateX(-${sliderContentWidth}px)`
        sliderContentElement.style.transition = 'none'

        setTimeout(() => {
          sliderContentElement.style.transform = 'translateX(0px)'
          sliderContentElement.style.transition = '30s linear'
        }, 100)
      }
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [sliderContentWidth, sliderWidth])

  let content = 'UX/UI - '

  return (
    <>
      <div className="slider w-full -rotate-90 origin-top-right absolute -left-48 top-0 pointer-events-none">
        <div className="slider-content whitespace-nowrap z-100 w-[100vh] text flex " ref={sliderContentRef}>
          <p className='text-zinc-800 text-opacity-40 text-[135px] font-black'>
          {new Array(50).fill(0).map((_, i) => (
            content
          ))
          }
          </p>
        </div>
      </div>
    </>
  )
}

export default TextSlider
