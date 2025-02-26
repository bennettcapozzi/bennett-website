import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Oxygen } from 'next/font/google';
import { Padauk } from 'next/font/google';
import { Gelasio } from 'next/font/google';

const oxygen = Oxygen (
{
  variable: '--font-oxygen', 
  weight: "300", 
  subsets: ['latin']
});
const padauk = Padauk (
{
  variable: '--font-padauk', 
  weight: "400", 
  subsets: ['latin']
});
const gelasio = Gelasio (
{
  variable: '--font-gelasio',
  weight: "400",
  style: ['normal', 'italic'],
  subsets: ['latin']
});

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
      subtitle: "(Urban Planning Writing on Substack)",
      url: "https://bennettcapozzi.substack.com",
      target: "_blank",
  },
  {
      title: "Dedicated Co",
      subtitle: "(Web Design & Development Consulting)",
      url: "https://www.dedicated.codes",
      target: "_blank",
  },
  {
    title: "LinkedIn",
    subtitle: "(If You'd Like to Connect)",
    url: "https://www.linkedin.com/in/bennett-capozzi-159147112/",
    target: "_blank",
},
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.flex}>
      <div className={styles.sidebar}>
      <div className={`${gelasio.className} ${styles.siteTitle}`}><Link href="#">{siteTitle}</Link></div>
      <div className={styles.linkList}>
      {items.map((item) => (
        <div className={styles.link}>
        <Link href = {item.url} target={item.target}>
          <span>{item.title} </span>
          <span className={styles.linkSubtitle}>{item.subtitle}</span>
          <br/>
        </Link>
        </div>
      ))}  
      </div>
      </div>
        <div className={styles.body}>
          {children}
        </div>
    </div>
  )
}
