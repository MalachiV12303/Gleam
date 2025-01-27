'use client'
import { useCart } from 'react-use-cart';
import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import React, { useRef } from 'react';
import { formatCurrency } from '@/app/lib/utils';
import { CartItem } from '@/app/cartitem';
import { motion } from 'motion/react';

export function Checkout() {
    const [visible, setVisible] = React.useState(false)
    const { items, isEmpty, cartTotal } = useCart();
    const tools = ['next', 'drizzle orm', 'psql', 'vercel', 'tailwind', 'motion', 'typescript']
    const constraintsRef = useRef(null)
    const constraintsRef2 = useRef(null)

    return (
        <div className='max-h-[80dvh] mt-12 h-[80dvh] w-[60dvw] relative border-1 border-foreground'>
            <div className='absolute z-20 bg-background px-2 text-2xl font-bold border-foreground border-b-1 border-r-1'>checkout <span className='text-danger'>in progress</span></div>

            <div className='h-5/6 scrollbar overflow-auto overflow-x-hidden w-full pt-8 pb-12 px-4'>
                <Accordion defaultExpandedKeys={['cart', 'payment and billing']} selectionMode={'multiple'}>
                    <AccordionItem key='cart' aria-label='your items' title='your items'>
                        <div className='grid grid-cols-2 gap-8 px-4'>
                            {!isEmpty ? items.map((it, index) => (
                                <CartItem key={index} item={it} className='px-8 py-4'></CartItem>
                            )) :
                                <div>empty cart</div>}
                        </div>

                    </AccordionItem>
                    <AccordionItem key='billing and payment' aria-label='billing and payment' title='billing and payment'>
                        <form ref={constraintsRef2} className='bg-foreground text-background flex items-center justify-evenly py-8 gap-2 border-1'>
                            <motion.div drag dragConstraints={constraintsRef2} className='flex flex-col gap-2 border-1 border-background px-2 py-2'>
                                <p>PERSON INFO</p>
                                <label className='flex gap-2'><span className='font-bold'>NAME </span><input className='w-full bg-foreground px-2 border-1 border-background' placeholder='wayde' type='text' /></label>
                                <label className='flex gap-2'><span className='font-bold'>ADDRESS </span><input disabled className='w-full bg-foreground px-2 border-1 border-background' placeholder='mock website' type='text' /></label>
                                <label className='flex gap-2'><span className='font-bold'>DISCOUNT </span><input className='w-full bg-foreground px-2 border-1 border-background' placeholder='try?' type='text' /></label>
                            </motion.div>
                            <motion.div drag dragConstraints={constraintsRef2} className='flex items-end flex-col gap-2 border-1 border-background px-2 py-2'>
                                <p>CARD INFO</p>
                                <label className='flex gap-2'><span className='font-bold'>CARD# </span><input disabled className='w-full bg-foreground px-2 border-1 border-background' placeholder='2222-2222-2222-2222' type='text' /></label>
                                <label className='flex gap-2'><span className='font-bold'>CARDCOLOR </span><input disabled className='w-full bg-foreground px-2 border-1 border-background' placeholder='gold' type='text' /></label>
                            </motion.div>
                        </form>
                    </AccordionItem>
                    <AccordionItem key='tools used' aria-label='tools used' title='tools used'>
                        <div ref={constraintsRef} className='bg-foreground text-background px-8 py-8 grid grid-cols-3 gap-y-8 gap-4'>
                            {tools.map((tool, index) => (
                                <motion.div dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} drag dragConstraints={constraintsRef} key={index} className='border-background flex justify-center border-1 py-2 rounded-lg uppercase font-bold tracking-wider'>
                                    {tool}
                                </motion.div>
                            ))}
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className='select-none absolute flex items-center justify-between h-1/6 w-full bottom-0 left-0 bg-foreground px-8'>
                <div className='rounded-full flex px-4 py-2 bg-background text-foreground text-nowrap'>
                    your total: <span className='underline underline-offset-4'>{formatCurrency(cartTotal)}</span>
                </div>
                <div className='flex gap-2 text-background items-center'>
                    {visible ? <span className='text-sm font-bold text-red-700'> mock videography market project by malachi valle </span> : null}
                    <Button variant='light' className='bg-background rounded-full' onPress={() => setVisible(true)}>
                        finalize
                    </Button>

                </div>
            </div>
        </div>
    )
}