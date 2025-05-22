'use client';
import styles from './ArticleCard.module.css';

export default function ArticleCard() {

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.imagemCard}>
          <img src="/image/artigoImagem.png" alt="" />
        </div>
        <div className={styles.titulo}>teste</div>
        <p className={styles.conteudo}></p>
        <div className={styles.ultimoBloco}>
          <div className={styles.usuario}></div>
          <div className={styles.data}></div>
          <div className={styles.curtida}></div>
        </div>
      </div>
    </main>
  );
}