import { motion } from 'framer-motion'

type SecondaryButton_Props = {
  children?: React.ReactNode;
  className?: string;
}

function SecondaryButton ({ children, className }: SecondaryButton_Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.93 }}
      transition={{ duration: 0.2 }}
      className={`${
        className ||
        'cursor-pointer justify-center items-center flex min-w-[172px]  w-[13vw] rounded-md border h-12 gap-2 pl-4 pr-2.5 border-white text-white hover:text-zinc-950 hover:bg-white text-center  -zinc-950 text-[1vw] font-bold uppercase'
      }`}
    >
        {children}
    </motion.button>
  )
}

export default SecondaryButton
