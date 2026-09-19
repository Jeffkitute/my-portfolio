import React from 'react';

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaLaptopCode
} from 'react-icons/fa';

import './About.css';

const About = () => {
  return (
    <section className="about-section" id="About">

      <div className="section-container">

        <div className="section-heading">
          <span>01. ABOUT ME</span>
          <h2>Building solutions with code.</h2>
        </div>

        <div className="about-grid">

          <div className="about-text">

            <p>
              I'm Geoffrey Mutua, a software developer with a strong
              interest in building practical web applications that solve
              real-world problems.
            </p>

            <p>
              My main experience is with Python and Django on the backend,
              combined with React and JavaScript on the frontend. I also
              work with databases, APIs, authentication systems and
              third-party integrations.
            </p>

            <p>
              I enjoy taking an idea from concept to a working product,
              paying attention to both the technical implementation and
              the experience of the people using it.
            </p>

          </div>

          <div className="about-cards">

            <div className="about-card">
              <FaCode />
              <div>
                <h3>Frontend</h3>
                <p>React, JavaScript, HTML & CSS</p>
              </div>
            </div>

            <div className="about-card">
              <FaServer />
              <div>
                <h3>Backend</h3>
                <p>Python, Django & REST APIs</p>
              </div>
            </div>

            <div className="about-card">
              <FaDatabase />
              <div>
                <h3>Database</h3>
                <p>PostgreSQL & SQLite</p>
              </div>
            </div>

            <div className="about-card">
              <FaLaptopCode />
              <div>
                <h3>Development</h3>
                <p>Responsive & production-ready applications</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;