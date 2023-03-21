import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-out-sine",
    });
  }, []);

  return (
    <>
      <Head>
        <title>IEEE Conference 2023</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
