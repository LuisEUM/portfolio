"use client";
import { useContext, useEffect, useState } from "react";
import FilterCategories from "../components/filter/FilterCategories";
import { LanguageContext } from "../context/languageContext";
import ProjectCard from "../components/card/ProjectCard";
import ResponsiveList from "../components/list/ResponsiveList";
import Pagination from "../components/pagination/Pagination";
// import getMovies from "@/utils/getMovies"
// import { MoviesType } from "@/utils/MovieTypes"
// import Image from 'next/image'
import { useSearchParams } from "next/navigation";
import useScreenWidth from "../components/ui/carousel/flex-carousel/hooks/useScreenWitdh";
import TailwindGrid from "../components/grid/TailwindGrid";
import { AnimatePresence } from "framer-motion";

// This component passed as a fallback to the Suspense boundary
// will be rendered in place of the search bar in the initial HTML.
// When the value is available during React hydration the fallback
// will be replaced with the `<SearchBar>` component.
function SearchBarFallback() {
  return <>placeholder</>;
}

const Portfolio = () => {
  const { text } = useContext(LanguageContext);
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("category"));
  const [projects, setProjects] = useState(text.portfolio.projects);
  const [totalPages, setTotalPages] = useState(text.portfolio.projects.length);
  const [totalPagination, setTotalPagination] = useState(1);
  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page"))
  );
  const [contentStart, setContentStart] = useState((currentPage - 1) * 6);
  const [contentEnd, setContentEnd] = useState(currentPage * 6);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    setTotalPagination(Math.ceil(totalPages / 6));
    setContentEnd(currentPage * 6);
    setContentStart((currentPage - 1) * 6);

    return () => {};
  }, [totalPagination, currentPage]);

  return (
    <>
      <TailwindGrid>
        <section className="mt- flex items-center flex-col gap-6 w-full mb-6  col-span-full">
          <h1 className="font-black pr-[min(3rem,1.5vw)] md:pr-3 xl:pr-4 leading-[min(3rem,9.5vw)] text-[min(3rem,9.5vw)] md:leading-[2.5vw] md:text-[5vw] lg:text-[5.3vw] lg:leading-[5.3vw] xl:text-[5.4vw] xl:leading-[5.4vw] 2xl:text-[5.5vw] 2xl:leading-[5.5vw]  uppercase">
            {text.portfolio.title}
          </h1>
          <p className="self-center text-center md:self-start md:text-start leading-[min(3rem,3.5vw)] text-[min(3rem,3.5vw)] md:text-[1.8vw] md:leading-[1.8vw] lg:text-[1.5vw] lg:leading-[1.5vw] font-medium mx-auto uppercase">
            {text.portfolio.description}
          </p>
        </section>
      </TailwindGrid>

      <section className="w-full flex justify-center items-center content-center pb-10 border-b border-white">
        <FilterCategories
          search={search}
          setSearch={setSearch}
          className={undefined}
          setCurrentPage={setCurrentPage}
          key={screenWidth}
        />
      </section>

      <TailwindGrid>
        <div className=" self-center  col-span-full w-full justify-center items-center flex flex-col">
          <ResponsiveList
            tablet={3}
            className="pt-12 w-full max-w-full lg:min-h-[35vw]"
          >
            <AnimatePresence mode="wait">
              {projects &&
                totalPages > 6 &&
                projects
                  .filter((projects) => {
                    if (search === "All") {
                      return true;
                    }
                    return projects.categories.reduce((category, next) => {
                      if (category === true) return category;
                      if (category === search || next === search) return true;
                      return false;
                    }, false);
                  })
                  .slice(contentStart, contentEnd)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
            </AnimatePresence>
          </ResponsiveList>
        </div>
      </TailwindGrid>
      <section className=" w-full mt-5 mb-10">
        {projects.filter((projects) => {
          if (search === "All") {
            return true;
          }
          return projects.categories.reduce((category, next) => {
            if (category === true) return category;
            if (category === search || next === search) return true;
            return false;
          }, false);
        }).length > 6 && (
          <Pagination
            key={currentPage}
            search={search}
            totalPagination={totalPagination}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </section>
    </>
  );
};

export default Portfolio;

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
