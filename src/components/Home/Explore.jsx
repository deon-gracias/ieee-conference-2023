import { IconCircleChevronRight } from "@tabler/icons-react";

export default function Explore() {
  return (
    <section className="section" id="explore">
      <div className="section__container">
        <h1 className="section__title">Explore</h1>

        <ul className="explore__list">
          <li className="explore__item">
            <a className="explore__link">
              Schedule <IconCircleChevronRight />
            </a>
          </li>
          <li className="explore__item">
            <a className="explore__link">
              Speakers
              <IconCircleChevronRight />
            </a>
          </li>
          <li className="explore__item">
            <a className="explore__link">
              FAQ
              <IconCircleChevronRight />
            </a>
          </li>
          <li className="explore__item">
            <a className="explore__link">
              2019 Conference
              <IconCircleChevronRight />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
