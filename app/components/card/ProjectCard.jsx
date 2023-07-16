// import React from 'react'

import Link from 'next/link'

const ProjectCard = ({ project }) => {
  console.log(project)
  return (
    <Link href={'projects/' + project.url} className="group" key={project.url}>
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={project.image}
          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
    </Link>
  )
}

export default ProjectCard
