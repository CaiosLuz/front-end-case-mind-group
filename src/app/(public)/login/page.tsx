import styles from './Login.module.css';

import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.logo}>
          M.
          <p>Inovação ao Seu Alcance.</p>
        </div>
        <div className={styles.conteudo}>
          <h2>Conectar</h2>
          <form action="" className={styles.formulario}>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="email@email.com"/>
            <label htmlFor="senha">Senha</label>
            <input type="password" placeholder="∗∗∗∗"/>
            <Link href="../esqueci-senha" className={styles.esqueceuSenha}>Esqueceu a senha?</Link>
            <button type="submit">Entrar</button>
            <p className={styles.novoUsuario}>Novo usuário?<Link href="../register">   Clique aqui</Link></p>
          </form>
        </div>
      </main>
    </div>
  );
}
