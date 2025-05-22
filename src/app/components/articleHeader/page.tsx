'use client';
import styles from './Article.module.css';

type Props = {
  title: string;
  author: string;
  date: string;
}

export default function ArticleHeader({ title, author, date } : Props) {


  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.author}>Por {author} - {date}</p>
    </div>
  );
}