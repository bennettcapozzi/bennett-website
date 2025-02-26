import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/global.css';
import { Oxygen } from 'next/font/google';

const oxygen = Oxygen({variable: '--font-oxygen', weight: "300", subsets: ['latin']})

export default function App({ Component, pageProps }) {
      return (
            <Layout>
            <Component {...pageProps} />
            </Layout>
      );
    }