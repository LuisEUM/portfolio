'use client'
import { LanguageContext } from '../../context/languageContext'
import { useDragControls, useMotionValue, motion } from 'framer-motion'
import { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

interface FilterCategories_Props {
  search: string;
  className: string;
  setCurrentPage: (search: number) => void;
  setSearch: (search: string) => void;
}

export default function FilterCategories ({ search, setSearch, className, setCurrentPage } : FilterCategories_Props) {
  const { text } = useContext(LanguageContext)
  const controls = useDragControls()
  const handleX = useMotionValue(0)
  const [categoriesWidth, setCategoriesWidth] = useState(0)
  const constraintsRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const [draggable, setDraggable] = useState(windowWidth >= categoriesWidth)
  const [key, setKey] = useState('keyName')
  const categoriesRef = useRef(null)

  useEffect(() => {
    const categoriesDiv = document.getElementById('categories')
    setCategoriesWidth(categoriesDiv.offsetWidth)

    const handleResize = () => {
      const filterContainerWidth = constraintsRef.current.offsetWidth;
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      setDraggable(newWindowWidth >= filterContainerWidth);

      if (newWindowWidth >= filterContainerWidth) {
        handleX.set(0);
      }
    };

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
    const { id } = event.currentTarget
    setSearch(id)
    setCurrentPage(1)
  }

  function startDrag (event) {
    controls.start(event)
  }

  return (
    <>
      <div
        key={key}
        onPointerDown={startDrag}
        ref={constraintsRef}
        className={`${draggable ? 'justify-center hover:cursor-default focus:cursor-grabbing target:cursor-grabbing' : 'justify-start hover:cursor-grab'} h-14 flex items-center  overflow-hidden  ${className}`}
      >
        <motion.div
          ref={categoriesRef}
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
          <Link
            href={'projects' + '?' + 'category=' + 'All' + '&' + 'page=' + 1 }
            className={`w-20 ml-5 mr-2 ${
              search === 'All'
                ? 'transition-all text-primary border-primary border font-normal tracking-wider rounded-full py-2 px-4 uppercase'
                : 'transition-all hover:text-primary hover:border-primary border-white border text-white font-normal tracking-wider rounded-full py-2 px-4  uppercase'
            }`}
            id='All'
            onClick={handleClick}
          >
            All
          </Link>

          {text && text.portfolio.categories.map((category, i) => {
            return (
                <Link
                  href={'projects' + '?' + 'category=' + category.name + '&' + 'page=' + 1 }
                  key={category.name}
                  className={`mx-2 flex items-center ${search === category.name
                    ? 'transition-all text-primary border-primary border font-normal tracking-wider rounded-full py-2 px-4 uppercase '
                    : 'transition-all hover:text-primary hover:border-primary border-white border text-white font-normal tracking-wider rounded-full py-2 px-4  uppercase'}`}
                  id={category.name}
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
                </Link>
            )
          })}
        </motion.div>
      </div>

    </>
  )
}
