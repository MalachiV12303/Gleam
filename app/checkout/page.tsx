'use client'
import { useEffect, useState } from "react";
import { Checkout } from "../ui/checkout/checkout";
import { Spinner } from "@nextui-org/react";

export default function Page() {
    //this is to render cart information without ssr errors
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <div className='flex h-[100dvh] items-center justify-center'>
            {isClient ? <Checkout /> : <Spinner/>}
        </div>
    )
}
