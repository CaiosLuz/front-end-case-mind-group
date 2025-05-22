'use client';
import styles from './Home.module.css';
import Link from 'next/link';

export default function Home() {

  const article = {
    id: '01',
    title:  'Desvendando o JavaScript: Dicas e Técnicas Essenciais para Desenvolvedores',
    author: 'John Doe',
    date: 'março, 20, 2025',
    image: '/images/codigo.png',
  };

  return (
    <div>
      <main className={styles.main}>

        {/* BLOCO DE DESTAQUE COM DUAS COLUNAS */}
        <div className={styles.destaquesPrincipais}>

          <div className={styles.coluna1}>
            <div >
              <img src={article.image} alt="Imagem principal" className={styles.imagemPrincipal}/>
            </div>
            <div className={styles.tituloPrincipal}>
              <h1>{article.title}</h1>
            </div>
            <div className={styles.blocoInfoPrincipal}>
              <div className={styles.infoDestaque}>
                <div className={styles.autorDestaque}>
                  <img src="/images/icon-avatar.png" alt="" className={styles.avatar}/>
                  <p>Por {article.author} - {article.date}</p>
                </div>
                <Link href="/article" className={styles.lerMais}>LER MAIS</Link>
              </div>
            </div>
          </div>

          <div className={styles.coluna2}>
            <h1 className={styles.h1Coluna2}>NEW</h1>
            <div className={styles.artigosColuna2}>
              <h3>Inteligência Artificial: O Futuro da Automação e da Transformação Digital</h3>
              <p>Neste artigo, exploramos como a inteligência artificial está moldando o futuro dos negócios e da tecno...</p>
            </div>
            <div className={styles.artigosColuna2}>
              <h3>Computação Quântica: O Próximo Grande Salto para a Tecnologia</h3>
              <p>A computação quântica promete revolucionar a maneira como processamos informações, superando as limitações dos computadores tradicionais. Neste artig...</p>
            </div>
            <div className={styles.artigosColuna2}>
              <h3>Como a Internet das Coisas (IoT) Está Moldando o Futuro das Cidades Inteligentes</h3>
              <p>A Internet das Coisas (IoT) é um dos pilares das cidades inteligentes, conectando dispositivos do dia a dia à internet para coletar e compartilhar dados. Neste artig...</p>
            </div>
            <div className={styles.artigosColuna2}>
              <h3>O Impacto da Realidade Virtual e Aumentada no Setor de Educação</h3>
              <p>A realidade virtual (RV) e aumentada (RA) estão ganhando destaque no setor educacional, proporcionando novas maneiras de aprender e ensinar.</p>
            </div>
          </div>
        </div>

        {/* BLOCO DOS DEMAIS ARTIGOS */}
        <div className={styles.destaqueSub}>
          
          <div className={styles.artigoColuna1}>
            <div className={styles.imagemNum}>
              <img src="/images/celular.png" alt="" className={styles.imagemSub}/>
              <h1 className={styles.numero}>1</h1>
            </div>
            <div>
              <p className={styles.tituloSub}>5 Gerações de Redes 5G: O Que Esperar da Próxima Revolução da Conectividade</p>
            </div>
            <div className={styles.data}>
              <p>Março 19, 2025</p>
            </div>
          </div>
          
          <div className={styles.artigoColuna2}>
            <div className={styles.imagemNum}>
              <img src="/images/corrente.png" alt="" className={styles.imagemSub}/>
              <h1 className={styles.numero}>2</h1>
            </div>
            <div>
              <p className={styles.tituloSub}>Blockchain Além das Criptomoedas: Como a Tecnologia Está Transformando Indústrias Trad...</p>
            </div>
            <div className={styles.data}>
              <p>Março 20, 2025</p>
            </div>
          </div>

          <div className={styles.artigoColuna3}>
            <div className={styles.imagemNum}>
              <img src="/images/artigoImagem.png" alt="" className={styles.imagemSub}/>
              <h1 className={styles.numero}>3</h1>
            </div>
            <div>
              <p className={styles.tituloSub}>Dominando TypeScript: Por que a Tipagem Estática Está Transformando o Desenvolvimento</p>
            </div>
            <div className={styles.data}>
              <p>Março 16, 2025</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}