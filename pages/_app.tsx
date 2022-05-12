import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import React from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src='https://kit.fontawesome.com/618a331a9e.js'
        crossOrigin='anonymous'
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
