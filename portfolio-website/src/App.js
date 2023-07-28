import React from 'react';
import './styles/app.css';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Gutter from './components/Gutter';


function App() {

  return (
    <div className='portfolioContainer'>

      <Gutter />

      <Hero id='homeSection'/>

      <Projects id='projectsSection'/>

    </div>
  );
}

export default App;
