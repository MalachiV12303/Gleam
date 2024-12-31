'use client'

import { Camera } from "@/app/lib/db/schema";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { notFound } from "next/navigation";

export function CameraPage({ cam }: { cam: Camera }) {
    if (cam === undefined) {
        return notFound();
    }
    const temp = cam.shutter?.split(',')
    return (
        <section className="min-h-[100dvh] snap-start flex justify-center items-center">
            <div className="flex flex-col w-full justify-center ">
                <div className='flex w-full '>
                    <div className='flex flex-col text-nowrap'>
                        <span className="text-4xl">{cam.name}<span className="text-xs ml-4 italic">{cam.id}</span></span>
                        <span className="text-2xl ml-4">{cam.brand}</span>
                        <span className="mt-12 ml-4">res: {cam.res}p</span>
                        <div className="ml-4 flex flex-col max-w-[80%] text-wrap">spe: {cam.shutter}</div>
                    </div>

                    <div className="w-full py-4 flex items-center justify-center ">
                        <div className='border-1 border-foreground rounded-lg aspect-square h-full flex items-center justify-center'>image</div>
                    </div>

                </div>

                <div className='w-10/12 ml-4 mt-8 pl-2 flex overflow-hidden '>
                    <Accordion itemClasses={{indicator: 'text-foreground'}} isCompact selectionMode='multiple'>
                        <AccordionItem key="description" aria-label="description" title="description" >
                            <p className="text-sm">{cam.description}</p>
                        </AccordionItem>
                        <AccordionItem key="compatible with" aria-label="compatible with" title="compatible with">
                            <div className='flex gap-2'>storage: {cam.compats?.sd.map((sdtype)=>(<div>{sdtype}</div>))}</div>
                            <div className='flex'>lense mount: {cam.compats?.lens.map((lentype)=>(<div>{lentype}</div>))}</div>
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>

            <div className="flex flex-col gap-2 items-end justify-center w-[15%] ">
                <p className='text-3xl'>{cam.price}</p>
                <div className='py-1 px-3 text-sm text-nowrap bg-foreground text-background'>add to cart</div>
            </div>

        </section>
    )
}