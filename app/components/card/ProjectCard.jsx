import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
  }

  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        variants={itemVariants}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Link
          href={'projects/' + project.url}
          className="group aspect-video w-full overflow-hidden rounded-lg bg-gray-200"
          key={project.url}
        >
          <Image
            src={project.image}
            width={500}
            height={500}
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="h-full object-cover object-center group-hover:opacity-75"
            blurDataURL={project.image}
          />
        </Link>
      </motion.div>
    </div>
  )
}

export default ProjectCard
