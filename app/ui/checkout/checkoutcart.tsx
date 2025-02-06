'use client'
import React, { useEffect, useState } from 'react'
import { useCart } from 'react-use-cart'
import { CartItem } from '@/app/cartitem'
import { formatCurrency } from '@/app/lib/utils'

export function CheckoutCart() {
    const { cartTotal, items, isEmpty } = useCart()
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <div className='relative flex flex-col max-h-[80dvh] h-[80dvh]'>
            <p className='py-4 px-4 text-lg border-b-1 border-foreground'>your items</p>
            <div className='overflow-auto no-scrollbar flex-1 flex flex-col gap-4 bg-background divide-y-1 divide-foreground'>
                {!isEmpty ? items.map((it, index) => (
                    <CartItem key={index} item={it} className='px-8 py-4'></CartItem>
                )) :
                    <div className='h-48 w-full flex justify-center items-center col-span-3 sm:col-span-3 xl:col-span-3'>empty cart</div>}
            </div>
            <div className='px-4 py-4 bg-foreground text-background text-xl w-full flex'>
                <span>order total: </span>
                <span className='ml-auto font-bold'>{isClient ? formatCurrency(cartTotal) : null}</span>
            </div>
        </div>
    )
}