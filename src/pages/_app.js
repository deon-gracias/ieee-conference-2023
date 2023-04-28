import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";
import HomeLayout from "@/components/Home/HomeLayout";

export default function App({ Component, pageProps, footerLinks }) {
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
    <HomeLayout headerLinks={null} footerLinks={footerLinks}>
      <Head>
        <title>IEEE Conference 2023</title>
      </Head>
      <Component {...pageProps} />
    </HomeLayout>
  );
}

export async function getStaticProps() {
  const footerLinks = (
    await axios.get(pbURL + "/collections/footer/records?expand=content")
  ).data.items;

  const headerLinks = (
    await axios.get(pbURL + "/collections/header/records?expand=items")
  ).data.items;

  return {
    props: {
      footerLinks,
      headerLinks,
    },
  };
}
