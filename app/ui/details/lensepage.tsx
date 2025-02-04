'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { useCart } from 'react-use-cart'
import { Lense } from '@/app/lib/db/schema'
import { Button } from '@nextui-org/react'
import { notFound } from 'next/navigation'
import { ListBlobResultBlob } from '@vercel/blob'
import { motion, MotionValue, useScroll, useTransform } from 'motion/react'

export function LensePage({ len, image }: { len: Lense, image: ListBlobResultBlob | null }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const { addItem } = useCart()
    const [isOpen, setIsOpen] = React.useState(false);
    const y = useParallax(scrollYProgress, 100)
    if (len === undefined) {
        return notFound();
    }
    function useParallax(value: MotionValue<number>, distance: number) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }
    return (
        <section className='h-[100dvh] snap-center justify-center items-center flex flex-col lg:flex-row relative'>
            <div ref={ref} className='max-h-[70dvh] flex items-center w-full'>
                <div className='flex flex-col gap-2 w-full items-center '>
                    <div className='flex flex-col w-full items-center md:items-start'>
                        <motion.div className='text-4xl' style={{ y }}>{len.name}</motion.div>
                        <span className='text-2xl lg:ml-4'>{len.brand}</span>
                        <div className='lg:mt-12 lg:ml-4 flex gap-2 max-w-[60%]'>
                            <div>{len.minfl}mm - {len.maxfl}mm</div>

                        </div>
                        <div className='ml-4 flex gap-2 max-w-[80%]'>
                            <div>{len.maxap}</div>
                        </div>
                    </div>
                </div>
                <div className='mr-0 md:mr-8'>
                    <div className='hidden lg:flex lg:w-[300px] xl:w-[450px] border-1 border-foreground aspect-square items-center justify-center'>
                        {image ?
                            <Image
                                key={len.id}
                                src={image.url}
                                alt='image'
                                width={400}
                                height={400}
                                style={{ width: 'auto', height: '80%' }}
                            /> :
                            <div className='flex h-full items-center justify-center'>
                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1} stroke='currentColor' className='size-6'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z' />
                                </svg>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className='mr-auto ml-8 mt-12 lg:mt-0 lg:ml-0 flex flex-col gap-2 items-end justify-center'>
                <p className='text-3xl'>{len.price}</p>
                <Button size='sm' onPress={() => {
                    addItem(len);
                    setIsOpen(!isOpen);
                }} className='text-sm text-nowrap border-1 border-foreground bg-transparent text-foreground'>add to cart</Button>
            </div>
        </section>
    )
}