'use client'

import React, { useRef } from "react";
import { useCart } from "react-use-cart";
import { Camera } from "@/app/lib/db/schema";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { notFound } from "next/navigation";
export function CameraPage({ cam, index }: { cam: Camera, index: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const { addItem } = useCart()
    const [isOpen, setIsOpen] = React.useState(false);
    const y = useParallax(scrollYProgress, 100)
    if (cam === undefined) {
        return notFound();
    }
    function useParallax(value: MotionValue<number>, distance: number) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }
    return (
        <section key={index} className='h-[100dvh] snap-center justify-center items-center flex flex-col lg:flex-row relative'>
            <div ref={ref} className='max-h-[70dvh] flex items-center w-full'>
                <div className='flex flex-col gap-2 w-full items-center '>
                    <div className='flex flex-col text-nowrap w-full items-center md:items-start'>
                        <motion.div className='text-4xl' style={{ y }}>{cam.name}</motion.div>
                        <span className='text-2xl lg:ml-4'>{cam.brand}</span>
                        <div className='lg:mt-12 lg:ml-4 flex gap-2 max-w-[60%]'>
                            <div>res:</div>
                            <div>{cam.res}p</div>
                        </div>
                        <div className='ml-4 flex gap-2 max-w-[80%]'>
                            <div>spe:</div>
                            <div className='max-w-full max-h-16 scrollbar pr-1 overflow-y-scroll text-wrap'>{cam.shutter}</div>
                        </div>
                    </div>
                    <Accordion className='mt-2 w-11/12' itemClasses={{ content: 'pl-2', indicator: 'text-foreground' }} isCompact>
                        <AccordionItem key='description' aria-label='description' title='description'>
                            <p className='text-sm'>{cam.description}</p>
                        </AccordionItem>
                        <AccordionItem key='compatible with' aria-label='compatible with' title='compatible with'>
                            <div className='flex flex-wrap gap-2'>storage: {cam.compats?.sd.map((sdtype, index) => (<div key={index}>{sdtype}</div>))}</div>
                            <div className='flex gap-2'>lense type: {cam.compats?.lens.map((lentype, index) => (<div key={index}>{lentype}</div>))}</div>
                        </AccordionItem>
                    </Accordion>
                    <span className='text-base opacity-80 lg:w-full'>#{index}</span>
                </div>
                <div className='mr-0 md:mr-8'>
                    <div className='hidden lg:flex lg:w-[300px] xl:w-[500px] border-1 border-foreground aspect-square items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='mr-auto ml-8 mt-12 lg:mt-0 lg:ml-0 flex flex-col gap-2 items-end justify-center'>
                <p className='text-3xl'>{cam.price}</p>
                <Button size='sm' onPress={() => {
                    addItem(cam);
                    setIsOpen(!isOpen);
                }} className='text-sm text-nowrap bg-foreground text-background'>add to cart</Button>
            </div>
        </section>
    )
}