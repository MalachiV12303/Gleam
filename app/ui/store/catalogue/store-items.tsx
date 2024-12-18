'use client'
import { formatCurrency, isCamera, isLense } from '@/app/lib/utils'
import Link from 'next/link'
import { Camera, Lense } from '@/app/lib/db/schema'
import { useCart } from 'react-use-cart'
import { Button } from '@nextui-org/react'
import Marquee from 'react-fast-marquee'

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
            <div className="snap-start relative px-2 py-4 sm:px-4 sm:py-6 w-full border-b-1 border-b-foreground">
                <Link href={`/item?${params}`} className="flex text-sm justify-between">
                    <div className="flex-1">
                        <p className="sm:text-lg">{cam.name}</p>
                        <div className="w-72 flex gap-3 lowercase justify-between">
                            <p>{cam.type === 'DSLR' ? "digital" : "mirrorless"}</p>
                            <p>{cam.brand}</p>
                            <p>{cam.megapixels} megapixels</p>
                            <p>{cam.res}p</p>
                        </div>
                        <Marquee autoFill pauseOnHover speed={20} className="max-w-72">
                            <p className="px-2">{cam.description}</p>
                        </Marquee>
                    </div>
                    <p className="sm:text-lg">{formattedValue}</p>
                </Link>
                <Button className="absolute bottom-6 right-0 mr-2 sm:mr-4" radius="full" variant="light" size="sm" onPress={() => (addItem(cam))}>
                        add
                </Button>
            </div>
        )
    }

    //lense on store page
    function Lense(len: Lense) {
        params.set("itemtype", "len")
        return (
            <div className="snap-start relative px-2 py-4 sm:px-4 sm:py-6 w-full border-b-1 border-b-foreground">
                <Link href={`/item?${params}`} className="flex text-sm justify-between">
                    <div className="flex-1">
                        <p className="sm:text-lg">{len.name}</p>
                        <div className="w-72 flex gap-3 lowercase justify-between">
                            <p>{len.type}</p>
                            <p>{len.brand}</p>
                        </div>
                        <Marquee autoFill pauseOnHover speed={20} className="max-w-72">
                            <p className="text-danger px-2">{len.details? "need to format lense details" : "need to format lense details"}</p>
                        </Marquee>
                    </div>
                    <p className="sm:text-lg">{formattedValue}</p>
                </Link>
                <Button className="absolute bottom-6 right-0 mr-2 sm:mr-4" radius="full" variant="light" size="sm" onPress={() => (addItem(len))}>
                        add
                </Button>
            </div>
        )
    }
}