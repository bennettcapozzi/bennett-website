import Head from 'next/head';
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css';
import { Oxygen } from 'next/font/google';
import { Padauk } from 'next/font/google';

const oxygen = Oxygen({variable: '--font-oxygen', weight: "300", subsets: ['latin']});
const padauk = Padauk({variable: '--font-padauk', weight: "400", subsets: ['latin']});

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
      <Image
              priority
              src="/DSC01477.jpg"
              className={styles.image}
              height={828}
              width={1110}
              alt=""
            />
      </section>

      <footer>
      </footer>
      </Layout>
  );
}
