import React, { useState } from 'react';
import { Link } from 'react-scroll';

import {
  FaBars,
  FaTimes
} from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link
          to="Home"
          smooth={true}
          duration={500}
          className="nav-logo"
          onClick={closeMenu}
        >
          jeff<span>M.</span>
        </Link>

        <nav className={`nav-links ${isOpen ? 'nav-open' : ''}`}>

          <Link
            to="Home"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            activeClass="nav-active"
            spy={true}
          >
            Home
          </Link>

          <Link
            to="About"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            activeClass="nav-active"
            spy={true}
          >
            About
          </Link>

          <Link
            to="Skills"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            activeClass="nav-active"
            spy={true}
          >
            Skills
          </Link>

          <Link
            to="Projects"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            activeClass="nav-active"
            spy={true}
          >
            Projects
          </Link>

          <Link
            to="Experience"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            activeClass="nav-active"
            spy={true}
          >
            Experience
          </Link>

          <Link
            to="Contact"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="nav-contact"
          >
            Contact
          </Link>

        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;