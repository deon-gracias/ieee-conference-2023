import HeroImage from "@/assets/images/hero-image.png";
import Image from "next/image";
import RegisterButton from "../button/RegisterButton";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <h2 className="hero__date">12th - 14th February 2023</h2>

        <h1 className="section__title hero__title">IEEE Conference</h1>

        <h3 className="hero__subtitle">
          <q>Advancing Knowledge Through Research Excellence</q>
        </h3>

        <RegisterButton />
      </div>
      <Image className="hero__img" src={HeroImage} alt="Hero Image" />
    </section>
  );
}
