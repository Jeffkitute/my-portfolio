import React from 'react';

import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode
} from 'react-icons/fa';

import './Experience.css';

const Experience = () => {
  return (
    <section
      className="experience-section"
      id="Experience"
    >

      <div className="section-container">

        <div className="section-heading">
          <span>04. EXPERIENCE</span>
          <h2>My development journey.</h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-icon">
              <FaLaptopCode />
            </div>

            <div className="timeline-content">

              <span className="timeline-date">
                2025 — Present
              </span>

              <h3>Software Developer</h3>

              <h4>Independent / Freelance Development</h4>

              <p>
                Building full-stack web applications and working on
                practical software solutions using Python, Django,
                React, JavaScript and PostgreSQL.
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-icon">
              <FaGraduationCap />
            </div>

            <div className="timeline-content">

              <span className="timeline-date">
                2021 — 2025
              </span>

              <h3>BSc Computer Science</h3>

              <h4>Egerton University</h4>

              <p>
                Studied computer science with a focus on programming,
                software development, databases, networking and
                computer systems.
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-icon">
              <FaBriefcase />
            </div>

            <div className="timeline-content">

              <span className="timeline-date">
                Development Projects
              </span>

              <h3>Full-Stack Projects</h3>

              <h4>Web Application Development</h4>

              <p>
                Designed and developed applications involving
                authentication, databases, APIs, payment integrations,
                dashboards and responsive interfaces.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;