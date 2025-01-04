'use client'
import { motion, useScroll } from "motion/react";
import { Suspense } from "react";

export function ScrollProgress({ total } : {total : number}){
    const { scrollYProgress } = useScroll()
    return (
        <div className='fixed flex justify-end w-10/12 bottom-11'>
            <Suspense>
                <div className='absolute right-0 w-[175px] h-[175px] flex items-center justify-center'>{Math.round((scrollYProgress.get()*total)+1)} of {total}</div>
            </Suspense>
            <svg className='' fill='transparent' width="175" height="175" viewBox="0 0 100 100">
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