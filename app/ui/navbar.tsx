'use client'

import Link from 'next/link'
import { Cart } from '../cart'
import { ThemeSwitch } from './themeswitch'
import { cinzel } from './fonts'
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const pathname = usePathname();
    return (
        <>
            <div className='fixed select-none px-8 py-4 z-30 text-lg tracking-widest w-full items-center justify-end top-0 flex h-16'>
                {/* bg-red-400 sm:bg-blue-400 md:bg-green-400 lg:bg-pink-400 xl:bg-orange-400 2xl:bg-black */}
                {/* <div className='bg-red-400 sm:bg-blue-400 md:bg-green-400 lg:bg-pink-400 xl:bg-orange-400 2xl:bg-black inline-flex border-1 w-4 border-foreground rounded-lg '/> */}
                {pathname === '/' ? null : <Link href='/' className={`${cinzel.className} px-2 bg-background text-3xl mr-auto`}>GLEAM</Link>}
                <div className='flex items-center gap-4 px-4'>
                    <ThemeSwitch />
                    <Cart />
                    <Link className='bg-background rounded-full inline-flex items-center justify-center px-2' href={`/store?`}>
                        catalogue
                    </Link>
                </div>
            </div>
        </>
    )
}
