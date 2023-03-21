import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>IEEE Conference 2023</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
