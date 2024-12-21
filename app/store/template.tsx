'use client'
import { motion } from 'motion/react'
export default function Template({ children }: { children: React.ReactNode }) {
    return (
      <motion.div
        initial={{ y:40, opacity: 0 }}
        animate={{ y:0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 1.25 }}
      >
        {children}
      </motion.div>
    )
  }