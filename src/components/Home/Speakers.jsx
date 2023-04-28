import { getFileURL } from "@/lib/pocketbase";
import Link from "next/link";
import { useHomeStore } from "@/store/homeStore";

export default function Speakers({ speakers }) {
  // const { speakers } = useHomeStore();
  // const speakers = Array.from({ length: 4 }).map((e, index) => (
  //   <div className="speakers-card" key={index}>
  //     <Image alt="Speaker Image" /> <h4>John Doe</h4>
  //     <h6>John Die</h6>
  //   </div>
  // ));

  return (
    <section className="section" id="speakers">
      <div className="section__container">
        <h1 className="section__title" data-aos="fade-down">
          Speakers
        </h1>

        <div className="speakers-card__container">
          {speakers.map((s, index) => (
            <Link
              href={s.link}
              target="_blank"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${200 * index}`}
            >
              <div className="speakers-card">
                {console.log(getFileURL(s.collectionName, s.id, s.image))}
                <img
                  loading="lazy"
                  className="speakers-card__img"
                  src={getFileURL(s.collectionName, s.id, s.image)}
                  alt="Speaker Image"
                />
                <div className="speakers-card__body">
                  <h4 className="speakers-card__title">{s.title}</h4>
                  <h6 className="speakers-card__subtitle">{s.subtitle}</h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
