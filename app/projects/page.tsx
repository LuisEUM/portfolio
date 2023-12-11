"use client";
import { Suspense, useContext, useEffect, useState } from "react";
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
        <section className="mt-20 md:mt-24 lg:mt-20 md:pt-8 flex items-center flex-col gap-6 w-full mb-6  col-span-full">
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
            <AnimatePresence  >
              {projects &&
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
                    <Suspense
                      fallback={
                        <div role="status">
                          <svg
                            aria-hidden="true"
                            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
                      }
                    >
                      <ProjectCard key={project.id} project={project} />
                    </Suspense>
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
