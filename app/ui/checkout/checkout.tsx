'use client'
import { useCart } from "react-use-cart";

export function Checkout() {
    const { items, isEmpty, cartTotal } = useCart();

    return (
        <div className='h-[50dvh] w-[40dvw] px-4 py-2 flex flex-col gap-2'>
            {!isEmpty ? items.map((it, index) => (
                <div key={index} className='px-4 py-2 bg-foreground text-background flex justify-between'>
                    <div>{it.name} - {it.brand}</div>
                    <div>{it.price}  #{it.quantity}</div>
                </div>
            )):<div>empty cart</div>}
            <div className='ml-auto mt-auto px-4 py-2 bg-foreground text-background w-fit'>
                {cartTotal}
            </div>
        </div>
    )
}