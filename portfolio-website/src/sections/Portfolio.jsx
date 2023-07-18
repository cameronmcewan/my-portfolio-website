import React from 'react';
import '../styles/app.css';
import FolioLogo from '../assets/images/Folio.svg';

const projects = [
  {
    id: 1,
    title: 'Folio',
    description: 'Decentralised Index Funds',
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
  <section>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </section>

);

function Portfolio() {
  return (

    <div className="portfolio">

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

export default Portfolio;
