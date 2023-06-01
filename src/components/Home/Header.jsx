import { useState } from "react";
import CollegeLogo from "@/assets/images/college-logo.svg";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from "next/image";
import Link from "next/link";

export default function Header({ links }) {

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
            className={`${visible && "show-nav"} nav__menu-container`}
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
              {links.map((section, index) => (
                <>
                  {
                    section.expand.items.map((item) => (
                      <li key={item.id}>
                        {item.dropdowns === null ? (
                          <Link className="nav__link" href={item.link}>
                            {item.title}
                          </Link>
                        ) : (
                          <>
                            <div className="dropdown dropdown-bottom md:dropdown-bottom md:dropdown-left">
                              <div className="flex flex-row">
                                <label tabIndex={0} className="nav__link__dropdown hover:cursor-pointer">{item.title}
                                  <ChevronDownIcon className="mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </label>
                              </div>
                              <ul tabIndex={1} className="dropdown-content p-2 shadow w-fit md:w-max bg-white transition duration-300 ease-in-out">
                                {item.dropdowns.split(',').map((pair) => {
                                  const [key, value] = pair.split(':');
                                  return (
                                    <Link key={key} className="nav__link" href={value}>
                                      {key}
                                    </Link>
                                  );
                                })}
                              </ul>
                            </div>
                          </>
                        )}
                      </li>
                    ))
                  }
                </>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}