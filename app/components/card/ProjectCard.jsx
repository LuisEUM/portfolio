// import React from 'react'

import Link from 'next/link'

const ProjectCard = ({ image, url }) => {
  return (
    <Link href={'projects/' + url} className="group">
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={image}
          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
    </Link>
  )
}

export default ProjectCard
