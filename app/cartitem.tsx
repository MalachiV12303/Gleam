
import Link from 'next/link'
import { Item, useCart } from 'react-use-cart'
import { formatCurrency, getItemCat } from './lib/utils'
import { Button } from '@nextui-org/react'
export function CartItem({ item, className }: { item: Item, className: string }) {
    const { updateItemQuantity } = useCart() 
    const params = new URLSearchParams()
    params.set('id', item.id.toString())
    params.set('itemtype', getItemCat(item))


    return (
        <div className={`${className} px-4 w-full flex items-start text-foreground`}>
            <Link className='flex-1' href={`/item?${params}`}>
                <span className='text-sm uppercase font-bold'>{item.brand} {getItemCat(item)} </span>
                <p className='text-base'>{item.name}</p>
            </Link>
            <div className='flex flex-col items-end '>
                <span className='font-bold'>  {item.quantity ? formatCurrency(item.price * item.quantity) : formatCurrency(item.price)}</span>
                <span>{item.quantity} in cart</span>
                <Button variant='light'
                    className='w-fit min-h-0 h-fit'
                    isIconOnly
                    disableRipple
                    onPress={() => (updateItemQuantity(item.id, item.quantity? item.quantity - 1 : 0))}>
                    remove one?
                </Button>
            </div>
        </div>
    )
}