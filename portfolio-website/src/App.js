import React from 'react';
import './styles/app.css';
import Hero from './sections/Hero';
import Portfolio from './sections/Portfolio';
import Header from './components/Header';
// import Project from './components/Project';
// import FolioLogo from './assets/images/Folio.svg';


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

      <Portfolio id='portfolioSection'/>

    </div>
  );
}

export default App;
