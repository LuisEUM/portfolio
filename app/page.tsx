"use client";
import { useContext, useRef } from "react";
import Category from "./components/sections/category/Category";
import TailwindGrid from "./components/grid/TailwindGrid";
import ProjectsPreview from "./components/sections/projects/ProjectsPreview";
import Hero from "./components/sections/hero/Hero";
import { LanguageContext } from "./context/languageContext";
import Testimonials from "./components/sections/testimonials/Testimonials";
import Skills from "./components/sections/skills/Skills";
import Passion from "./components/sections/passion/Passion";
import PostPreviews from "./components/sections/blog/PostPreviews";
import SideBar from "./components/sidebars/SideBar";

export default function Home() {
  const { text } = useContext(LanguageContext);
  const heroRef = useRef(null);
  const categoryRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const postsRef = useRef(null);
  const passionRef = useRef(null);
  const testimonialsRef = useRef(null);



  return (
    <>
      <TailwindGrid fullSize>
        <SideBar
          heroRef={heroRef}
          categoryRef={categoryRef}
          projectsRef={projectsRef}
          skillsRef={skillsRef}
          postsRef={postsRef}
          passionRef={passionRef}
          testimonialsRef={testimonialsRef}
        />

        <div className="gap-y-[19vw] md:gap-y-[20vw] lg:gap-y-[14vw] flex-col flex col-span-full  mt-20 md:mt-24 lg:mt-20 md:pt-8">
          <div ref={heroRef}>
            <Hero text={text} />
          </div>
          <div ref={categoryRef}>
            <Category text={text} />
          </div>
          <div ref={projectsRef}>
            <ProjectsPreview text={text} />
          </div>
          <div ref={skillsRef}>
            <Skills text={text} />
          </div>
          <div ref={postsRef}>
            <PostPreviews text={text} />
          </div>
          <div ref={passionRef}>
            <Passion text={text} />
          </div>
          <div ref={testimonialsRef}>
            <Testimonials text={text} />
          </div>
        </div>
      </TailwindGrid>
    </>
  );
}
