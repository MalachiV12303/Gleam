import Link from 'next/link'
import styles from './navbar.module.css'
import { ThemeSwitcher } from './themeswitcher'
import { Cart } from '../cart'
import { Suspense } from 'react'
import { Spinner } from '@nextui-org/react'

export default function NavBar() {
    return (
        <header>
            <nav className="flex justify-center sticky top-0 z-50">
                <div className="w-full sm:w-11/12 md:w-10/12 min-h-12 sm:min-h-16 px-4 sm:px-8 flex items-center justify-between">
                <ThemeSwitcher />
                <Link
                    className={`${styles.button}`}
                    href="/store">
                        <div className="flex gap-1">
                            <span>s</span>
                            <span>t</span>
                            <span>o</span>
                            <span>r</span>
                            <span>e</span>
                        </div>
                </Link>
                <Suspense fallback={<Spinner></Spinner>}>
                    <Cart/>
                </Suspense>
                </div>
            </nav>
        </header>
    )
}
