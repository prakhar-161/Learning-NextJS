import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, sunt nostrum? Explicabo aliquam beatae voluptas est autem corporis, sequi amet.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore vero ipsum ducimus soluta ea fugit tempora non quia asperiores.</p>
      <Link href="/people">
        <a className={styles.btn}>See People's Listing</a>
      </Link>
    </div>
  )
}
