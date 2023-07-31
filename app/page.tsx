"use client";
import { useContext } from "react";
import Category from "./components/sections/category/Category";
import TailwindGrid from "./components/grid/TailwindGrid";
import ProjectsPreview from "./components/sections/projects/ProjectsPreview";
import Hero from "./components/sections/hero/Hero";
import { LanguageContext } from "./context/languageContext";
import "./style.css";
import BigQuote from "./components/sections/quote/BigQuote";

export default function Home() {
  const { text } = useContext(LanguageContext);

  return (
    <>
      <TailwindGrid  >
        <Hero text={text} />
      </TailwindGrid>

      <TailwindGrid >
        <Category text={text} />
      </TailwindGrid>

      <ProjectsPreview text={text} />

      <BigQuote text={text} />
    </>
  );
}
