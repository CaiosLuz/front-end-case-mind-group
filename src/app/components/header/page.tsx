import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <main className={styles.main}>
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">M.</Link>
            </div>

            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li>
                        <Link href="/" className={styles.navLink}>Home</Link>
                    </li>
                    <li className={styles.separatorRight}>
                        <Link href="./artigo" className={styles.navLink}>Artigos</Link>
                    </li>
                    <li>
                        <Link href="../article/new" className={styles.navLink}>Publicar</Link>
                    </li>
                    <li>
                        <img src="/images/icon-avatar.png" alt="" className={styles.avatar}/>
                    </li>
                </ul>
            </nav>
        </header>
    </main>
  );
}
