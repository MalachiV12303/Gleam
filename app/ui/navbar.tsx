import Link from 'next/link';
import styles from './navbar.module.css';

export default function NavBar(){
    return (
        <header>
            <nav className="bg-background flex items-center justify-center sticky top-0 z-50 sm:gap-12 min-h-12 sm:min-h-16">
                    <Link 
                        className={`${styles.button}`}
                        href="/store">
                        <span>Store</span>
                    </Link>
            </nav>
        </header>
    );
}
