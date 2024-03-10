"use client";
import TextSlider from "@/app/components/slider/TextSlider";
import SocialButtons from "@/app/components/ui/contact/SocialButtons";
import Carousel from "@/app/components/ui/carousel/Carousel";
import { LanguageContext } from "@/app/context/languageContext";
import { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Project() {
  const { text } = useContext(LanguageContext);
  const currentPathname = usePathname().replace(/^\/projects\//, "");
  const project = text.portfolio.projects.find(
    (project) => project.url === currentPathname
  );
  const projectId = project.id ? project.id : 0;
  const dataProject = text.portfolio.projects[projectId - 1];

  return (
    <div className="lg:flex  w-screen">
      <section className="w-full lg:w-[60%] lg:min-h-[50vh]  relative overflow-hidden flex  justify-center items-center pt-20 pb-[2vw] lg:pt-0 lg:pb-0">
        <div className=" lg:w-4/5 z-10 ">
          <Carousel
            numbers={false}
            bullets={false}
            thumbnails
            arrows={false}
            longCard={false}
            className="mx-5 px-5 py-10"
            immagesArray={dataProject.gallery}
          />
        </div>

        <TextSlider />
      </section>
      <section className="w-full lg:w-[40%] lg:min-h-screen bg-zinc-300 text-zinc-800 flex-row justify-center items-center  px-11 flex py-14 lg:py-36">
        <div className="my-auto">
          <div className="border-l px-5 border-zinc-800 flex flex-col ">
            <h1 className="text-stone-900 text-3xl font-black uppercase ">
              {dataProject.title}
            </h1>
            <div className="mt-1 flex flex-wrap gap-2 items-center align-middle justify-left ">
              <h2 className="text-zinc-800 text-xs font-bold uppercase  ">
                {dataProject.categories &&
                  dataProject.categories.map((category, index) => (
                    <Link
                      href={"/projects?category=" + category + "&page=1"}
                      className="bg-zinc-800/10 hover:bg-zinc-800/30 text-zinc-600 text-xs font-semibold mr-2 px-2.5 py-0.5 first:mt-0 mt-2 rounded border border-zinc-600 inline-flex items-center justify-center"
                    >
                      {category}
                    </Link>
                  ))}
              </h2>
            </div>
          </div>
          <div className="px-5">
            <p className="my-3 text-justify text-base font-medium mt-5">
              {dataProject.description}
            </p>
            {dataProject.urls &&
              dataProject.urls.map((item, index) => (
                <div
                  className="flex flex-wrap gap-2 items-center align-middle justify-left mb-2"
                  key={item.name}
                >
                  <p className="text-sm font-bold ">{item.name}</p>
                  {item.active ? (
                    <>
                      <Link
                        href={item.url}
                        className=" inline-flex items-center rounded-md bg-gray-400/40 px-2 py-1 text-xs font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10"
                        target="_blank"
                      >
                        {item.url}
                      </Link>
                      {item.fallback && (
                        <p className="text-xs text-red-700">{item.fallback}</p>
                      )}
                    </>
                  ) : (
                    <>
                      <span className=" cursor-default inline-flex items-center rounded-md bg-gray-400/40 px-2 py-1 text-xs font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        {item.url}
                      </span>
                      <p className="text-xs text-red-700">{item.fallback}</p>
                    </>
                  )}
                </div>
              ))}
            <div className="flex flex-wrap gap-2 items-center align-middle justify-left my-">
              <p className="text-sm font-bold ">Etiquetas:</p>
              {dataProject.tags &&
                dataProject.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className="cursor-default inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                  >
                    #{tag}
                  </span>
                ))}
            </div>
            <div className="mt-5 ">
              <SocialButtons text={text} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
