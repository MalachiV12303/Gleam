'use client'
import { motion } from 'motion/react'
export default function Template({ children }: { children: React.ReactNode }) {
    return (
      <motion.div
        id='motionTemplate'
        className='h-full'
        initial={{ y:20, opacity: 0, scale: 0.95}}
        animate={{ y:0, opacity: 1, scale: 1 }}
        transition={{ 
          type: 'spring',
          visualDuration: 0.5,
          bounce: 0.25,
         }}
      >
        {children}
      </motion.div>
    )
  }