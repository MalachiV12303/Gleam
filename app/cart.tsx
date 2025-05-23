import React, { useEffect, useState } from 'react'
import { formatCurrency } from './lib/utils'
import { useCart } from 'react-use-cart'
import { CartItem } from './cartitem'
import { Badge, Button, Link, Popover, PopoverContent, PopoverTrigger, Tooltip } from '@nextui-org/react'

export function Cart() {
    const { items, emptyCart, isEmpty, cartTotal, totalItems } = useCart()
    const [totalQuantity, setTotalQuantity] = useState(0)
    useEffect(() => {
        setTotalQuantity(totalItems)
    }, [totalItems])

    return (
        <Popover placement={'bottom-end'} shouldBlockScroll={true} classNames={{
            trigger: ['bg-background text-foreground', 'min-w-0 px-4 rounded-full h-7'],
            content: ['border-1 border-foreground bg-background text-foreground text-lg lg:text-sm px-0 py-0', 'flex flex-row', 'h-[60dvh] w-[80dvw] sm:w-[60dvw] xl:w-[30dvw]'],
        }}>
            <Badge isInvisible={isEmpty} content={totalQuantity} className='text-sm min-w-6 tracking-tight bg-foreground text-background pr-[1px] pl-[1px] sm:pl-0 pt-[1px]'>
                <PopoverTrigger>
                    <Button>
                        cart
                    </Button>
                </PopoverTrigger>
            </Badge>
            <PopoverContent>
                <div id='cartPanel' className='h-full border-foreground flex flex-col w-[100%] items-center justify-start'>
                    <div id='cartItems' className='mt-2 sm:mt-4 px-2 flex flex-col divide-y-1 divide-foreground border-foreground items-start w-full gap-3 overflow-y-auto no-scrollbar flex-1 select-none'>
                        {!isEmpty ? items.map((it, index) => (
                            <CartItem key={index} item={it} className={'px-2 py-4'} />
                        )) :
                            <div className='w-full flex h-full my-auto gap-2 items-center justify-center'>
                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1} stroke='currentColor' className='size-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664' />
                                </svg>
                                <p>no gear...</p>
                            </div>
                        }
                    </div>
                    <div id='cartTotal' className='bg-foreground text-background flex py-3 px-4 w-full text-lg'>
                        <span>bag total:</span>
                        <span className='ml-auto'>${formatCurrency(cartTotal)}</span>
                    </div>
                </div>

                <div id='cartButtons' className='border-l-1 border-foreground text-background h-full flex flex-col gap-2'>
                    {/* <Tooltip
                        content='close'
                        classNames={{
                            content: ['text-xs h-min w-min rounded-full select-none'],
                        }}
                        placement='right'>
                        <Button variant='light' className='text-foreground rounded-bl-lg min-w-0 w-auto h-auto aspect-square' size='sm' onPress={() => (setIsOpen(false))}>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1} stroke='currentColor' className='size-5'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
                            </svg>
                        </Button>
                    </Tooltip> */}
                    <Tooltip
                        content='empty cart'
                        classNames={{
                            content: ['text-xs h-min w-min text-nowrap rounded-full select-none'],
                        }}
                        placement='right'>
                        <Button variant='light' className='text-foreground rounded-l-lg min-w-0 h-auto aspect-square' size='sm' onPress={() => (emptyCart())}>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1} stroke='currentColor' className='size-5'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0' />
                            </svg>
                        </Button>
                    </Tooltip>
                    <Tooltip
                        content='checkout'
                        classNames={{
                            content: ['text-xs h-min w-min rounded-full select-none'],
                        }}
                        placement='right'>
                        <Link className='flex text-foreground justify-center rounded-tl-lg mt-auto min-w-0 h-auto aspect-square' href='/checkout'>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1} stroke='currentColor' className='size-6'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75' />
                            </svg>
                        </Link>
                    </Tooltip>
                </div>
            </PopoverContent>
        </Popover>
    )
}