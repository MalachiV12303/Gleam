import Link from 'next/link';
import { useCart } from 'react-use-cart';
import { Button } from '@nextui-org/react';
import { Camera, Lense } from '@/app/lib/db/schema';
import { formatCurrency, isCamera, isLense } from '@/app/lib/utils';
import { motion } from 'motion/react';
import Image from 'next/image'
import { ListBlobResultBlob } from '@vercel/blob';


export function StoreItem({ item, image }: { item: Camera | Lense, image: ListBlobResultBlob | null }) {
    const { addItem } = useCart()
    const formattedValue = formatCurrency(item.price ?? 0)
    const params = new URLSearchParams()
    params.set('id', item.id.toString())

    if (isCamera(item))
        return Camera(item)
    else if (isLense(item))
        return Lense(item)
    else {
        return <div>unknown item type</div>;
    }

    //camera on store page
    function Camera(cam: Camera) {
        return (
            <>
                <div className='text-sm px-4 py-4 flex flex-col lg:flex-row gap-4 items-center justify-between overflow-hidden'>
                    <Link className='flex flex-col' href={`/details?${params}`} >
                        <p className='text-xl text-center sm:text-start '>{cam.name}</p>
                        <div className='flex flex-row gap-2 xl:gap-3 lowercase flex-wrap'>
                            <p>{cam.type === 'DSLR' ? 'digital' : 'mirrorless'}</p>
                            <p>{cam.megapixels}mgp</p>
                            <p>{cam.res}p</p>
                            <p>{cam.brand}</p>
                        </div>
                        <div className='pr-1 text-xs mt-2 max-w-[95%] hidden sm:flex max-h-24 scrollbar overflow-y-scroll'>{cam.description}</div>
                    </Link>
                    <div className='flex gap-2 items-center sm:justify-between'>
                        <div className='px-2 py-2 border-1 border-foreground'>
                            <div id='imagePlaceholder' className='w-[150px] h-[150px] sm:w-[175px] sm:h-[175px] md:w-[225px] md:h-[225px] 2xl:w-[300px] 2xl:h-[300px] relative justify-center items-center'>
                                {image ?
                                    <Image
                                        key={item.id}
                                        src={image.url}
                                        alt='image'
                                        fill
                                        objectFit='contain'
                                    /> : <div className='flex h-full items-center justify-center'>
                                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1} stroke='currentColor' className='size-6'>
                                            <path strokeLinecap='round' strokeLinejoin='round' d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z' />
                                        </svg>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='min-w-20 flex flex-col items-center gap-2'>
                            <p className='sm:text-lg'>{formattedValue}</p>
                            <Button className='border-foreground border-1' variant='bordered' size='sm' onPress={() => (addItem(cam))}>
                                add
                            </Button>
                        </div>
                    </div>


                </div>
                <motion.div
                    viewport={{ amount: 0.8 }}
                    transition={{ duration: 1.5, ease: 'easeIn' }}
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: '95%', opacity: 100 }} className='h-[1px] bg-foreground mx-auto' />
            </>
        )
    }

    //lense on store page
    function Lense(len: Lense) {
        params.set('category', 'len')
        return (
            <>
                <div className='text-sm px-4 py-4 flex flex-col lg:flex-row gap-4 items-center justify-between overflow-hidden'>
                    <Link className='flex flex-col' href={`/details?${params}`} >
                        <p className='text-xl text-center sm:text-start '>{len.name}</p>
                        <div className='flex flex-col sm:flex-row gap-2 xl:gap-3 lowercase text-nowrap items-center sm:items-start'>
                            <div className='flex gap-2 xl:gap-3'>
                                <p>{len.type}</p>
                                <p>{len.brand}</p>
                                <p>{len.maxap}</p>
                            </div>
                            <div className='flex gap-2 xl:gap-3'>
                                <p>minfl {len.minfl}mm</p>
                                <p>maxfl {len.maxfl}mm</p>
                            </div>
                        </div>
                    </Link>
                    <div className='flex gap-2 items-center sm:justify-between'>
                        <div className='px-2 py-2 border-1 border-foreground'>
                            <div id='imagePlaceholder' className='w-[150px] h-[150px] sm:w-[175px] sm:h-[175px] md:w-[225px] md:h-[225px] 2xl:w-[300px] 2xl:h-[300px] relative justify-center items-center'>
                                {image ?
                                    <Image
                                        key={item.id}
                                        src={image.url}
                                        alt='image'
                                        fill
                                        objectFit='contain'
                                    /> : <div className='flex h-full items-center justify-center'>
                                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1} stroke='currentColor' className='size-6'>
                                            <path strokeLinecap='round' strokeLinejoin='round' d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z' />
                                        </svg>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='min-w-20 flex flex-col items-center gap-2'>
                            <p className='sm:text-lg'>{formattedValue}</p>
                            <Button className='border-foreground border-1' variant='bordered' size='sm' onPress={() => (addItem(len))}>
                                add
                            </Button>
                        </div>
                    </div>


                </div>
                <motion.div
                    viewport={{ amount: 0.8 }}
                    transition={{ duration: 1.5, ease: 'easeIn' }}
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: '95%', opacity: 100 }} className='h-[1px] bg-foreground mx-auto' />
            </>
        )
    }
}