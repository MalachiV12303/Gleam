'use client'
import Link from 'next/link';
import { Cart } from '../cart';
import { ThemeSwitch } from './themeswitch';
import { motion } from 'motion/react';
import { useRef } from 'react';

export default function NavBar() {
    const constraintsRef = useRef(null)

    return (
        <>
            <div className='fixed flex items-center justify-center w-screen h-screen'>
                <div ref={constraintsRef} className='w-[90%] h-[95%]'></div>
            </div>
            <motion.div dragConstraints={constraintsRef} className='fixed top-[5%] right-[5%] flex flex-col gap-1 z-50 px-2 py-2 rounded-md border-1 border-foreground bg-background text-foreground' drag>
                <div className='border-1 h-4 border-foreground rounded-lg'>
                </div>
                <div className='flex flex-col md:flex-row gap-1'>
                    <ThemeSwitch />
                    <Cart />
                </div>
                <div className='flex flex-col md:flex-row gap-1 justify-between'>
                    <Link className='flex-1 border-1 border-foreground rounded-full inline-flex items-center justify-center px-2' href={'/store'}>
                        store
                    </Link>
                </div>
            </motion.div>
        </>
    )
}
