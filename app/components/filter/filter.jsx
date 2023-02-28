'use client'
import { LanguageContext } from '../../context/languageContext'
import { useDragControls, useMotionValue, motion } from 'framer-motion'
import { useContext, useEffect, useRef, useState } from 'react'

export default function Filter ({ searchedItems, setSearchedItems, setKey, key, className }) {
  const { text } = useContext(LanguageContext)
  const [search, setSearch] = useState('All')
  const controls = useDragControls()
  const handleX = useMotionValue(0)
  const [categoriesWidth, setCategoriesWidth] = useState(0)
  const constraintsRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [draggable, setDraggable] = useState(windowWidth >= categoriesWidth)

  useEffect(() => {
    const categoriesDiv = document.getElementById('categories')
    setCategoriesWidth(categoriesDiv.offsetWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setKey(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    if (windowWidth >= categoriesWidth) {
      setDraggable(true)
    }
    if (windowWidth <= categoriesWidth) {
      setDraggable(false)
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [categoriesWidth])

  const handleClick = (event) => {
    const { name } = event.currentTarget
    setSearch(name)
  }

  function startDrag (event) {
    controls.start(event)
  }

  console.log(key)
  return (
    <>
      <div
        key={key}
        onPointerDown={startDrag}
        ref={constraintsRef}
        className={`${draggable ? 'justify-center hover:cursor-default focus:cursor-grabbing target:cursor-grabbing' : 'justify-start hover:cursor-grab'} h-14 flex items-center  overflow-hidden  ${className}`}
      >
        <motion.div
          dragPropagation
          drag={windowWidth >= categoriesWidth ? false : 'x'}
          dragConstraints={constraintsRef}
          dragControls={controls}
          dragElastic={0}
          style={{ x: handleX }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          id="categories"
          className="h-28 flex flex-row justify-start items-center text-center self-center"
          // onDragEnd={(event, info) => {
          //   if (info.offset.x > categoriesWidth) {
          //     alert('yes')
          //   }
          // }}
          whileTap={{ cursor: (draggable ? 'default' : 'grabbing') }}
        >
          <button
            className={`w-20 ml-5 mr-2 ${
              search === 'All'
                ? 'transition-all text-primary border-primary border font-normal tracking-wider rounded-full py-2 px-4 uppercase'
                : 'transition-all hover:text-primary hover:border-primary border-white border text-white font-normal tracking-wider rounded-full py-2 px-4  uppercase'
            }`}
            value="All"
            name="All"
            onClick={handleClick}
          >
            All
          </button>

          {text.portfolio.categories.map((category, i) => {
            return (
                <button
                  key={category.id + i}
                  className={`mx-2 flex items-center ${search === category.name
                    ? 'transition-all text-primary border-primary border font-normal tracking-wider rounded-full py-2 px-4 uppercase '
                    : 'transition-all hover:text-primary hover:border-primary border-white border text-white font-normal tracking-wider rounded-full py-2 px-4  uppercase'}`}
                  name={category.name}
                  onClick={handleClick}
                >
                  {category.name.split('')
                    .map((word, index) => {
                      if (word === '_') {
                        return <span key={word + index} className='text-transparent'>{word}</span>
                      }
                      return (
                        <span key={word + index}>
                          {word}
                        </span>
                      )
                    })
                  }
                </button>
            )
          })}
        </motion.div>
      </div>
    </>
  )
}
