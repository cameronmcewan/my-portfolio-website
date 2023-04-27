import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './header.css'

function Header() {
  return (
    <div>
      <div className='title'>
        CAMERON MCEWAN
      </div>
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
    </div>

  );
}

export default Header;