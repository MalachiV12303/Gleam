'use client'
import Link from 'next/link';
import { Cart } from '../cart';
import { ThemeSwitch } from './themeswitch';
import { motion } from 'motion/react';
import { useRef } from 'react';

export default function NavBar() {
    const constraintsRef = useRef(null)
    // const [ userParams, setUserParams ]= useLocalStorage<URLSearchParams>('userparams', new URLSearchParams())
    return (
        <>
            <div className='fixed flex items-center justify-center w-screen h-screen'>
                <div ref={constraintsRef} className='w-[90%] h-[95%]'></div>
            </div>
            <motion.div dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }} dragConstraints={constraintsRef} className='fixed top-[80%] sm:top-[5%] right-[5%] flex gap-1 z-30 px-2 py-2 rounded-md border-1 border-foreground bg-background text-foreground' drag>
                <div className='inline-flex border-1 w-4 border-foreground rounded-lg bg-red-400 sm:bg-blue-400 md:bg-green-400 lg:bg-pink-400 xl:bg-orange-400 2xl:bg-black'>
                </div>
                <div className='flex flex-col gap-1'>
                    <ThemeSwitch />
                    <Cart />
                </div>
                <div className='flex flex-col md:flex-row gap-1 justify-between'>
                    <Link className='bg-background flex-1 border-1 border-foreground rounded-full inline-flex items-center justify-center px-2' href={`/store?`}>
                        store
                    </Link>
                </div>
                {/* <div className='inline-flex sm:hidden border-1 h-4 border-foreground rounded-lg bg-background'>
                </div> */}
                {/* <Button onPress={()=>(console.log(userParams))}>log</Button> */}
            </motion.div>
        </>
    )
}
