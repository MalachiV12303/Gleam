'use client'
import { motion, useScroll } from "motion/react";

export function ScrollProgress(){
    const { scrollYProgress } = useScroll()
    return (
        <div className="fixed flex justify-end w-full bottom-11 pr-36">
        <svg fill='transparent' width="200" height="200" viewBox="0 0 100 100">
            <motion.circle
                cx="50"
                cy="50"
                r="35"
                pathLength="1"
                className="stroke-foreground stroke-[1px]"
                style={{ pathLength: scrollYProgress }}
        />
      </svg>
      </div>
    )
}