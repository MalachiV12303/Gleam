'use client'
import { formatCurrency, isCamera, isLense } from '@/app/lib/utils'
import Link from 'next/link'
import { Camera, Lense } from '@/app/lib/db/schema'
import { useCart } from 'react-use-cart'
import { Button } from '@nextui-org/react'

export function StoreItem({ item }: { item: Camera | Lense }) {
    const formattedValue = formatCurrency(item.price ?? 0)
    const params = new URLSearchParams()
    params.set("id", item.id.toString())
    const { addItem } = useCart()

    if (isCamera(item))
        return Camera(item)
    else if (isLense(item))
        return Lense(item)
    else {
        return <div>unknown item type</div>;
    }

    //camera on store page
    function Camera(cam: Camera) {
        params.set("itemtype", "cam")
        return (
            <div className="relative text-sm snap-start px-3 py-4 sm:px-5 sm:py-3 w-full border-b-1 border-b-white">
                <Link href={`/item?${params}`}>
                    <div className="sm:text-base flex justify-between">
                        <p>{cam.name} - {cam.brand}</p>
                        <p>{formattedValue}</p>
                    </div>
                    <p className="lowercase">{cam.type === 'DSLR' ? "digital" : "mirrorless"}</p>
                    <div className="flex gap-4">
                        <p>{cam.megapixels} megapixels</p>
                        <p>{cam.res}</p>
                    </div>
                </Link>
                <Button className="mr-3 sm:mr-5 absolute right-0 top-10" radius="full" variant="ghost" size="sm" onPress={() => (addItem(cam))}>
                    add
                </Button>
            </div>
        )
    }

    //lense on store page
    function Lense(len: Lense) {
        params.set("itemtype", "len")
        return (
            <div className="relative text-sm snap-start px-3 py-4 sm:px-5 sm:py-3 w-full border-b-1 border-b-white">
                <Link href={`/item?${params}`}>
                    <div className="sm:text-base flex justify-between">
                        <p>{len.name} - {len.brand}</p>
                        <p>{formattedValue}</p>
                    </div>
                    <p className="lowercase">{len.type === 'Telephoto Zoom' ? "telephoto zoom" : "standard prime"}</p>
                </Link>
                <Button className="mr-3 sm:mr-5 absolute right-0 top-10" radius="full" variant="ghost" size="sm" onPress={() => (addItem(len))}>
                    add
                </Button>
            </div>
        )
    }
}