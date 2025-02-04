'use client'

import { useEffect, useState } from 'react'
import { Checkout } from '../ui/checkout/checkout'
import { Spinner } from '@nextui-org/react'

export default function Page() {
    //this is to render cart information without ssr errors
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <section className='pt-[80px] min-h-[100dvh] relative max-w-screen flex flex-col mx-auto scrollbar items-center'>
            {isClient ? <Checkout /> : <Spinner/>}
        </section>
    )
}
