'use client'
import { Suspense } from "react"
import { formatCurrency } from "./lib/utils"
import { useCart } from "react-use-cart"
import { CartItem } from "./cartitem"
import { Button, Popover, PopoverContent, PopoverTrigger, Spinner } from "@nextui-org/react"
import Marquee from "react-fast-marquee"

export function Cart() {
    const { items, emptyCart, isEmpty, cartTotal } = useCart()
    return (
        <Popover showArrow={true} placement="bottom-end" classNames={{
            base: ["before:glassmorphic-card"],
            content: "text-foreground items-start w-96 px-4 py-4 rounded-lg",
            trigger: "h-7 bg-primary rounded-full min-w-12 sm:min-w-20",
        }}>
            <PopoverTrigger >
                <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="background" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </Button>
            </PopoverTrigger>
            <PopoverContent >
                <div className="flex justify-between items-center w-full">
                    <p className="text-xl">cart</p>
                    <Button className="bg-transparent" radius="full" size="sm" onPress={() => (emptyCart())}>
                        remove all
                    </Button>
                </div>
                <Suspense fallback={<Spinner></Spinner>}>
                    <div className="flex flex-col min-h-12 h-fit w-full items-center">
                        {!isEmpty ? items.map((it, index) => (
                            <CartItem key={index} item={it} />
                        )) :
                            <div>
                                ...
                            </div>}
                    </div>
                </Suspense>
                <div className="w-full flex justify-between py-2">
                    <p className="text-xl italic">${formatCurrency(cartTotal)} </p>
                    <Button radius="full" className="bg-transparent" size="sm" onPress={() => (console.log('checkout page request'))}>
                        checkout
                    </Button>
                </div>
                {/* warning */}
                <Marquee autoFill speed={25} className="text-danger text-xs"> functionality isnt complete just yet - </Marquee>

            </PopoverContent>
        </Popover>
    )
}