import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";
import HomeLayout from "@/components/Home/HomeLayout";

export default function App({
  Component,
  pageProps,
}) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      delay: 300,
      easing: "ease-in-out-sine",
      once: true,
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