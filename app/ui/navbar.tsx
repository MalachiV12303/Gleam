import Link from 'next/link';
import styles from './navbar.module.css';
import { ThemeSwitcher } from './themeswitcher';

export default function NavBar() {
    return (
        <header>
            <nav className="flex items-center justify-between sticky top-0 z-50 sm:gap-12 min-h-12 sm:min-h-16 px-20">
                <ThemeSwitcher />
                <Link
                    className={`${styles.button}`}
                    href="/store">
                    <span>Store</span>
                </Link>
            </nav>
        </header>
    );
}
