import styles from './Register.module.css';

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.logo}>
          M.
          <p>Inovação ao Seu Alcance.</p>
        </div>
        <div className={styles.conteudo}>
          <h2>Registrar</h2>
          <form action="" className={styles.formulario}>
            <label htmlFor="nome">Nome</label>
            <input type="text" placeholder="Digite seu nome"/>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="email@email.com"/>
            <label htmlFor="senha">Senha</label>
            <input type="password" placeholder="∗∗∗∗"/>
            <label htmlFor="senha">Confirmar senha</label>
            <input type="password" placeholder="∗∗∗∗"/>
            <button type="submit">Criar conta</button>
            <p className={styles.novoUsuario}>Já tem cadastro?<Link href="../login">   Clique aqui</Link></p>
          </form>
        </div>
      </main>
    </div>
  );
}
