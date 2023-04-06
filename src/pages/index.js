import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import PoweredBy from "@/components/Home/PoweredBy";
import Explore from "@/components/Home/Explore";
import Speakers from "@/components/Home/Speakers";
import HomeLayout from "@/components/Home/HomeLayout";

export default function Home() {
  // useEffect(() => {
  //   const speakers = pb
  //     .collection("speakers")
  //     .getFullList()
  //     .then((res) => console.log(res));
  // }, []);

  return (
    <HomeLayout>
      <Hero />
      <PoweredBy />
      <About />
      <Speakers />
      <Explore />
    </HomeLayout>
  );
}
