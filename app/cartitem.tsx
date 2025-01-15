import { Item } from 'react-use-cart';
import { getItemCat } from './lib/utils';
import { ItemQuantityButton } from './ui/itemquantitybutton';
import Link from 'next/link';

export function CartItem({ item }:{ item: Item }) {
    const params = new URLSearchParams()
    params.set('id', item.id.toString())
    params.set('itemtype', getItemCat(item))

    return (
        <div className='w-full py-3 flex border-b-1 border-b-foreground items-start'>
            <Link className='flex-1' href={`/details?${params}`}>
                <div className='pr-8'>
                    <p className='text-base'>{item.name} <span className='text-sm'>{getItemCat(item)}</span></p>
                    <p>{item.brand} : {item.price}</p>
                </div>
            </Link>
            <ItemQuantityButton id={item.id} />
        </div>
    )
}