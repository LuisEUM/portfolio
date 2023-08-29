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
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        variants={itemVariants}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="rounded-2xl overflow-hidden"
      >
        <Link
          href={'projects/' + project.url}
          className="group aspect-video w-full overflow-hidden rounded-2xl  bg-gray-200  "
          key={project.url}
        >
          <Image
            src={project.image}
            width={1080}
            height={720}
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="h-full object-cover object-center group-hover:opacity-75 rounded-2xl "
            blurDataURL={project.image}
          />
        </Link>
      </motion.div>
    </div>
  )
}

export default ProjectCard
