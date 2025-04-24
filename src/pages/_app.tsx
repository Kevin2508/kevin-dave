import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Add dark mode class to body if it's not already there
    if (!document.body.classList.contains('dark')) {
      document.body.classList.add('dark');
    }
  }, []);

  return <Component {...pageProps} />;
}