import { IconExternalLink, IconMail, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

function Contact({ title, type }) {
  function getContactIcon(type) {
    const contactIcon = {
      phone: <IconPhone />,
      mail: <IconMail />,
      link: <IconExternalLink />,
    };

    return contactIcon[type];
  }

  return (
    <div className="flex items-center gap-2">
      {getContactIcon(type)} {title}
    </div>
  );
}

export default function Footer({ links }) {
  return (
    <footer className="footer">
      <div className="footer__container">
        {links.map((section, index) => (
          <div className="footer__section" key={index}>
            <h3 className="footer__section-title">{section.title}</h3>
            <ul className="footer__section-list">
              {section.content.map((link) => (
                <li className="footer__section-item" key={link.id}>
                  <Link
                    scroll={false}
                    className="footer__section-link"
                    href={link.link || ""}
                  >
                    {section.title === "Contact" ? (
                      <Contact title={link.title} type={link.type} />
                    ) : (
                      link.title
                    )}
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
