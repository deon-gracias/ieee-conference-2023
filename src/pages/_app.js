import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";
import { useHomeStore } from "@/store/homeStore";

export default function App({ Component, pageProps }) {
  const { fetchSpeakers, fetchFooter, fetchExplore, fetchSchedule, fetchFaqs } =
    useHomeStore();

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      delay: 300,
      easing: "ease-in-out-sine",
      once: true,
    });

    fetchSpeakers();
    fetchFooter();
    fetchExplore();
    fetchSchedule();
    fetchFaqs();
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
