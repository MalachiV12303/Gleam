'use client'

import React from 'react'
import { motion, MotionConfig } from 'motion/react'
import { cinzel } from '../fonts'
import { useQueryState } from 'nuqs'
import { searchParams, useFilters } from '../../lib/searchParams'
import clsx from 'clsx'
import { transition } from '../../lib/utils'

export default function Button({ text, lenseImage }: { text: string, lenseImage?: boolean }) {
    const [, setCategory ] = useQueryState('category', 
        searchParams.category.withOptions({
            shallow: false
    }))
    const [, setFilters]= useFilters()
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <motion.button 
        
        animate={{ opacity: [0, 1] }}
        transition={{ type: "easeInOut", duration: 3 }}
        onClick={() => {
            setFilters(null)
            setCategory(text === 'lenses' ? 'len' : null)
            scrollToSection('storeContent')
        }} className={clsx('transition hover:scale-[1.03] delay-50 duration-500 ease-in-out bg-[url(/cameraButton.jpg)] hover:grayscale-0 lg:grayscale bg-opacity-80 bg-cover bg-center bg-no-repeat border-1 rounded-md border-foreground flex items-center justify-center',  {'bg-[url(/lenseButton.jpg)] text-red-600' : lenseImage? true : false})}>
            <MotionConfig transition={transition}>
                <motion.div
                    className={`${cinzel.className} flex items-center justify-center text-[2.5rem] lg:text-[3rem] w-[50%] h-[50%]`}
                    whileHover={{
                        scale: 1.2,
                    }}>
                    <motion.p
                    className='px-4 text-foreground shadow-xl bg-background/30'
                        whileHover={{
                            scale: 1.2,
                        }}
                    >{text}</motion.p>

                </motion.div>
            </MotionConfig>
        </motion.button >
    )
}
