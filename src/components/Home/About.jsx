import AboutImage from "@/assets/images/about.jpg";
import Image from "next/image";
import RegisterButton from "../button/RegisterButton";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section__container about__container">
        <h1 className="section__title about__title" data-aos="fade-down">
          About
        </h1>

        <Image
          alt="About Image"
          src={AboutImage}
          className="about__img"
          data-aos="fade-left"
        />

        <div className="about__content" data-aos="fade-right">
          <p>
            Our conference aims to bring together experts and professionals from
            various fields of engineering, technology, and computer science to
            share their latest research and innovations, and to provide a
            platform for networking and collaboration.
          </p>
          <p>
            Our conference sessions feature technical paper presentations,
            keynote speeches, panel discussions, workshops, and tutorials, and
            provide an opportunity to exchange knowledge and ideas with industry
            practitioners, researchers, and engineers.
          </p>
          <p>
            We invite you to explore our website, register for the conference,
            and join us in advancing technology innovation for a better future.
          </p>
          <RegisterButton />
        </div>
      </div>
    </section>
  );
}
