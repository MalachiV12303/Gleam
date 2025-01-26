import { useCart } from 'react-use-cart';
import { Button, ButtonGroup } from '@nextui-org/react';
const MAXQUANTITY = 10;

export function ItemQuantityButton({ id }: { id: string }) {
    const { getItem, updateItemQuantity } = useCart()
    const item = getItem(id)
    return (
        <ButtonGroup radius='full'>
            <Button variant='light' className='text-inherit text-lg min-w-8 h-5 w-fit rounded-full border-1 border-background' isIconOnly
                onClick={() => (updateItemQuantity(item.id, item.quantity ? item.quantity - 1 : 0))}>-</Button>
            <Button className='text-inherit min-w-10 bg-transparent px-0 text-sm lg:text-base' isDisabled>
                {item.quantity}
            </Button>
            <Button variant='light' className='text-inherit text-lg min-w-8 h-5 w-fit rounded-full border-1 border-background' isIconOnly
                onClick={() => (updateItemQuantity(item.id, item.quantity >= MAXQUANTITY ? item.quantity : item.quantity + 1))}>+</Button>
        </ButtonGroup>
    )
}