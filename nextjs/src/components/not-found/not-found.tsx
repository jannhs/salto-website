import styles from './not-found.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo_salto from '@/public/logo_salto.png';

export function NotFoundPage() {
    return (
        < body className={styles['not-found-body']}>
            <div className={styles['not-found-container']}>
                <div className={styles['not-found-content']}>
                    <Image
                        src={logo_salto}
                        alt="SALTO Logo"
                        priority
                        className={styles['not-found-logo']}
                    />
                    <div className={styles['not-found-text']}>
                        <h1 className={styles['not-found-title']}>404 - Page Not Found</h1>
                        <p className={styles['not-found-description']}>
                            The page you are looking for does not exist or has been moved.
                        </p>
                        <Link  href="/" className={styles['not-found-link']}>Go to Home</Link>
                    </div>
                </div>
            </div>
        </body>
    );
}