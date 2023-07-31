import React, { useState } from "react";
import ProjectCard from "../../card/ProjectCard";
import TailwindGrid from "../../grid/TailwindGrid";
import ResponsiveList from "../../list/ResponsiveList";
import ParallaxText from "../../slider/ParallaxText";

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
      <section className=" max-w-full py-36    w-screen flex flex-col justify-center content-center items-center">
        <TailwindGrid >
          <div className=" self-center  col-start-1 lg:col-start-2 col-end-5 md:col-end-9 lg:col-end-13 w-full  flex flex-col">
            <h3 className="text-start text-5xl font-black">
              Do you want to
              <span className="text-primary"> check my projects?</span>
            </h3>
            <ResponsiveList tablet={3}>
              {text.portfolio.projects &&
                projects[0]
                  .slice(contentStart, contentEnd)
                  .map((project) => (
                    <ProjectCard key={project.url} project={project} />
                  ))}
            </ResponsiveList>
          </div>
        </TailwindGrid>
      </section>
    </>
  );
}

export default ProjectsPreview;
