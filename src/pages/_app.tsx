import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kevin Dave | Software Developer</title>
        <meta name="description" content="Kevin Dave - Software Developer specializing in Flutter, Full Stack Web Development, and RESTful APIs. Building scalable, cloud-backed applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}