'use client'

import clsx from 'clsx'
import React, { useRef } from 'react'
import { useCart } from 'react-use-cart'
import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import { formatCurrency } from '@/app/lib/utils'
import { CartItem } from '@/app/cartitem'
import { motion } from 'motion/react'

export function Checkout() {
    const [visible, setVisible] = React.useState(false)
    const { items, isEmpty, cartTotal } = useCart()
    const tools = ['next.js', 'three.js', 'drizzle', 'psql', 'vercel', 'tailwind', 'motion', 'typescript']
    const constraintsRef = useRef(null)
    const constraintsRef2 = useRef(null)
    return (
        <>
            <div className='max-w-[1200px] flex flex-1 scrollbar overflow-auto overflow-x-hidden w-full text-background'>
                <Accordion className='px-0' defaultExpandedKeys={['cart', 'payment', 'tools']} itemClasses={{ content: 'py-4 px-4', title: 'text-background text-lg', indicator: 'text-background', trigger: 'my-4 bg-foreground text-background px-4' }} selectionMode={'multiple'}>
                    <AccordionItem key='cart' aria-label='your items' title='your items'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>
                            {!isEmpty ? items.map((it, index) => (
                                <CartItem key={index} item={it} className='px-8 py-4'></CartItem>
                            )) :
                                <div className='h-48 w-full bg-foreground flex justify-center items-center col-span-3 sm:col-span-3 xl:col-span-3'>empty cart</div>}
                        </div>
                    </AccordionItem>
                    <AccordionItem key='payment' aria-label='billing and payment' title='billing and payment'>
                        <form ref={constraintsRef2} className='bg-foreground flex sm:flex-row flex-col items-center justify-between py-8 gap-8 '>
                            <motion.div drag dragConstraints={constraintsRef2} className='flex-1 flex flex-col gap-2 px-8'>
                                <p>PERSON INFO</p>
                                <label className='flex gap-2'><span className='font-bold'>NAME </span><input className='w-full bg-foreground px-2 border-1 border-background' placeholder='wayde' type='text' /></label>
                                <label className='flex gap-2'><span className='font-bold'>ADDRESS </span><input disabled className='w-full bg-foreground px-2 border-1 border-background' placeholder='22 cypress grove' type='text' /></label>
                                <label className='flex gap-2'><span className='font-bold'>DISCOUNT </span><input className='w-full bg-foreground px-2 border-1 border-background' placeholder='try?' type='text' /></label>
                            </motion.div>
                            <motion.div drag dragConstraints={constraintsRef2} className='flex-1 flex items-start sm:items-end flex-col gap-2 px-8'>
                                <p>CARD INFO</p>
                                <label className='flex gap-2'><span className='font-bold'>CARD# </span><input disabled className='w-full bg-foreground px-2 border-1 border-background' placeholder='2222-2222-2222-2222' type='text' /></label>
                                <label className='flex gap-2'><span className='font-bold'>CARDCOLOR </span><input disabled className='w-full bg-foreground px-2 border-1 border-background' placeholder='gold' type='text' /></label>
                            </motion.div>
                        </form>
                    </AccordionItem>
                    <AccordionItem key='tools' aria-label='tools used' title='tools used'>
                        <div ref={constraintsRef} className='min-h-56 text-sm sm:text-base text-background grid grid-cols-3 gap-y-2 sm:gap-y-8 gap-4'>
                            {tools.map((tool, index) => (
                                <motion.div dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} drag dragConstraints={constraintsRef} key={index} className='border-black bg-foreground flex items-center justify-center border-1 py-2 rounded-lg uppercase tracking-wider'>
                                    {tool}
                                </motion.div>
                            ))}
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className='mx-2 mt-2 bg-foreground py-4 select-none flex flex-col w-full px-8'>
                {visible ? <span className='mx-auto text-sm font-bold text-red-700 pb-4'> mock videography market project by malachi valle </span> : null}
                <div className='flex items-center flex-wrap justify-between w-full'>
                    <div className='h-10 rounded-full flex items-center px-8 bg-background text-foreground text-nowrap'>
                        <span className='text-xl'>{formatCurrency(cartTotal)}</span>
                    </div>
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
            </div>
        </>
    )
}