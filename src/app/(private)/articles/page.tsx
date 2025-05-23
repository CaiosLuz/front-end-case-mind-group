'use client';
import styles from './Articles.module.css';
import { useEffect, useState } from 'react';

type Artigo = {
  id: number,
  titulo: string,
  autor: 'John Doe',
  conteudo: string,
  imagem_url: string,
};

export default function Articles() {

  const [artigos, setArtigos] = useState<Artigo[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/artigos')
    .then(res => res.json())
    .then(data => setArtigos(data))
    .catch(err => console.error(err));
  }, []);

  return (
    <main className={styles.main}>

      {artigos.map((artigo) => (
        <div className={styles.card} key={artigo.id}>
          <div >
            <img src={artigo.imagem_url} alt="Imagem principal" className={styles.imagemPrincipal}/>
          </div>
          <div className={styles.tituloPrincipal}>
            <p>{artigo.titulo}</p>
          </div>
          <div className={styles.content}>
            <p>{artigo.conteudo}</p>
          </div>
          <div className={styles.blocoInfoPrincipal}>
            <div className={styles.infoDestaque}>
              <img src="/images/icon-avatar.png" alt="" className={styles.avatar}/>
              <p>Por {artigo.autor} - Maio, 22, 2025</p>
            </div>
          </div>
        </div>
      ))}

    </main> 
  );
}