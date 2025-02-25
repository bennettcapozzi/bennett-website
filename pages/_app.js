import React from 'react';
import { Oxygen } from 'next/font/google';

const oxygen = Oxygen({variable: '--font-oxygen', weight: "300", subsets: ['latin']})

export default function App({ Component, pageProps }) {
      return (
            <Component {...pageProps} />
      );
    }