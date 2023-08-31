import { AnimatePresence, motion, useInView } from "framer-motion";
import { useState, useEffect } from "react";

function SideBar({
  heroRef,
  categoryRef,
  projectsRef,
  skillsRef,
  postsRef,
  passionRef,
  testimonialsRef,
}) {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [activeSection, setActiveSection] = useState(heroRef);

  const sections = [
    { name: "Hero", ref: heroRef },
    { name: "Category", ref: categoryRef },
    { name: "Projects", ref: projectsRef },
    { name: "Skills", ref: skillsRef },
    { name: "Blog", ref: postsRef },
    { name: "Passion", ref: passionRef },
    { name: "Testimonials", ref: testimonialsRef },
  ];

  const scrollToSection = (ref) => {
    if (ref.current) {
      const yOffset = window.innerHeight / 2;
      const targetTop = ref.current.offsetTop + ref.current.clientHeight / 2;
      window.scrollTo({
        top: targetTop - yOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let closestDistance = Infinity;
      let closestSection = null;

      sections.forEach((section) => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(window.innerHeight / 2 - sectionCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section.ref;
          }
        }
      });

      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div className="col-span-1 col-start-1 col-end-2 h-screen fixed w-1/12  top-0 z-30 border-r box-border border-zinc-500 bg-zinc-950/40 backdrop-blur-lg bg-clip-padding backdrop-filter opacity-75 hidden lg:block">
      <ul className="w-full h-full z-30 flex items-center   justify-center flex-col gap-y-10">
        {sections.map((section, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection(section.ref)}
            className="relative cursor-pointer mt-2 first:mt-0 flex items-center justify-start mx-auto"
          >
            <svg
              className={`${
                activeSection === section.ref ? "fill-primary" : "fill-white"
              } w-2 h-2 hover:fill-primary transition-colors duration-500`}
              onMouseEnter={() => setHoveredSection(section.ref)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <circle cx="50%" cy="50%" r="50%" />
            </svg>
            <AnimatePresence>
              {hoveredSection === section.ref && (
                <motion.div
                  className="text-white text-sm text-left flex absolute left-4 bg-zinc-700 px-2 py-1 rounded-md z-30 opacity-100"
                  initial={{ x: 20, opacity: 0, }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {section.name}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
