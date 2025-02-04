import { Item } from 'react-use-cart';
import { formatCurrency, getItemCat } from './lib/utils';
import { ItemQuantityButton } from './ui/itemquantitybutton';
import Link from 'next/link';

export function CartItem({ item, className }: { item: Item, className: string }) {
    const params = new URLSearchParams()
    params.set('id', item.id.toString())
    params.set('itemtype', getItemCat(item))

    return (
        <div className={`${className} px-4 w-full flex items-start text-foreground`}>
            <Link className='flex-1' href={`/item?${params}`}>
                <span className='text-sm uppercase font-bold'>{item.brand} {getItemCat(item)}</span>
                <p className='text-base'>{item.name}</p>
                {/* {image ?
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        key={item.id}
                        src={image.url}
                        alt='image'
                        className='max-w-[100px] max-h-[100px] sm:max-w-[125px] sm:max-h-[125px]  w-auto h-auto'
                    /> : <div className='flex h-full items-center justify-center'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1} stroke='currentColor' className='size-6'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z' />
                        </svg>
                    </div>
                } */}
            </Link>
            <div className='flex flex-col items-end '>
                <span className='font-bold'>{item.quantity ? formatCurrency(item.price * item.quantity) : formatCurrency(item.price)}</span>
                <ItemQuantityButton id={item.id} />
            </div>
        </div>
    )
}