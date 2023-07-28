import React, { useState, useEffect } from 'react';
import '../styles/components/hero.css';
import InfiniteScroll from '../components/InfiniteScroll';
import Logo from '../components/Logo';

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
          <div className='title1'>Hi, I'm <span className='color'>Cameron McEwan</span>.</div>
          <div className='title2'>I design and implement beautiful, flowing websites. Born in Manchester, studied in Bristol, and now based in London. I love AI, web3 and creating beautiful things for the web.</div>
        </div>
        {/* <div className='bottomline'>
          <InfiniteScroll />
        </div> */}
      </div>
            
      <div>
        <button className='scrollButton' onClick={handleScrollClick}/>
      </div>
    </section>

  );
}

export default Hero;