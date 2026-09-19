import React from 'react';
import { Link } from 'react-scroll';

import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowRight
} from 'react-icons/fa';

import picture from './images/dp1.jpg';

import './Home.css';

const Home = () => {
  return (
    <section className="hero" id="Home">

      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-small-text">
            HELLO, I'M
          </p>

          <h1>
            Geoffrey <span>Mutua</span>
          </h1>

          <h2>
            Software Developer
          </h2>

          <p className="hero-description">
            I build modern, reliable and user-focused web applications
            using Python, Django, React and JavaScript.
          </p>

          <div className="hero-buttons">

            <Link
              to="Projects"
              smooth={true}
              duration={500}
              className="primary-button"
            >
              View My Work
              <FaArrowRight />
            </Link>

            <Link
              to="Contact"
              smooth={true}
              duration={500}
              className="secondary-button"
            >
              Let's Talk
            </Link>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/Jeffkitute"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/jeff-kitute-b47718287/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/254769624433"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        <div className="hero-image-wrapper">

          <div className="hero-glow"></div>

          <div className="hero-image">
            <img
              src={picture}
              alt="Geoffrey Mutua"
            />
          </div>

        </div>

      </div>

      <div className="hero-scroll">
        <span></span>
        Scroll to explore
      </div>

    </section>
  );
};

export default Home;