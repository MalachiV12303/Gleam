import { Item } from "react-use-cart"
export function CartItem({ item }: { item: Item }) {
    return (
        <div className="flex w-100 bg-white">
            <div>{item.name}</div>
            <div>{item.type}</div>
        </div>
    )
}