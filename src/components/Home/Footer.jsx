import Link from "next/link";

export default function Footer() {
  const footerSections = [
    {
      title: "Contact",
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
          <div className="footer__section" key={section.title}>
            <h3 className="footer__section-title">{section.title}</h3>
            <ul className="footer__section-list">
              {section.content.map((link, index) => (
                <li className="footer__section-item" key={index}>
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
