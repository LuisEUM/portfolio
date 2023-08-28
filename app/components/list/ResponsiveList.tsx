import { motion } from "framer-motion";

type ResponsiveListProps = {
  children: React.ReactNode;
  mobile?: number;
  tablet?: number;
  desktop?: number;
  className?: string;
  id?: string;
};

function ResponsiveList({
  children,
  mobile = 1,
  tablet = 2,
  desktop = 3,
  id,
  className,
}: ResponsiveListProps) {
  return (
    <>
      <div className={className}>
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            staggerChildren: 5,
            delayChildren: 2.5,
            when: "beforeChildren",
          }}
          className={`gap-4  md:gap-6  lg:gap-6 grid gap-y-10 content-center justify-center
          ${mobile === 1 && `grid-cols-1`} 
          ${mobile === 2 && `grid-cols-2`} 
          ${mobile === 3 && `grid-cols-3`} 
          ${mobile === 4 && `grid-cols-4`} 
          ${mobile === 5 && `grid-cols-5`} 
          ${mobile === 6 && `grid-cols-6`}
          ${mobile === 7 && `grid-cols-7`} 
          ${mobile === 8 && `grid-cols-8`}
          ${mobile === 9 && `grid-cols-9`}
          ${mobile === 10 && `grid-cols-10`}
          ${mobile === 11 && `grid-cols-11`}
          ${mobile === 12 && `grid-cols-12`}
          ${tablet === 1 && `md:grid-cols-1`}
          ${tablet === 2 && `md:grid-cols-2`}
          ${tablet === 3 && `md:grid-cols-3`}
          ${tablet === 4 && `md:grid-cols-4`}
          ${tablet === 5 && `md:grid-cols-5`}
          ${tablet === 6 && `md:grid-cols-6`}
          ${tablet === 6 && `md:grid-cols-6`}
          ${tablet === 7 && `md:grid-cols-7`}
          ${tablet === 8 && `md:grid-cols-8`}
          ${tablet === 9 && `md:grid-cols-9`}
          ${tablet === 10 && `md:grid-cols-10`}
          ${tablet === 11 && `md:grid-cols-11`}
          ${tablet === 12 && `md:grid-cols-12`}
          ${desktop === 1 && `lg:grid-cols-1`}
          ${desktop === 2 && `lg:grid-cols-2`}
          ${desktop === 3 && `lg:grid-cols-3`}
          ${desktop === 4 && `lg:grid-cols-4`}
          ${desktop === 5 && `lg:grid-cols-5`}
          ${desktop === 6 && `lg:grid-cols-6`}
          ${desktop === 6 && `lg:grid-cols-6`}
          ${desktop === 7 && `lg:grid-cols-7`}
          ${desktop === 8 && `lg:grid-cols-8`}
          ${desktop === 9 && `lg:grid-cols-9`}
          ${desktop === 10 && `lg:grid-cols-10`}
          ${desktop === 11 && `lg:grid-cols-11`}
          ${desktop === 12 && `lg:grid-cols-12`}
        `}
          id={id && id}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}

export default ResponsiveList;
