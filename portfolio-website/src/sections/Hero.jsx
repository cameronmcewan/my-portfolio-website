import React, { useState, useEffect } from 'react';
import '../styles/components/hero.css';

function Hero() {

  const handleScrollClick = () => {
    const homeSection = document.getElementById('projectsSection');
    if (homeSection) {
      console.log('Scrolling to top');
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Rotating Text
  const texts = ['a Front-end Developer', 'a Smart Contract Developer', 'an AI Developer', 'a Data Scientist']; // Array of text values
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 1500);

      return () => clearInterval(interval);
  }, [texts.length]);
  // .

  return (
    <section className='heroContainer'>
      <div className='title'>
        <h1 id='hello'>Hello</h1>
        <h2>My name is Cameron McEwan... <div className='rotatingText'>I'm {texts[currentTextIndex]}</div></h2>
      </div>
      
      {/* <p>Born in <mark id='manchester'> MANCHESTER</mark> and based in <mark id='london'> LONDON</mark>.</p> */}
      
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