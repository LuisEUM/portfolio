'use client'
import { useState } from "react";
import ProjectCard from "../../card/ProjectCard";
import TailwindGrid from "../../grid/TailwindGrid";
import ResponsiveList from "../../list/ResponsiveList";
import ParallaxText from "../../slider/ParallaxText";
import SecondaryButton from "../../ui/buttons/SecondaryButton";
import FlexCarousel from "../../ui/carousel/flex-carousel/FlexCarousel";

const cards = [
  { order: 1, src: "https://picsum.photos/id/200/900/1600" },
  { order: 2, src: "https://picsum.photos/id/202/900/1600" },
  { order: 3, src: "https://picsum.photos/id/203/900/1600" },
  { order: 4, src: "https://picsum.photos/id/204/900/1600" },
  { order: 5, src: "https://picsum.photos/id/199/900/1600" },
];

function ProjectsPreview({ text }) {
  const projects = useState(text.portfolio.projects);
  const [contentStart, setContentStart] = useState(
    Math.floor(Math.random() * (text.portfolio.projects.length - 6))
  );
  const [contentEnd, setContentEnd] = useState(
    Math.min(contentStart + 6, text.portfolio.projects.length)
  );

  // useEffect(() => {
  //   // Generate a random number for contentStart
  //   setContentStart(
  //     Math.floor(Math.random() * (text.portfolio.projects.length - 6))
  //   );

  //   // Ensure that contentEnd is always 6 more than contentStart and not greater than text.portfolio.projects.length
  //   setContentEnd(ccccccccccccccc);

  //   console.log(contentStart, contentEnd);

  //   console.log(projects);
  //   return () => {};
  // }, [projects]);

  return (
    <>
      <section className="relative max-w-full w-screen flex flex-col justify-center content-center items-center">
        <TailwindGrid fullSize>
          <section className="absolute pt-5 -z-50 overflow-hidden max-w-full">
            <ParallaxText baseVelocity={-0.2}>Enjoy all my work</ParallaxText>
          </section>
        </TailwindGrid>
        <section className=" max-w-full pt-24 pb-10  md:pt-36   w-screen flex flex-col justify-center content-center items-center">
          <TailwindGrid>
            <div className=" self-center  col-start-1 lg:col-start-2 col-end-5 md:col-end-9 lg:col-end-13 w-full  flex flex-col">
              <h3
                className="text-start text-[7vw] leading-[8vw] md:text-[4.8vw] md:leading-[4.8vw] lg:text-[3vw] lg:leading-[3vw] font-black z-40 pointer-events-none"
                style={{
                  textShadow:
                    "-1px -1px 0 #0F0F0F, 1px -1px 0 #0F0F0F, -1px 1px 0 #0F0F0F, 1px 1px 0 #0F0F0F",
                }}
              >
                Do you want to
                <span className="md:hidden">
                  <br />
                </span>
                <span className="text-primary"> check my projects?</span>
              </h3>
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
              <SecondaryButton
                className={
                  "text-center hidden md:block hover:bg-white hover:text-zinc-950 text-[2.8vw] md:text-[min(2vw,22px)] mt-[3vw]   font-bold uppercase self-center px-[2vw] py-[0.5vw] border border-white  rounded-full"
                }
              >
                check more project
              </SecondaryButton>
            </div>
          </TailwindGrid>
        </section>
      </section>

      <div className="block md:hidden mt-[6vw] md:mt-[5vw] lg:mt-[2.5vw]">
        {cards && (
          <FlexCarousel
            dataCards={cards}
            width={70}
            reduceGap={15}
            key="image"
            type="image"
          />
        )}
        <div className="flex justify-center items-center">
          <SecondaryButton
            className={
              "text-center mt-8 hover:bg-white hover:text-zinc-950  text-[min(3vw,22px)]  font-bold uppercase self-center px-[4vw] py-[1.5vw] border border-white  rounded-full"
            }
          >
            check more project
          </SecondaryButton>
        </div>
      </div>
    </>
  );
}

export default ProjectsPreview;
