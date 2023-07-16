"use client";
import { useContext } from "react";
import Category from "./components/sections/Category";
import ProjectsPreview from "./components/sections/ProjectsPreview";
import { LanguageContext } from "./context/languageContext";


export default function Home() {
  const { text } = useContext(LanguageContext);


  return (
    <>
      <h1>Esto es un h1</h1>
      <h2>Esto es un h2</h2>
      <Category text={text} />
      <ProjectsPreview text={text} />
    </>
  );
}
