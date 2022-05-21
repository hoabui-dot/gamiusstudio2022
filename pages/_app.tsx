import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import React, { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const inViewport = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active', entry.isIntersecting);
        }
      });
    };

    const Obs = new IntersectionObserver(inViewport);

    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL);
    });
  }, []);

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
