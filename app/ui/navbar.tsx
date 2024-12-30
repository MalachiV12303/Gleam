import styles from '@/app/ui/animations.module.css'
import Link from 'next/link'
import { Suspense } from 'react'

import { Cart } from '../cart'
import { ThemeSwitcher } from './themeswitcher'
import { Spinner } from '@nextui-org/react'

export default function NavBar() {
    return (
        <header>
            <nav className="flex justify-center w-full fixed top-0 z-50 select-none overflow-hidden">
                <div className="min-h-10 md:min-h-16 w-full sm:w-10/12 px-8 flex items-center justify-evenly">
                    <ThemeSwitcher />
                    <Link href="/store" className={`${styles.hoverUnderline}`}>
                        <div className="flex px-2 py-1 gap-1 sm:gap-3 items-center">
                            <div className="w-2 h-2 rounded-sm bg-white sm:bg-purple-600 md:bg-blue-600 lg:bg-green-600 xl:bg-yellow-600 2xl:bg-red-600"></div>
                            <span>s</span>
                            <span>t</span>
                            <span>o</span>
                            <span>r</span>
                            <span>e</span>
                        </div>
                    </Link>
                    <Suspense fallback={<Spinner className="min-w-20"></Spinner>}>
                        <Cart />
                    </Suspense>
                </div>
            </nav>
        </header>
    )
}
