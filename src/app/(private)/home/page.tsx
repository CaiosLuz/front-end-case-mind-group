'use client';
import styles from './Home.module.css';

export default function Home() {

  return (
    <div>
      <main className={styles.main}>

        {/* BLOCO DE DESTAQUE COM DUAS COLUNAS */}
        <div className={styles.destaquesPrincipais}>
          <div className={styles.coluna1}>

          </div>
          <div className={styles.coluna2}>

          </div>
        </div>

        {/* BLOCO DOS DEMAIS ARTIGOS */}
        <div className={styles.destaqueSub}>
          <div className={styles.artigoColuna1}>

          </div>
          <div className={styles.artigoColuna2}>
            
          </div>
          <div className={styles.artigoColuna3}>
            
          </div>
        </div>
      </main>
    </div>
  );
}