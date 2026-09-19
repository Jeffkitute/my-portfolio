import React from 'react';

import {
  FaPython,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaDatabase
} from 'react-icons/fa';

import {
  SiDjango,
  SiPostgresql,
  SiGit,
  SiGithub,
} from 'react-icons/si';

import './Skills.css';

const Skills = () => {

  const skills = [
    {
      name: 'Python',
      icon: <FaPython />
    },
    {
      name: 'Django',
      icon: <SiDjango />
    },
    {
      name: 'React',
      icon: <FaReact />
    },
    {
      name: 'JavaScript',
      icon: <FaJs />
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 />
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt />
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql />
    },
    {
      name: 'AWS',
      icon: <FaAws />
    },
    {
      name: 'Git',
      icon: <SiGit />
    },
    {
      name: 'GitHub',
      icon: <SiGithub />
    },
    {
      name: 'REST APIs',
      icon: <FaDatabase />
    }
  ];

  return (
    <section className="skills-section" id="Skills">

      <div className="section-container">

        <div className="section-heading centered">
          <span>02. SKILLS</span>
          <h2>Technologies I work with.</h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <span className="skill-icon">
                {skill.icon}
              </span>

              <span>
                {skill.name}
              </span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;