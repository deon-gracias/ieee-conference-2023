import { IconCircleChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function Explore({ exploreLinks }) {

  return (
    <section className="section" id="explore">
      <div className="section__container">
        <h1 className="section__title" data-aos="fade-down">
          Explore
        </h1>

        <ul className="explore__list">
          {exploreLinks.map((e, index) => (
            <li
              key={index}
              className="explore__item"
              data-aos="fade-right"
              data-aos-delay={`${100 * index}`}
            >
              <Link className="explore__link" href={e.link}>
                {e.name} <IconCircleChevronRight />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
