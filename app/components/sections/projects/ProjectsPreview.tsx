import { useState } from "react";
import ProjectCard from "../../card/ProjectCard";
import TailwindGrid from "../../grid/TailwindGrid";
import ResponsiveList from "../../list/ResponsiveList";
import ParallaxText from "../../slider/ParallaxText";
import SecondaryButton from "../../ui/buttons/SecondaryButton";
import CarouselSlider from "../../ui/carousel/CarouselSlider";

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
      <TailwindGrid fullSize>
        <section className="absolute pt-5 -z-50 overflow-hidden max-w-full">
          <ParallaxText baseVelocity={-2}>Enjoy all my work</ParallaxText>
        </section>
      </TailwindGrid>
      <section className=" max-w-full pt-24 pb-10  md:pt-36   w-screen flex flex-col justify-center content-center items-center">
        <TailwindGrid>
          <div className=" self-center  col-start-1 lg:col-start-2 col-end-5 md:col-end-9 lg:col-end-13 w-full  flex flex-col">
            <h3 className="text-start text-[7vw] leading-[8vw] md:text-[4.8vw] md:leading-[4.8vw] lg:text-[3vw] lg:leading-[3vw] font-black">
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
      <TailwindGrid fullSize>
        <CarouselSlider />
      </TailwindGrid>
      <TailwindGrid>
        <div className="w-full col-start-1 col-end-5 md:hidden  justify-center items-center flex mt-[13.5vw]   sm:mt-[8.5vw]">
          <SecondaryButton
            className={
              "text-center hover:bg-white hover:text-zinc-950  text-[min(3vw,22px)]  font-bold uppercase self-center px-[4vw] py-[1.5vw] border border-white  rounded-full"
            }
          >
            check more project
          </SecondaryButton>
        </div>
      </TailwindGrid>
    </>
  );
}

export default ProjectsPreview;
