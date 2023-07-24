import React from 'react';
import './styles/app.css';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Header from './components/Header';


function App() {

  return (
    <div className='portfolioContainer'>

      <Header />

      <Hero id='homeSection'/>

      {/* <section>
        <Project
          title="Folio: Decentralised Application for creating and trading index funds as a digital token"
          description="Full stack application involving front end development, smart contract development and deployment with AWS. I presented the project at the FinTech West Conference: University Talent Showcase 2022 and the project was awarded Best Project."
          imgSrc={FolioLogo}
        />
      </section> */}

      <Projects id='projectsSection'/>

    </div>
  );
}

export default App;
