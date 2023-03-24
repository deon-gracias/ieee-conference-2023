import { IconMail, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  const footerSections = [
    {
      title: "Contact",
      content: [
        {
          link: "tel:00000",
          title: (
            <div className="flex items-center gap-2">
              <IconPhone /> 000000
            </div>
          ),
        },
        {
          link: "mailto:example@mail.com",
          title: (
            <div className="flex items-center gap-2">
              <IconMail />
              example@mail.com
            </div>
          ),
        },
      ],
    },
    {
      title: "Useful Links",
      content: [
        { link: "/#about", title: "About" },
        { link: "/#gallery", title: "Gallery" },
        { link: "/#member", title: "Become a member" },
        { link: "/#conference", title: "Conferences" },
      ],
    },
    {
      title: "Useful Links",
      content: [
        { link: "/#about", title: "About" },
        { link: "/#gallery", title: "Gallery" },
        { link: "/#member", title: "Become a member" },
        { link: "/#conference", title: "Conferences" },
      ],
    },
    {
      title: "Useful Links",
      content: [
        { link: "/#about", title: "About" },
        { link: "/#gallery", title: "Gallery" },
        { link: "/#member", title: "Become a member" },
        { link: "/#conference", title: "Conferences" },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        {footerSections.map((section, index) => (
          <div className="footer__section" key={index}>
            <h3 className="footer__section-title">{section.title}</h3>
            <ul className="footer__section-list">
              {section.content.map((link, linkIndex) => (
                <li
                  className="footer__section-item"
                  key={`${index}-${linkIndex}`}
                >
                  <Link
                    scroll={false}
                    className="footer__section-link"
                    href={link.link}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
