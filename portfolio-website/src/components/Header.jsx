import React from 'react';
import '../styles/components/header.css';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';


function Header() {

    const handleClick = () => {
        const homeSection = document.getElementById('homeSection');
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <header>
            <h1 onClick={ handleClick } className='name'>camm.dev</h1>

            <div className='social-icons'>
                <a href="https://github.com/cameronmcewan" target="_blank" rel="noreferrer">
                <FaGithub className="icon github" />
                </a>
                <a href="https://twitter.com/cammcewan_" target="_blank" rel="noreferrer">
                <FaTwitter className="icon twitter" />
                </a>
                <a href="https://www.linkedin.com/in/cameron-mcewan/" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon linkedin" />
                </a>
            </div>
        </header>
    )
}

export default Header;