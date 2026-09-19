import React from 'react';

import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaTwitter
} from 'react-icons/fa';

import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <section className="social-section">

      <p>Let's connect</p>

      <div className="social-links">

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

        <a
          href="https://twitter.com/jeff_kitute"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>

      </div>

    </section>
  );
};

export default SocialMedia;