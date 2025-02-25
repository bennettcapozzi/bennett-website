import Head from 'next/head';
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Oxygen } from 'next/font/google';
import { Padauk } from 'next/font/google';

const oxygen = Oxygen({variable: '--font-oxygen', weight: "300", subsets: ['latin']});
const padauk = Padauk({variable: '--font-padauk', weight: "400", subsets: ['latin']});

export const siteTitle = 'Bennett Capozzi';

const items = [
  {
      title: "About Me",
      subtitle: "(Professional and Research Experience)",
      url: "#",
  },
  {
      title: "Masters Thesis",
      subtitle: "(Evolution of a Useful Place: The Gas Station in America)",
      url: "#",
  },
  {
      title: "City Speak",
      subtitle: "(Substack)",
      url: "https://bennettcapozzi.substack.com/",
  },
  {
      title: "Dedicated Co",
      subtitle: "(Web Design & Development Consulting)",
      url: "https://www.dedicated.codes",
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.flex}>
      <div>
      <div className={`${padauk.className} ${styles.siteTitle}`}>{siteTitle}</div>
      <div>
      {items.map((item) => (
        <Link href = {item.url}>
          <span>{item.title} </span>
          <span>{item.subtitle}</span>
          <br/>
        </Link>
      ))}  
      </div>
      </div>
        <main>
          {children}
        </main>
    </div>
  )
}
