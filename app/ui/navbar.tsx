import Link from 'next/link'
import styles from './navbar.module.css'
import { ThemeSwitcher } from './themeswitcher'

export default function NavBar() {
    return (
        <header>
            <nav className="flex justify-center sticky top-0 z-50">
                <div className="w-full sm:w-11/12 md:w-10/12 min-h-12 sm:min-h-16 px-4 sm:px-8 flex items-center justify-between">
                <ThemeSwitcher />
                <Link
                    className={`${styles.button}`}
                    href="/store">
                    <span>Store</span>
                </Link>
                </div>
            </nav>
        </header>
    )
}
