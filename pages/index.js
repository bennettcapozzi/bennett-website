import Head from 'next/head';
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.imageContainer}>
    <Image
            priority
            src="/577.jpg"
            className={styles.image}
            height={828}
            width={1110}
            alt=""
          />
    <Image
            priority
            src="/524.jpg"
            className={styles.image}
            height={828}
            width={1110}
            alt=""
          />
          </div>

  );
}
