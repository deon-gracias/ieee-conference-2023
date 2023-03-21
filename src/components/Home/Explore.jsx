import { IconCircleChevronRight } from "@tabler/icons-react";

export default function Explore() {
  const exploreList = [
    { title: "Schedule", href: "#" },
    { title: "Speakers", href: "#" },
    { title: "FAQ", href: "#" },
    { title: "2019 Conference", href: "#" },
  ];

  return (
    <section className="section" id="explore">
      <div className="section__container">
        <h1 className="section__title" data-aos="fade-down">
          Explore
        </h1>

        <ul className="explore__list">
          {exploreList.map((e, index) => (
            <li key={index} className="explore__item" data-aos="fade-right" data-aos-delay={`${200 * index}`}>
              <a className="explore__link" href={e.href}>
                {e.title} <IconCircleChevronRight />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
