"use client";
import { useContext } from "react";
import Category from "./components/sections/category/Category";
import TailwindGrid from "./components/grid/TailwindGrid";
import ProjectsPreview from "./components/sections/projects/ProjectsPreview";
import Hero from "./components/sections/hero/Hero";
import { LanguageContext } from "./context/languageContext";
import BigQuote from "./components/sections/quote/BigQuote";
import Testimonials from "./components/sections/testimonials/Testimonials";
import Skills from "./components/sections/skills/Skills";
import Passion from "./components/sections/passion/Passion";
import PostPreviews from "./components/sections/blog/PostPreviews";

export default function Home() {
  const { text } = useContext(LanguageContext);

  return (
    <>
      <TailwindGrid>
        <Hero text={text} />
      </TailwindGrid>
      <TailwindGrid fullSize>
        <div className="gap-y-[19vw] md:gap-y-[13vw] lg:gap-y-[14vw] flex-col flex col-span-full mt-[13vw] md:mt-[9vw] lg:mt-[5vw]">
          <Category text={text} />

          <ProjectsPreview text={text} />
          <Skills text={text} />

          <PostPreviews text={text} />

          <Passion text={text} />

          <Testimonials text={text} />
        </div>
      </TailwindGrid>
    </>
  );
}
