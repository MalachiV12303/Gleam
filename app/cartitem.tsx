import { Item, useCart } from "react-use-cart"
import { Button, ButtonGroup } from "@nextui-org/react"
import { isCamera } from "./lib/utils"

export function CartItem({ item }: { item: Item }) {
    const { updateItemQuantity, addItem } = useCart()
    return (
        <div className="w-full py-2 flex border-b-1 border-b-foreground">
            <div className="flex-1">
                <p>{item.name}</p>
                <p className="lowercase">{isCamera(item) ? item.type : null}</p>
            </div>

            <ButtonGroup size="md" radius="full">
                <Button variant='light' className="min-w-8 h-5 w-fit rounded-full border-1" isIconOnly onClick={() => (updateItemQuantity(item.id, item.quantity? item.quantity - 1 : 0))} >-</Button>
                <Button className="min-w-10 bg-transparent px-0" isDisabled>
                    <div className="flex flex-col text-sm lg:text-xs">
                        <span>{item.quantity}</span>
                        <span>{item.quantity? (item.price*item.quantity).toFixed(2) : item.price}</span>
                    </div>
                </Button>
                <Button variant='light' className="min-w-8 h-5 w-fit rounded-full border-1" isIconOnly onClick={() => (addItem(item))}>+</Button>
            </ButtonGroup>
        </div>
    )
}