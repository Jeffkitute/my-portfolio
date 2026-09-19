import React from 'react';

import {
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';

import image1 from './images/Capture 4.png';
import image2 from './images/Capture 5.png';
import image3 from './images/github.png';

import './Projects.css';

const Projects = () => {

  const projects = [
    {
      title: 'School Management System',
      description:
        'A web-based school management system designed to streamline administrative and academic operations.',
      image: image1,
      technologies: ['Django', 'Python', 'JavaScript'],
      github:
        'https://github.com/Jeffkitute/school-management-system'
    },

    {
      title: 'Social Media Platform',
      description:
        'A social platform with authentication, content publishing, likes, comments, following and real-time features.',
      image: image2,
      technologies: ['Django', 'React', 'JavaScript'],
      github:
        'https://github.com/Jeffkitute/bloger'
    },

    {
      title: 'Developer Project',
      description:
        'A full-stack web application demonstrating modern frontend and backend development techniques.',
      image: image3,
      technologies: ['React', 'Python', 'Django'],
      github:
        'https://github.com/Jeffkitute'
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

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    View
                  </a>

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