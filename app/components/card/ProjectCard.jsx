// import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ project }) => {
  console.log(project)
  return (
    <Link href={'projects/' + project.url} className="group" key={project.url}>
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={project.image}
          width={500}
          height={500}
          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
    </Link>
  )
}

export default ProjectCard
