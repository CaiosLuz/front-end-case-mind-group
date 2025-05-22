'use client';
import styles from './Articles.module.css';

export default function Articles() {

  const article = {
    id: '01',
    title:  'Dominando TypeScript: Por que a Tipagem Estática Está Transformando o Desenvolvimento JavaScript',
    author: 'John Doe',
    date: 'Março, 20, 2025',
    content: 'TypeScript, uma superconjunto de JavaScript, tem se tornado uma escolha popular entre desenvolvedores para garantir código mais seguro e fácil de manter. Neste artigo, vamos explorar os benefícios da tipagem estática no...',
    image: '/images/artigoImagem.png',
  };

  return (
    <main className={styles.main}>

      <div className={styles.card}>
        <div >
          <img src={article.image} alt="Imagem principal" className={styles.imagemPrincipal}/>
        </div>
        <div className={styles.tituloPrincipal}>
          <p>{article.title}</p>
        </div>
        <div className={styles.content}>
          <p>{article.content}</p>
        </div>
        <div className={styles.blocoInfoPrincipal}>
          <div className={styles.infoDestaque}>
            <p>Por {article.author} - {article.date}</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div >
          <img src={article.image} alt="Imagem principal" className={styles.imagemPrincipal}/>
        </div>
        <div className={styles.tituloPrincipal}>
          <p>{article.title}</p>
        </div>
        <div className={styles.content}>
          <p>{article.content}</p>
        </div>
        <div className={styles.blocoInfoPrincipal}>
          <div className={styles.infoDestaque}>
            <p>Por {article.author} - {article.date}</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div >
          <img src={article.image} alt="Imagem principal" className={styles.imagemPrincipal}/>
        </div>
        <div className={styles.tituloPrincipal}>
          <p>{article.title}</p>
        </div>
        <div className={styles.content}>
          <p>{article.content}</p>
        </div>
        <div className={styles.blocoInfoPrincipal}>
          <div className={styles.infoDestaque}>
            <p>Por {article.author} - {article.date}</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div >
          <img src={article.image} alt="Imagem principal" className={styles.imagemPrincipal}/>
        </div>
        <div className={styles.tituloPrincipal}>
          <p>{article.title}</p>
        </div>
        <div className={styles.content}>
          <p>{article.content}</p>
        </div>
        <div className={styles.blocoInfoPrincipal}>
          <div className={styles.infoDestaque}>
            <p>Por {article.author} - {article.date}</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div >
          <img src={article.image} alt="Imagem principal" className={styles.imagemPrincipal}/>
        </div>
        <div className={styles.tituloPrincipal}>
          <p>{article.title}</p>
        </div>
        <div className={styles.content}>
          <p>{article.content}</p>
        </div>
        <div className={styles.blocoInfoPrincipal}>
          <div className={styles.infoDestaque}>
            <p>Por {article.author} - {article.date}</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div >
          <img src={article.image} alt="Imagem principal" className={styles.imagemPrincipal}/>
        </div>
        <div className={styles.tituloPrincipal}>
          <p>{article.title}</p>
        </div>
        <div className={styles.content}>
          <p>{article.content}</p>
        </div>
        <div className={styles.blocoInfoPrincipal}>
          <div className={styles.infoDestaque}>
            <p>Por {article.author} - {article.date}</p>
          </div>
        </div>
      </div>

    </main> 
  );
}