"use client";
import { useContext } from "react";
import Category from "./components/sections/category/Category";
import ProjectsPreview from "./components/sections/category/ProjectsPreview";
import Hero from "./components/sections/hero/Hero";
import { LanguageContext } from "./context/languageContext";
import "./style.css";

export default function Home() {
  const { text } = useContext(LanguageContext);

  return (
    <>
      <section className="px-9 grid grid-cols-12 gap-6 fixed max-w-full w-100 w-screen -z-50  hidden">
        <div className="col-span-1 bg-blue-200 bg-opacity-20 h-screen text-center">
          1
        </div>
        <div className="col-span-1 bg-blue-200 bg-opacity-20 h-screen text-center">
          2
        </div>
        <div className="col-span-1 bg-blue-200 bg-opacity-20 h-screen text-center">
          3
        </div>
        <div className="col-span-1 bg-blue-200 bg-opacity-20 h-screen text-center">
          4
        </div>
        <div className="col-span-1 bg-blue-200 bg-opacity-20 h-screen text-center">
          5
        </div>
        <div className="col-span-1 bg-blue-200 bg-opacity-20 h-screen text-center">
          6
        </div>
        <div className="col-span-1 bg-blue-200 bg-opacity-20 h-screen text-center">
          7
        </div>
        <div className="col-span-1 bg-blue-200 bg-opacity-20 h-screen text-center">
          8
        </div>
        <div className="col-span-1 bg-blue-200 bg-opacity-20 h-screen text-center">
          9
        </div>
        <div className="col-span-1 bg-blue-200 bg-opacity-20 h-screen text-center">
          10
        </div>
        <div className="col-span-1 bg-blue-200 bg-opacity-20 h-screen text-center">
          11
        </div>
        <div className="col-span-1 bg-blue-200 bg-opacity-20 h-screen text-center">
          12
        </div>
      </section>
      <Hero text={text} />
      <Category text={text} />
      <ProjectsPreview text={text} />
    </>
  );
}
