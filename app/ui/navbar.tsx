import Link from 'next/link';
import styles from './navbar.module.css';

export default function NavBar(){
    return (
        <header>
            <nav className="bg-background flex items-center justify-center sticky top-0 z-50 gap-12 min-h-[4rem]">
                    <Link
                        className={`${styles.button}`}
                        href="/">
                        <span>Home</span>
                    </Link>
                    <Link
                        className={`${styles.button}`}
                        href="/store/cameras">
                        <span>Store</span>
                    </Link>

            </nav>
        </header>
    );
}
