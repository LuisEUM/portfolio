import { motion } from 'framer-motion'

function SecondaryButton ({ text }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.93 }}
      transition={{ duration: 0.2 }}
      className="group cursor-pointer justify-end items-center flex min-w-[172px]  w-[13vw] rounded-md border border-white text-white hover:text-zinc-950 hover:bg-white  h-12 gap-2 pl-4 pr-2.5"
    >
      <p className=" text-center  -zinc-950 text-[1vw] font-bold uppercase mx-auto">
        Portfolio
      </p>
    </motion.button>
  )
}

export default SecondaryButton
