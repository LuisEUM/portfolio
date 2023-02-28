'use client'
import { useContext, useState } from 'react'
import Filter from '../components/filter/filter'
import { LanguageContext } from '../context/languageContext'

export default function Portfolio () {
  const { text } = useContext(LanguageContext)
  const [key, setKey] = useState('keyName')

  const [items, setItems] = useState(
    [{
      image: 'this is an image',
      name: 'first imagge',
      category: 'ux/ui',
      tags: ['figma', 'elementor']
    },
    {
      image: 'this is an image',
      name: 'second imagge',
      category: 'web develover',
      tags: ['nextjs', 'reactjs']
    }]
  )

  const [searchedItems, setSearchedItems] = useState(
    [{
      image: 'this is an image',
      name: 'first imagge',
      category: 'ux/ui',
      tags: ['figma', 'elementor']
    },
    {
      image: 'this is an image',
      name: 'second imagge',
      category: 'web develover',
      tags: ['nextjs', 'reactjs']
    }]
  )

  const searchString = (searchBar) => {
    if (searchBar !== '') {
      searchBar.toLowerCase()
      const searchedList = items.filter((restaurant) => {
        const names = restaurant.name.toLowerCase()
        return names.includes(searchBar)
      })
      setSearchedItems(searchedList)
    } else {
      setSearchedItems(items)
    }
  }

  // useEffect(() => {
  //   restaurantservice
  //     .getRestaurants()
  //     .then((restaurants) => {
  //       setRestaurants(restaurants)
  //       setSearchedItems(restaurants)
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <>
      <section className='mt-44 flex items-center flex-col gap-6 max-w-full mb-6'>
        <h1 className='text-center text-4xl md:text-6xl font-black uppercase'>{text.portfolio.header}</h1>
        <p className='text-center font-medium md:text-3xl md:w-8/12 uppercase'>{text.portfolio.description}</p>
      </section>
      <section className='w-full flex justify-center items-center content-center '>
        <Filter key={key} setKey={setKey} items={searchedItems} setItems={setSearchedItems} />
      </section>
    </>
  )
}
