

import React from 'react';

import {
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';

import image1 from './images/github.png'; // School Management
import image2 from './images/github.png';  // Kalitech
import image3 from './images/github.png';  // Keja Zetu

import './Projects.css';

const Projects = () => {

  const projects = [
    {
      title: 'Keja Zetu',
      description:
        'A property rental marketplace that connects tenants with landlords and makes it easier to discover rental properties across Kenya.',
      image: image3,
      technologies: [
        'Django',
        'Python',
        'JavaScript',
        'PostgreSQL'
      ],
      github:
        'https://github.com/Jeffkitute/react---django',
      live:
        'https://kejazetu.com'
    },

    {
      title: 'Kalitech',
      description:
        'An e-commerce platform for selling phone accessories online, with product browsing, shopping, ordering and M-Pesa payment integration.',
      image: image2,
      technologies: [
        'Django',
        'Python',
        'JavaScript',
        'M-Pesa'
      ],
      github:
        'https://github.com/Jeffkitute/kalitech',
      live:
        'https://kalitech.com'
    },

    {
      title: 'School Management System',
      description:
        'A web-based school management system designed to streamline administrative, student and academic operations.',
      image: image1,
      technologies: [
        'Django',
        'Python',
        'JavaScript'
      ],
      github:
        'https://github.com/Jeffkitute/school-management-system'
    }
  ];

  return (
    <section className="projects-section" id="Projects">

      <div className="section-container">

        <div className="section-heading">
          <span>03. PROJECTS</span>
          <h2>Some things I've built.</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.title}
            >

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title}`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}

                </div>

              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <div className="project-tech">

                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Live Site
                    </a>
                  )}

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;