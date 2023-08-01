import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import PoweredBy from "@/components/home/PoweredBy";
import Explore from "@/components/home/Explore";
import Speakers from "@/components/home/Speakers";
import { getHomeLayoutProps } from "@/helpers/prop-helpers";
import { pbURL } from "@/lib/pocketbase";
import axios from "axios";
import HomeLayout from "@/components/home/HomeLayout";

export default function Home({
  speakers,
  exploreLinks,
  headerLinks,
  footerLinks,
  contactLinks,
}) {
  return (
    <HomeLayout
      headerLinks={headerLinks}
      footerLinks={footerLinks}
      contactLinks={contactLinks}
    >
      <Hero />
      <PoweredBy />
      <About />
      <Speakers speakers={speakers} />
      <Explore exploreLinks={exploreLinks} />
    </HomeLayout>
  );
}

export async function getStaticProps() {
  const layoutProps = await getHomeLayoutProps();

  const speakers = (await axios.get(pbURL + "/collections/speakers/records"))
    .data.items;

  const exploreLinks = (await axios.get(pbURL + "/collections/explore/records"))
    .data.items;

  return {
    props: {
      speakers,
      exploreLinks,
      ...layoutProps,
    },
  };
}
