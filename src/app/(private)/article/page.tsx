'use client';
import styles from './Article.module.css';

export default function Article() {

  const article = {
    title: 'Dominando TypeScript: Por que a Tipagem Estática Está Transformando o Desenvolvimento JavaScript',
    author: 'John Doe',
    date: 'março, 20, 2025',
    image: '/images/artigoImagem.png',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales leo nisi, at scelerisque metus pharetra sed. Nulla eu efficitur dolor. Integer sit amet dui ornare, tempor risus a, vestibulum purus. Morbi lacus magna, molestie varius elit a, dignissim volutpat dui. Nam sit amet sem condimentum, hendrerit tortor nec, ultricies eros. Curabitur eget sodales odio, non tempor ex. Vestibulum id fringilla est. Praesent id urna nisi. Phasellus ac odio eros. Vestibulum dictum erat nibh, vel placerat est condimentum vel. Phasellus malesuada, leo et commodo hendrerit, nisi tortor tincidunt ipsum, ut tincidunt enim sapien vel neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus eu auctor felis. Proin vitae malesuada mauris. Morbi quis ex ligula. Aenean consectetur mauris non iaculis porta. Nunc ultrices, mauris tincidunt pulvinar scelerisque, dolor est condimentum metus, ut interdum est nisl ut ante. Cras rhoncus lacus eu finibus convallis. Ut varius lacus eros, eget suscipit odio aliquet nec. Nam sem eros, ornare ac erat eu, pharetra finibus ex. Donec in massa vitae lectus blandit posuere. Cras ut risus id metus mattis dictum. Pellentesque at urna feugiat, accumsan diam vel, condimentum mi. Fusce ac semper arcu, vel pellentesque ante. Aenean et volutpat orci. Donec vitae feugiat odio. Aenean vel luctus sem, vitae cursus urna. Suspendisse consectetur urna vitae aliquam ornare. Donec mattis nisl id lectus sollicitudin, pulvinar dictum velit lacinia. Quisque finibus justo a nibh rhoncus, a efficitur purus maximus. Etiam posuere libero id fringilla maximus. Morbi molestie quam fermentum dolor hendrerit condimentum. Suspendisse accumsan semper pretium. Donec nisi lacus, feugiat eu sem at, pretium consequat dolor. Integer commodo massa nisi, quis viverra massa interdum ac. Ut commodo et magna vel lobortis. Nullam varius enim nec ultricies lacinia. Proin egestas tempus est. Cras ac ex ac ex auctor semper ac quis metus. Praesent et tempus nibh. Nam a efficitur risus. Cras nibh ex, lobortis at aliquam et, varius vitae turpis. Duis consequat velit varius velit mattis, non maximus est elementum. Donec vel tellus cursus enim posuere tempus ac at velit. Maecenas quis eros purus. Proin vulputate ante vitae placerat varius. Maecenas vitae ligula nec tortor tempor lobortis non quis velit. Sed vulputate et erat id laoreet. Etiam erat mi, bibendum non mauris id, aliquet malesuada urna. Nam ex est, vehicula eget consequat in, bibendum ac elit. Fusce porta pellentesque placerat. Suspendisse potenti. Sed pulvinar facilisis libero vitae gravida. Nam quis pellentesque sapien. Pellentesque venenatis vel ipsum tincidunt hendrerit. Vestibulum eleifend erat nec sem aliquam, aliquet lacinia est congue. Fusce a nisl non massa congue vestibulum sed nec nisl. Vestibulum id maximus nibh. Aliquam ante sapien, dapibus ac vestibulum interdum, lacinia vitae mauris. Etiam non posuere orci, non semper risus. Aenean non facilisis urna. Praesent ut dui nibh. Morbi lacus dolor, egestas facilisis pellentesque in, cursus pretium ligula. Praesent rutrum turpis in nisl blandit, a euismod lectus suscipit. Vivamus ut ullamcorper odio, vel vulputate lacus.'
  };

  return (
    <div>
      <main className={styles.main}>

        {/* HEADER DO ARTIGO */}
        <div className={styles.header}>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.author}>Por {article.author} - {article.date}</p>
          <div className={styles.imagemArtigo}>
            <img src={article.image} alt="Imagem do artigo" className={styles.imagem} />
          </div>
          <p className={styles.content}>{article.content}</p>
        </div>

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