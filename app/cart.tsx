'use client'

import { CartItem } from "./cartitem"
import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import { useCart } from "react-use-cart"

export function Cart() {
    const { items, emptyCart, isEmpty } = useCart()

    return (
        <>
            <Popover triggerType="listbox" showArrow={true} placement="bottom-end" classNames={{
                base: ["before:bg-foreground",],
                content: "bg-foreground text-background items-start", 
                trigger: "h-7 bg-primary rounded-full min-w-fit",
            }}>
                <PopoverTrigger>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="background" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </Button>
                </PopoverTrigger>

                <PopoverContent >
                    {!isEmpty ? items.map((it, index)=>(
                            <CartItem key={index} item={it} />
                    )) : 
                    <div>
                        empty cart
                    </div>}
                    <div className="px-1 py-2 lowercase flex gap-2">
                        <button onClick={() => (emptyCart())}>Clear</button>
                    </div>
                </PopoverContent>

            </Popover>
        </>)
}

{/* <div>
                Total{" "}
                {formatCurrency(
                    cart.reduce((total, cartItem) => {
                        const item = storeItems.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity
                    }, 0)
                )}
            </div> */}