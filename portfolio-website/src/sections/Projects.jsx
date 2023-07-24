import React from 'react';
import '../styles/app.css';
import '../styles/components/projects.css';
import FolioLogo from '../assets/images/Folio.svg';

const projects = [
  {
    id: 1,
    title: 'Folio DApp',
    description: 'Full stack application involving front end development, smart contract development and deployment with AWS. I presented the project at the FinTech West Conference: University Talent Showcase 2022 and the project was awarded Best Project.',
    image: FolioLogo,
  },
  {
    id: 2,
    title: 'Decentralised University',
    description: 'Description of Project 2',
    image: 'Decentralised-University.jpg',
  },
  {
    id: 3,
    title: 'Sunset Valley Villa rental website',
    description: 'Description of Project 2',
    image: 'Decentralised-University.jpg',
  },
  // Add more project objects as needed
];

const ProjectSection = ({ title, description, image }) => (
  <section id='projectsSection'>
    <div className='projectContainer'>
      <div className='leftContainer'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className='rightContainer'>
        <img src={image} alt={title} />    
      </div>
    </div>
  </section>

);

function Projects() {
  return (

    <div>
      {projects.map(project => (
        <ProjectSection
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>

  );
}

export default Projects;
