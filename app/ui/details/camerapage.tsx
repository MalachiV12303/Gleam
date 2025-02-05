'use client'

import BackButton from './backbutton'
import Image from 'next/image'
import React from 'react'
import { useCart } from 'react-use-cart'
import { Camera } from '@/app/lib/db/schema'
import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import { notFound } from 'next/navigation'
import { ListBlobResultBlob } from '@vercel/blob'

export function CameraPage({ cam, image }: { cam: Camera, image: ListBlobResultBlob | null }) {
    const { addItem } = useCart()
    const [isOpen, setIsOpen] = React.useState(false);
    if (cam === undefined) {
        return notFound();
    }
    return (
        <section className='flex min-h-[100dvh] mx-auto max-w-[1200px] items-center px-4 sm:px-12 xl:px-0'>
            <div className='pt-[80px] pb-12 lg:pt-0 sm:pb-0 flex flex-col md:flex-row gap-4 lg:gap-12 items-center w-full'>
                <div className='flex flex-col gap-4' id='leftPanel'>
                    <BackButton />
                    <div className='flex w-full lg:w-[300px] xl:w-[400px] border-1 bg-white border-foreground aspect-square items-center justify-center'>
                        {image ?
                            <Image
                                key={cam.id}
                                src={image.url}
                                alt='image'
                                width={400}
                                height={400}
                                style={{ width: '80%', height: 'auto' }}
                            /> :
                            <div className='flex h-full items-center justify-center'>
                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1} stroke='currentColor' className='size-6'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z' />
                                </svg>
                            </div>
                        }
                    </div>
                    <div className='flex gap-2 items-center justify-evenly'>
                        <p className='text-3xl font-bold'>{cam.price}</p>
                        <Button size='sm' onPress={() => {
                            addItem(cam);
                            setIsOpen(!isOpen);
                        }} className='text-sm text-nowrap border-1 border-foreground bg-transparent text-foreground'>add to cart</Button>
                    </div>
                </div>
                <div id='rightPanel' className='flex-1 flex flex-col gap-8 items-center '>
                    <div className='flex flex-col gap-2 text-nowrap w-full items-center md:items-start'>
                        <div className='text-3xl flex items-center gap-2 bg-foreground text-background px-4 py-2'>{cam.name} - {cam.brand}</div>
                        <div className='text-xl ml-4 flex gap-2 lowercase'>
                            {cam.megapixels} megapixel {cam.type} camera
                        </div>
                    </div>
                    <Accordion defaultExpandedKeys={['description']} selectionMode={'multiple'} className='px-0' itemClasses={{ content: 'py-4 px-4 bg-background bg-opacity-80', title: 'text-background', indicator: 'text-background', trigger: 'mt-1 bg-foreground text-background px-4'}} isCompact>
                        <AccordionItem key='description' aria-label='description' title='description'>
                            <p className='text-sm'>{cam.description}</p>
                        </AccordionItem>
                        <AccordionItem key='shutter' aria-label='shutter' title='shutter'>
                            <div className='max-w-full scrollbar pr-1 overflow-y-scroll text-wrap'>{cam.shutter}</div>
                        </AccordionItem>
                        <AccordionItem key='compat' aria-label='compatible with' title='compatible with'>
                            <div className='flex flex-wrap gap-2'>storage: {cam.storage?.map((sdtype, index) => (<div key={index}>{sdtype}</div>))}</div>
                            <div className='flex gap-2'>mount type: {cam.mount?.map((lentype, index) => (<div key={index}>{lentype}</div>))}</div>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}