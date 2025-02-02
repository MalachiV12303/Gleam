'use client'

import Link from 'next/link'
import { Cart } from '../cart'
import { ThemeSwitch } from './themeswitch'
import { cinzel } from './fonts'
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'
import { Button } from '@nextui-org/react'
import { CategorySwitch } from './categoryswitch'
import { Suspense } from 'react'

export default function NavBar() {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <>
            <div className={clsx('fixed top-0 select-none z-30 text-xl tracking-widest w-full', { 'border-b-1 border-foreground bg-background sticky': pathname !== '/' })}>
                {/* bg-red-400 sm:bg-blue-400 md:bg-green-400 lg:bg-pink-400 xl:bg-orange-400 2xl:bg-black */}
                {/* <div className='bg-red-400 sm:bg-blue-400 md:bg-green-400 lg:bg-pink-400 xl:bg-orange-400 2xl:bg-black inline-flex border-1 w-4 border-foreground rounded-lg '/> */}
                <div className='flex items-center justify-end min-h-16 px-8 py-2 sm:py-0 flex-wrap'>
                    {pathname === '/' ? null : <Link href='/' className={`${cinzel.className} px-2 text-3xl mr-auto`}>GLEAM</Link>}
                    <div className='flex items-center gap-4 px-4'>
                        <ThemeSwitch />
                        {pathname.includes('store') ? <Cart/> : null}
                        {!pathname.includes('store') ? <Button onPress={() => (router.push('/store'))} className='h-7 min-w-0 bg-background rounded-full inline-flex items-center justify-center px-2' href={`/store?`}>store</Button>: null}
                    </div>
                </div>
                {pathname.includes('store') ? <Suspense><CategorySwitch /></Suspense> : null}
            </div>
        </>
    )
}
