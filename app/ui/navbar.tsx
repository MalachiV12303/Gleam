import Link from 'next/link';
import styles from './navbar.module.css';

export default function NavBar(){
    return (
        <header>
            <nav className="bg-background flex items-center justify-center sticky top-0 z-50 gap-12 min-h-[4rem]">
                    <Link
                        className={`${styles.button}`}
                        href="/store/cameras">
                        <span>Cameras</span>
                    </Link>
                    <Link
                        className={styles.button}
                        href="/store/lenses">
                        <span>Lenses</span>
                    </Link>
                    <Link
                        className={styles.button}
                        href="/store/aerial">
                        <span>Aerial</span>
                    </Link>
                    <Link
                        className={styles.button}
                        href="/store/accessories">
                        <span>Accessories</span>
                    </Link>
            </nav>
        </header>
    );
}
