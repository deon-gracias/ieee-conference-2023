import { IconUser } from "@tabler/icons-react";
import ProfileImage from "@/assets/images/profile.jpg";
import Image from "next/image";

export default function Speakers() {
  const speakers = Array.from({ length: 4 }).map((e, index) => (
    <div className="speakers-card" key={index}>
      <Image alt="Speaker Image" /> <h4>John Doe</h4>
      <h6>John Die</h6>
    </div>
  ));

  return (
    <section className="section" id="speakers">
      <div className="section__container">
        <h1 className="section__title">Speakers</h1>

        <div className="speakers-card__container">
          {speakers.map((s, index) => (
            <div className="speakers-card" key={index}>
              <Image
                className="speakers-card__img"
                src={ProfileImage}
                alt="Speaker Image"
              />
              <div className="speakers-card__body">
                <h4 className="speakers-card__title">John Doe</h4>
                <h6 className="speakers-card__subtitle">John Doe</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
