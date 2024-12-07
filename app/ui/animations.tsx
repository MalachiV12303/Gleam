import styles from '@/app/ui/animations.module.css';
export function LoadingAnim() {
    return (
        <>
            <div className={`${styles.spinnerbox} mx-auto`}>
                <div className={`${styles.configureborder1} bg-foreground`}>
                    <div className={`${styles.configurecore} bg-background`}></div>
                </div>
                <div className={`${styles.configureborder2} bg-foreground`}>
                    <div className={`${styles.configurecore} bg-background`}></div>
                </div>
            </div>
        </>);
}