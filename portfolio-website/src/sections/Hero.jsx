import React, { useState, useEffect } from 'react';
import '../styles/components/hero.css';
import InfiniteScroll from '../components/InfiniteScroll';

function Hero() {

  const handleScrollClick = () => {
    const homeSection = document.getElementById('projectsSection');
    if (homeSection) {
      console.log('Scrolling to top');
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='hero'>

      <div className='title'>
        <div className='topline'>
          <div className='title1'>Front End Developer</div>
          <div className='title2'>My name is Cameron McEwan. I was born in Manchester, studied in Bristol, and now based in London. Primarily a front-end developer with a broad skillset. I love AI, web3 and creating beautiful things for the web.</div>
        </div>
        <div className='bottomline'>
          <InfiniteScroll />
        </div>
      </div>
            
      <div>
        <p className='textPortfolio'>Portfolio 2023</p>
      </div>
      <div>
        <button className='scrollButton' onClick={handleScrollClick}/>
      </div>
    </section>

  );
}

export default Hero;