import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import PoweredBy from "@/components/Home/PoweredBy";
import Explore from "@/components/Home/Explore";
import Speakers from "@/components/Home/Speakers";
import { pbURL } from "@/lib/pocketbase";
import axios from "axios";

export default function Home({ speakers, exploreLinks }) {
  return (
    <>
      <Hero />
      <PoweredBy />
      <About />
      <Speakers speakers={speakers} />
      <Explore exploreLinks={exploreLinks} />
    </>
  );
}

export async function getStaticProps() {
  const speakers = (await axios.get(pbURL + "/collections/speakers/records"))
    .data.items;

  const footerLinks = (
    await axios.get(pbURL + "/collections/footer/records?expand=content")
  ).data.items;

  const contactLinks = (await axios.get(pbURL + "/collections/contact/records"))
    .data.items;

  const exploreLinks = (await axios.get(pbURL + "/collections/explore/records"))
    .data.items;

  return {
    props: {
      speakers,
      footerLinks,
      contactLinks,
      exploreLinks,
    },
  };
}
