"use client";
import { useContext, useEffect, useState } from "react";
import Filter from "../components/filter/Filter";
import { LanguageContext } from "../context/languageContext";
import ProjectCard from "../components/card/ProjectCard";
import ResponsiveList from "../components/list/ResponsiveList";
import Pagination from "../components/pagination/Pagination";
// import getMovies from "@/utils/getMovies"
// import { MoviesType } from "@/utils/MovieTypes"
// import Image from 'next/image'
import { useSearchParams } from "next/navigation";

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
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page"))
  );
  const [contentStart, setContentStart] = useState((currentPage - 1) * 6);
  const [contentEnd, setContentEnd] = useState(currentPage * 6);

  useEffect(() => {
    setTotalPagination(Math.ceil(totalPages / 6));
    setContentEnd(currentPage * 6);
    setContentStart((currentPage - 1) * 6);

    console.log(currentPage);
    console.log(Number(searchParams.get("page")));
    return () => {};
  }, [totalPagination, currentPage]);

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
          projects={projects}
          search={search}
          setSearch={setSearch}
          className={undefined}
          setCurrentPage={setCurrentPage}
        />
      </section>
      <section className=" w-full">
          <ResponsiveList>
            {projects && totalPages > 6
              ? projects
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
                    <ProjectCard
                      key={project.id}
                      image={project.image}
                      url={project.url}
                      // project={project}
                      // setprojects={setprojects}
                      // {...project}
                    />
                  ))
              : ""}
          </ResponsiveList>

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
          )
          }
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
