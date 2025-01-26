import { Item } from 'react-use-cart';
import { formatCurrency, getItemCat } from './lib/utils';
import { ItemQuantityButton } from './ui/itemquantitybutton';
import Link from 'next/link';

export function CartItem({ item }: { item: Item }) {
    const params = new URLSearchParams()
    params.set('id', item.id.toString())
    params.set('itemtype', getItemCat(item))

    return (
        <div className='w-full px-2 py-2 flex items-start bg-foreground text-background'>
            <Link className='flex-1' href={`/details?${params}`}>
                <span className='text-sm uppercase font-bold'>{item.brand} {getItemCat(item)}</span>
                <p className='text-base'>{item.name}</p>
            </Link>
            <div className='flex flex-col items-end '>
                <span className='font-bold'>{item.quantity? formatCurrency(item.price * item.quantity) : formatCurrency(item.price)}</span>
                <ItemQuantityButton id={item.id} />
            </div>
        </div>
    )
}