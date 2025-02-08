'use client'

import React, { useEffect, useRef, useState }  from 'react'
import { CheckoutCart } from '../ui/checkout/checkoutcart'
import { Accordion, AccordionItem, Spinner } from '@nextui-org/react'

export default function Page() {
    const tools = ['next.js', 'three.js', 'drizzle', 'psql', 'vercel', 'tailwind', 'motion', 'typescript']
    //this is to render cart information without ssr errors
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <>
            <section className='relative max-w-[1400px] flex sm:flex-row flex-col mx-auto sm:py-12 gap-8 px-4'>
                <div className='sm:w-2/3 sm:overflow-auto no-scrollbar'>
                    <Accordion className='px-0' defaultExpandedKeys={['cart', 'payment', 'tools']} itemClasses={{ content: 'text-foreground bg-background py-8 px-4', title: 'text-foreground text-lg', indicator: 'text-foreground', trigger: 'bg-transparent border-b-1 border-foreground px-4' }} selectionMode={'multiple'}>
                        <AccordionItem key='payment' aria-label='billing and payment' title='billing and payment'>
                            <form className='grid grid-cols-2 gap-y-4 gap-x-4'>
                                <label className='flex flex-col col-span-2'><span className=''>your email </span><input disabled className='py-1 w-full border-1 border-foreground bg-transparent px-2 placeholder:text-foreground' placeholder='jeff.shark@outlook.com' type='text' /></label>
                                <label className='flex flex-col'><span className=''>first name </span><input disabled className='py-1 w-full border-1 border-foreground bg-transparent px-2 placeholder:text-foreground' placeholder='Wayde' type='text' /></label>
                                <label className='flex flex-col'><span className=''>last name </span><input disabled className='py-1 w-full border-1 border-foreground bg-transparent px-2 placeholder:text-foreground' placeholder='Lucis Caelum' type='text' /></label>
                                <label className='flex flex-col col-span-2'><span className=''>company (optional) </span><input disabled className='py-1 w-full border-1 border-foreground bg-transparent px-2 placeholder:text-foreground' placeholder='Aperture' type='text' /></label>
                                <label className='flex flex-col'><span className=''>country </span><input disabled className='py-1 w-full border-1 border-foreground bg-transparent px-2 placeholder:text-foreground' placeholder='Accordo' type='text' /></label>
                                <label className='flex flex-col'><span className=''>address </span><input disabled className='py-1 w-full border-1 border-foreground bg-transparent px-2 placeholder:text-foreground' placeholder='2200 Cypress Grove' type='text' /></label>
                                <label className='flex flex-col'><span className=''>address ext. </span><input disabled className='py-1 w-full border-1 border-foreground bg-transparent px-2 placeholder:text-foreground' placeholder='Apt. 09' type='text' /></label>
                                <label className='flex flex-col'><span className=''>city </span><input disabled className='py-1 w-full border-1 border-foreground bg-transparent px-2 placeholder:text-foreground' placeholder='Altissia' type='text' /></label>
                                <label className='flex flex-col'><span className=''>state / province </span><input disabled className='py-1 w-full border-1 border-foreground bg-transparent px-2 placeholder:text-foreground' placeholder='Insomnia' type='text' /></label>
                                <label className='flex flex-col'><span className=''>zip / postal </span><input disabled className='py-1 w-full border-1 border-foreground bg-transparent px-2 placeholder:text-foreground' placeholder='D9333' type='text' /></label>
                            </form>
                        </AccordionItem>
                        <AccordionItem key='tools' aria-label='tools used' title='tools used'>
                            <div className='min-h-[50dvh] text-sm sm:text-base text-foreground grid grid-cols-3 gap-y-12 gap-x-8'>
                                {tools.map((tool, index) => (
                                    <div key={index} className='w-full border-foreground flex items-center justify-center border-1 py-2 rounded-lg uppercase tracking-wider'>
                                        {tool}
                                    </div>
                                ))}
                            </div>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='sm:w-1/3'>{isClient ? <CheckoutCart /> : <Spinner />}</div>
            </section>
            {/* <div className='px-8 py-4 select-none flex flex-col w-full'>
                {visible ? <span className='mx-auto text-sm font-bold text-red-700 pb-4'> mock videography market project by malachi valle </span> : null}
                <div className='flex items-center flex-wrap justify-between w-full'>
                    <div className='flex gap-2 text-background items-center'>
                        <Button variant='light' className={clsx('bg-background rounded-full uppercase font-bold', { 'text-sm': visible })} onPress={() => {
                            if (!visible) {
                                setVisible(true)
                            } else {
                                //link to github?
                            }
                        }}>
                            {visible ? 'rest' : 'finalize'}
                        </Button>
                    </div>
                </div>
            </div> */}
        </>
    )
}
