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
                <p>Por {article.author} - {article.date}</p>
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

// const article = {
//     title: 'Dominando TypeScript: Por que a Tipagem Estática Está Transformando o Desenvolvimento JavaScript',
//     author: 'John Doe',
//     date: 'março, 20, 2025',
//     image: '/images/artigoImagem.png',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales leo nisi, at scelerisque metus pharetra sed. Nulla eu efficitur dolor. Integer sit amet dui ornare, tempor risus a, vestibulum purus. Morbi lacus magna, molestie varius elit a, dignissim volutpat dui. Nam sit amet sem condimentum, hendrerit tortor nec, ultricies eros. Curabitur eget sodales odio, non tempor ex. Vestibulum id fringilla est. Praesent id urna nisi. Phasellus ac odio eros. Vestibulum dictum erat nibh, vel placerat est condimentum vel. Phasellus malesuada, leo et commodo hendrerit, nisi tortor tincidunt ipsum, ut tincidunt enim sapien vel neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus eu auctor felis. Proin vitae malesuada mauris. Morbi quis ex ligula. Aenean consectetur mauris non iaculis porta. Nunc ultrices, mauris tincidunt pulvinar scelerisque, dolor est condimentum metus, ut interdum est nisl ut ante. Cras rhoncus lacus eu finibus convallis. Ut varius lacus eros, eget suscipit odio aliquet nec. Nam sem eros, ornare ac erat eu, pharetra finibus ex. Donec in massa vitae lectus blandit posuere. Cras ut risus id metus mattis dictum. \n\nPellentesque at urna feugiat, accumsan diam vel, condimentum mi. Fusce ac semper arcu, vel pellentesque ante. Aenean et volutpat orci. Donec vitae feugiat odio. Aenean vel luctus sem, vitae cursus urna. Suspendisse consectetur urna vitae aliquam ornare. Donec mattis nisl id lectus sollicitudin, pulvinar dictum velit lacinia. Quisque finibus justo a nibh rhoncus, a efficitur purus maximus. Etiam posuere libero id fringilla maximus. Morbi molestie quam fermentum dolor hendrerit condimentum. Suspendisse accumsan semper pretium. Donec nisi lacus, feugiat eu sem at, pretium consequat dolor. Integer commodo massa nisi, quis viverra massa interdum ac. Ut commodo et magna vel lobortis. Nullam varius enim nec ultricies lacinia. Proin egestas tempus est. \n\nCras ac ex ac ex auctor semper ac quis metus. Praesent et tempus nibh. Nam a efficitur risus. Cras nibh ex, lobortis at aliquam et, varius vitae turpis. Duis consequat velit varius velit mattis, non maximus est elementum. Donec vel tellus cursus enim posuere tempus ac at velit. Maecenas quis eros purus. Proin vulputate ante vitae placerat varius. Maecenas vitae ligula nec tortor tempor lobortis non quis velit. Sed vulputate et erat id laoreet. Etiam erat mi, bibendum non mauris id, aliquet malesuada urna. Nam ex est, vehicula eget consequat in, bibendum ac elit. Fusce porta pellentesque placerat. \n\nSuspendisse potenti. Sed pulvinar facilisis libero vitae gravida. Nam quis pellentesque sapien. Pellentesque venenatis vel ipsum tincidunt hendrerit. Vestibulum eleifend erat nec sem aliquam, aliquet lacinia est congue. Fusce a nisl non massa congue vestibulum sed nec nisl. Vestibulum id maximus nibh. Aliquam ante sapien, dapibus ac vestibulum interdum, lacinia vitae mauris. Etiam non posuere orci, non semper risus. Aenean non facilisis urna. Praesent ut dui nibh. Morbi lacus dolor, egestas facilisis pellentesque in, cursus pretium ligula. Praesent rutrum turpis in nisl blandit, a euismod lectus suscipit. Vivamus ut ullamcorper odio, vel vulputate lacus.'
//   };

//   return (
//     <div>
//       <main className={styles.main}>

//         <div className={styles.header}>
//           <h1 className={styles.title}>{article.title}</h1>
//           <p className={styles.author}>Por {article.author} - {article.date}</p>
//           <div className={styles.linha}></div>
//           <div className={styles.imagemArtigo}>
//             <img src={article.image} alt="Imagem do artigo" className={styles.imagem} />
//           </div>
//           <p className={styles.content}>{article.content}</p>
//         </div>
      
//       </main>
//     </div>
//   );