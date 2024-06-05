"use client";
import Link from "next/link";
import { useState } from "react";
import ProjectCard from "../../card/ProjectCard";
import TailwindGrid from "../../grid/TailwindGrid";
import ResponsiveList from "../../list/ResponsiveList";
import ParallaxText from "../../slider/ParallaxText";
import SecondaryButton from "../../ui/buttons/SecondaryButton";
import FlexCarousel from "../../ui/carousel/flex-carousel/FlexCarousel";

function ProjectsPreview({ text }) {
  const projects = useState(text.portfolio.projects);
  const previewProjects = text.home.projectsPreviewSection;

  const [contentStart, setContentStart] = useState(
    Math.floor(Math.random() * (text.portfolio.projects.length - 6))
  );
  const [contentEnd, setContentEnd] = useState(
    Math.min(contentStart + 6, text.portfolio.projects.length)
  );

  // Extracting images for the carousel
  const projectImages = text.portfolio.projects.slice(0, 6).map((project) => ({
    order: project.id,
    src: project.image,
    url: project.url,
  }));

  return (
    <div className="relative flex-col flex col-span-full  bg-yellow-500/0 ">
      <TailwindGrid fullSize>
        <section className="absolute self-center overflow-hidden max-w-full -z-50 -top-[17vw] md:-top-[11vw] lg:-top-[8.5vw] left-0 ">
          <ParallaxText baseVelocity={-0.2}>
            {previewProjects.textScroller}
          </ParallaxText>
        </section>
      </TailwindGrid>
      <div className="col-span-full max-w-full flex flex-col justify-center content-center items-center">
        <TailwindGrid>
          <h3
            className="col-span-full lg:col-start-2 text-start text-[7vw] leading-[8vw] md:text-[4.8vw] md:leading-[4.8vw] lg:text-[3vw] lg:leading-[3vw] font-black z-40 pointer-events-none"
            style={{
              textShadow:
                "-1px -1px 0 #0F0F0F, 1px -1px 0 #0F0F0F, -1px 1px 0 #0F0F0F, 1px 1px 0 #0F0F0F",
            }}
          >
            {previewProjects.title}
            <span className=" md:hidden">
              <br />
            </span>
            <span className="text-primary">{previewProjects.titlePrimary}</span>
          </h3>
          <div className="self-center md:pb-9 md:pt-5 col-start-1 lg:col-start-2 col-end-5 md:col-end-9 lg:col-end-13 w-full flex flex-col">
            <div className="hidden md:block">
              <ResponsiveList tablet={3}>
                {text.portfolio.projects &&
                  projects[0]
                    .slice(contentStart, contentEnd)
                    .map((project) => (
                      <ProjectCard key={project.url} project={project} />
                    ))}
              </ResponsiveList>
            </div>
          </div>
        </TailwindGrid>
      </div>
      <div className="block md:hidden pb-7 pt-5">
        {projectImages && (
          <FlexCarousel
            dataCards={projectImages}
            width={70}
            reduceGap={15}
            key="image"
            type="image"
          />
        )}
      </div>
      <TailwindGrid>
        <div className="flex justify-center items-center col-span-full lg:col-start-2 my-auto">
          <Link href="/projects?category=All&page=1">
            <SecondaryButton
              className={
                "text-center  hover:bg-white hover:text-zinc-950  text-md py-3 px-5 md:text-[min(2vw,22px)]    font-bold uppercase self-center md:px-[min(3vw,2.5rem)] md:py-[min(0.5vw,2rem)] border border-white  rounded-full"
              }
            >
              {previewProjects.button}
            </SecondaryButton>
          </Link>
        </div>
      </TailwindGrid>
    </div>
  );
}

export default ProjectsPreview;
