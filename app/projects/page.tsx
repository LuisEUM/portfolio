'use client'
import { useContext, useEffect, useState } from 'react'
import Filter from '../components/filter/filter'
import { LanguageContext } from '../context/languageContext'
import ProjectCard from '../components/card/ProjectCard'
import ResponsiveList from '../components/list/ResponsiveList'
import Pagination from '../components/pagination/Pagination'
// import getMovies from "@/utils/getMovies"
// import { MoviesType } from "@/utils/MovieTypes"
// import Image from 'next/image'

const Portfolio = () => {
  const { text } = useContext(LanguageContext)
  const [key, setKey] = useState('keyName')
  const [search, setSearch] = useState('All')
  const [projects, setProjects] = useState(text.portfolio.projects)
  const [totalPages, setTotalPages] = useState(text.portfolio.projects.length + 12)
  const [totalPagination, setTotalPagination] = useState(1)
  // const [movies, setMovies] = useState<MoviesType | null>(null);

  useEffect(() => {
    setTotalPagination(Math.ceil(totalPages / 6))
    return () => {
    }
  }, [totalPagination])

  // useEffect(() => {
  //   async function fetchData() {
  //     const movies = await getMovies(1500);
  //     setMovies(movies);
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
      <section className="mt- flex items-center flex-col gap-6 max-w-full mb-6">
        <h1 className="text-center text-4xl md:text-6xl font-black uppercase">
          {text.portfolio.title}
        </h1>
        <p className="text-center font-medium md:text-3xl md:w-8/12 uppercase">
          {text.portfolio.description}
        </p>
      </section>
      <section className="w-full flex justify-center items-center content-center pb-10 border-b border-white">
        <Filter
          key={key}
          setKey={setKey}
          projects={projects}
          setProjects={setProjects}
          search={search}
          setSearch={setSearch}
          setTotalPages={setTotalPages} 
          className={undefined}       
          />
      </section>
      <section className=" w-full">
        <ResponsiveList>
          {projects && totalPages > 6
            ? projects
              .filter((projects) => {
                if (search === 'All') {
                  return true
                }
                return projects.categories.reduce((category, next) => {
                  if (category === true) return category
                  if (category === search || next === search) return true
                  return false
                }, false)
              })
              .slice(0, 6)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  image={project.image}
                  url={project.url}
                  // project={project}
                  // setprojects={setprojects}
                  // {...project}
                />
              ))
            : ''
            }
        </ResponsiveList>
        {totalPagination}
        {totalPages > 6 ? <Pagination search={search} totalPagination={totalPagination}/> : ''}
        {/* {results && results.map((movie) => (
        <div
          className="flex flex-col justify-center items-center my-12"
          key={movie.id}
        >
          <h2 className="text-lg font-bold py-6">{movie.original_title}</h2>
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            width={1200}
            height={1200}
            className="w-full lg:w-1/2 h-auto rounded-2xl"
            alt={movie.original_title}
          />
        </div>
      ))} */}
      </section>
    </>
  )
}

export default Portfolio

// const searchString = (searchBar) => {
//   if (searchBar !== '') {
//     searchBar.toLowerCase()
//     const searchedList = items.filter((restaurant) => {
//       const names = restaurant.name.toLowerCase()
//       return names.includes(searchBar)
//     })
//     setSearchedItems(searchedList)
//   } else {
//     setSearchedItems(items)
//   }
// }

// useEffect(() => {
//   restaurantservice
//     .getRestaurants()
//     .then((restaurants) => {
//       setRestaurants(restaurants)
//       setSearchedItems(restaurants)
//     })
//     .catch((error) => console.error(error));
// }, []);