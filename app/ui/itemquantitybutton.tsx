import { useCart } from 'react-use-cart'
import { Button } from '@nextui-org/react'
export function ItemQuantityButton({ id }: { id: string }) {
    const { getItem, updateItemQuantity } = useCart()
    const item = getItem(id)
    return (
        <Button variant='light' 
            className='w-fit min-h-0 h-fit' 
            isIconOnly
            onPress={() => (updateItemQuantity(item.id, item.quantity - 1))}>
                remove one?
            </Button>
    )
}