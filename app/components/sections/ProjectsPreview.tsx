import React, { useState } from "react";
import ProjectCard from "../card/ProjectCard";
import ResponsiveList from "../list/ResponsiveList";
import ParallaxText from "../slider/ParallaxText";

function ProjectsPreview({ text }) {
  const projects = useState(text.portfolio.projects);
  const [contentStart, setContentStart] = useState(Math.floor(Math.random() * (text.portfolio.projects.length - 6)));
  const [contentEnd, setContentEnd] = useState(Math.min(contentStart + 6, text.portfolio.projects.length));

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
    <section className="relative">
      <div className="absolute -z-10 overflow-hidden w-full -mt-10">
        <ParallaxText baseVelocity={-2}>My Project </ParallaxText>{" "}
      </div>
      <h3 className="lg:max-w-7xl lg:px-8 mx-auto text-5xl font-bold text-center text-zinc-400 pt-10 z-10">
        {" "}
        Do you want to <span className="text-primary">
          check my projects?
        </span>{" "}
      </h3>
      <ResponsiveList>
        {text.portfolio.projects &&
          projects[0].slice(contentStart, contentEnd).map((project) => (
              <ProjectCard
                key={project.url}
                project={project}
              />
          ))}
      </ResponsiveList>
    </section>
  );
}

export default ProjectsPreview;
