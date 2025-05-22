'use client';

import { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuAcao = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Link href="/home">M.</Link>
        </div>

        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <Link href="/home" className={styles.navLink}>Home</Link>
                </li>
                <li className={styles.separatorRight}>
                    <Link href="./articles" className={styles.navLink}>Artigos</Link>
                </li>
                <li>
                    <Link href="../article/new" className={styles.navLink}>Publicar</Link>
                </li>
                <li className={styles.menuDrop}>
                    <img src="/images/icon-avatar.png" alt="" className={styles.avatar} onClick={menuAcao}/>
                    { isMenuOpen && (
                        <div className={styles.dropDown}>
                            <Link href="/editUser" className={styles.dropDownItem} onClick={() => setIsMenuOpen(false)}>Perfil</Link>
                            <Link href="/login" className={styles.dropDownItem} onClick={() => setIsMenuOpen(false)}>Desconectar</Link>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    </header>
  );
}
