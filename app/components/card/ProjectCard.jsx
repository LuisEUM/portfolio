import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Suspense } from "react";

const ProjectCard = ({ project }) => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      variants={itemVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="rounded-2xl overflow-hidden dark:bg-gray-700"
    >
      <Link
        href={"projects/" + project.url}
        className="group aspect-video w-full overflow-hidden rounded-2xl  bg-gray-200 dark:bg-gray-700 "
        key={project.url}
      >
        <Suspense
          fallback={
            <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                class="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          }
        >
          <Image
            src={project.image}
            width={360}
            height={206}
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="w-full aspect-video object-cover object-center group-hover:opacity-75 rounded-2xl "
            blurDataURL={project.image}
          />
        </Suspense>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
