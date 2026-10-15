import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <header className="site-nav">
      <a className="brand-mark" href="#home" aria-label="Andry Eliasy, accueil">
        <span className="brand-monogram">AE</span>
        <span className="brand-name">ANDRY ELIASY</span>
      </a>
      <nav aria-label="Navigation principale">
        <ul className={`nav-links nav-desktop ${showMenu ? "nav-mobile" : ""}`}>
          {navLinksdata.map(({ _id, title, link }) => (
            <li className="cursor-pointer" key={_id}>
              <Link
                onClick={() => setShowMenu(false)}
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <a className="nav-contact" href="#contact">Parlons de votre projet <span aria-hidden="true">↗</span></a>
      <button
          type="button"
          aria-label={showMenu ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={showMenu}
          onClick={() => setShowMenu(!showMenu)}
          className="nav-toggle"
        >{showMenu ? <MdClose /> : <FiMenu />}</button>
    </header>
  );
}

export default Navbar