import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { useCart } from 'react-use-cart'
import { Button } from '@nextui-org/react'
import { Camera, Lense } from '@/app/lib/db/schema'
import { formatCurrency, isCamera, isLense } from '@/app/lib/utils'
import { motion } from 'motion/react'

export function StoreItem({ item }: { item: Camera | Lense }) {
    const { addItem } = useCart()
    const formattedValue = formatCurrency(item.price ?? 0)
    const params = new URLSearchParams()
    params.set("id", item.id.toString())

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
            <>
                <div className='text-sm px-4 py-4 flex flex-col lg:flex-row gap-4 items-center justify-between overflow-hidden'>
                    <Link className='flex flex-col' href={`/item?${params}`} >
                        <p className="text-xl text-center sm:text-start ">{cam.name}</p>
                        <div className="flex flex-row gap-2 xl:gap-3 lowercase text-nowrap">
                            <p>{cam.type === 'DSLR' ? "digital" : "mirrorless"}</p>
                            <p>{cam.megapixels}mgpx</p>
                            <p>{cam.res}p</p>
                            <p>{cam.brand}</p>
                        </div>
                        <div className='text-xs xl:text-sm mt-2 max-w-[90%] hidden sm:flex'>{cam.description}</div>
                    </Link>

                    <div className='flex gap-2 items-center sm:justify-between'>
                        <div id='imagePlaceholder' className='w-[150px] h-[150px] sm:w-[225px] sm:h-[225px] 2xl:w-[300px] 2xl:h-[300px] border-1 border-foreground flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>
                        <div className="min-w-20 flex flex-col items-center gap-2">
                            <p className="sm:text-lg">{formattedValue}</p>
                            <Button className="border-foreground border-1" variant="bordered" size="sm" onPress={() => (addItem(cam))}>
                                add
                            </Button>
                        </div>
                    </div>


                </div>
                <motion.div
                    viewport={{ amount: 0.8 }}
                    transition={{ duration: 1.5, ease: "easeIn" }}
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: '95%', opacity: 100 }} className='h-[1px] bg-foreground mx-auto' />
            </>
        )
    }

    //lense on store page
    function Lense(len: Lense) {
        params.set("itemtype", "len")
        return (
            <div className="snap-start relative px-2 py-4 sm:px-4 sm:py-6 w-full border-b-1 border-b-foreground">
                <Link href={`/item?${params}`} className="flex text-sm justify-between">
                    <div>
                        <p className="sm:text-lg">{len.name}</p>
                        <div className="w-72 flex gap-3 lowercase justify-between">
                            <p>{len.type}</p>
                            <p>{len.brand}</p>
                        </div>
                        <Marquee autoFill pauseOnHover speed={20} className="max-w-72">
                            <p className="text-danger px-2">{len.details ? "need to format lense details" : "need to format lense details"}</p>
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