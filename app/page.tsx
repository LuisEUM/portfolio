'use client'
import Category from "./components/sections/category/Category";
import TailwindGrid from "./components/grid/TailwindGrid";
import ProjectsPreview from "./components/sections/projects/ProjectsPreview";
import Hero from "./components/sections/hero/Hero";
import Testimonials from "./components/sections/testimonials/Testimonials";
import Skills from "./components/sections/skills/Skills";
import Passion from "./components/sections/passion/Passion";
import PostPreviews from "./components/sections/blog/PostPreviews";
import SideBar from "./components/sidebars/SideBar";
import {LanguageContext} from "./context/languageContext";
import { useContext } from "react";

export default function Home() {
  const { text } = useContext(LanguageContext);

  return (
    <>
      <TailwindGrid fullSize>
        <SideBar />
        <div className="gap-y-[19vw] md:gap-y-[20vw] lg:gap-y-[14vw] flex-col flex col-span-full  mt-20 md:mt-24 lg:mt-20 md:pt-8">
          <div id="hero-section">
            <Hero text={text} />
          </div>
          <div id="category-section">
            <Category text={text} />
          </div>
          <div id="projects-section">
            <ProjectsPreview text={text} />
          </div>
          <div id="skills-section">
            <Skills text={text} />
          </div>
          <div id="blog-section">
            <PostPreviews text={text} />
          </div>
          <div id="passion-section">
            <Passion text={text} />
          </div>
          <div id="testimonials-section">
            <Testimonials text={text} />
          </div>
        </div>
      </TailwindGrid>
    </>
  );
}
