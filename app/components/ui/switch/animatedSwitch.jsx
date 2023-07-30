import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedSwitch ({ isOn, setIsOn, className }) {
  const [ended, setEnded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setEnded(true)
    }, 500)

    return () => {}
  }, [])

  return (
    <motion.div
      className={`h-7 w-16 rounded-full flex items-center box-border py-0 px-1 cursor-pointer transition-all ${className} ${
        isOn ? 'bg-primary justify-end' : 'bg-[#6E0D25] justify-start  '
      } ${!ended && 'scale-0'}`}
      data-darkmode={isOn}
      onClick={() => setIsOn(!isOn)}
      style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
    >
      <motion.div
        layout
        className={`${
          !ended && 'scale-0'
        } bg-zinc-100 handle h-6 w-6 rounded-full grid items-center justify-center  overflow-hidden text-zinc-900`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            className={`${isOn ? 'text-primary' : 'text-[#6E0D25]'}`}
            key={isOn ? 'moon' : 'sun'}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
          >
            {isOn
              ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
                )
              : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
                )}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
