import { Item, useCart } from "react-use-cart"
import { Button, ButtonGroup } from "@nextui-org/react"

export function CartItem({ item }: { item: Item }) {
    const { updateItemQuantity, addItem } = useCart()
    return (
        <div className="w-full min-h-16 px-2 py-2 flex border-b-1 border-b-foreground">
            <div className="flex-1">
                <p>{item.name}</p>
                <p className="text-sm lowercase">{item.type}</p>
            </div>
            <ButtonGroup size="md" radius="full">
                <Button className="min-w-8 h-6 w-fit rounded-full" isIconOnly onClick={() => (updateItemQuantity(item.id, item.quantity? item.quantity - 1 : 0))} >-</Button>
                <Button className="min-w-8 h-6 bg-transparent px-0" isDisabled>{item.quantity}</Button>
                <Button className="min-w-8 h-6 w-fit rounded-full" isIconOnly onClick={() => (addItem(item))}>+</Button>
            </ButtonGroup>
        </div>
    )
}