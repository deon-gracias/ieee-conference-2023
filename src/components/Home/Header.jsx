import { useState } from "react";
import CollegeLogo from "@/assets/images/college-logo.svg";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { title: "About", href: "/#about" },
    { title: "Speakers", href: "/#speakers" },
    { title: "Explore", href: "/#explore" },
  ];

  const [visible, setVisible] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__container">
          <Link href="/#" className="nav__logo">
            <Image src={CollegeLogo} height={50} alt="College Logo" />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="nav__btn"
            onClick={() => setVisible(!visible)}
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <IconMenu2 />
          </button>
          <div
            className={`${visible ? "block" : "hidden"} nav__menu-container`}
            id="navbar-default"
          >
            <ul className="nav__menu">
              <li className="nav__close-btn-item">
                <button
                  onClick={() => setVisible(!visible)}
                  className="nav__close-btn"
                >
                  <IconX height={40} width={40} />
                </button>
              </li>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="nav__link"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}