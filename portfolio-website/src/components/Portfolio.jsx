import React from 'react';
import '../App.css';

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-container">
        <div className="project">
          <img src="https://via.placeholder.com/300" alt="Project 1" />
          <h3>Project 1</h3>
        </div>
        <div className="project">
          <img src="https://via.placeholder.com/300" alt="Project 2" />
          <h3>Project 2</h3>
        </div>
        <div className="project">
          <img src="https://via.placeholder.com/300" alt="Project 3" />
          <h3>Project 3</h3>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
