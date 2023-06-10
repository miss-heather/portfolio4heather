import React from 'react';
import '../css/footer.css';
import githubIcon from '../assets/github-icon.png'
import linkedIcon from '../assets/linkedin-blk.png'
import twitterLogo from '../assets/twitter-white.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="footer-link">
          <img src={linkedIcon} alt="LinkedIn" style={{ width: '20px', height: '20px', marginRight: '5px', marginBottom: '-5px' }} />
          LinkedIn
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="footer-link">
          <img src={githubIcon} alt="GitHub" style={{ width: '20px', height: '20px', marginRight: '5px', marginBottom: '-5px' }} />
          GitHub
        </a>
        {/* <a href="https://stackoverflow.com/users/your-profile" target="_blank" rel="noopener noreferrer" className="footer-link">
          Stack Overflow
        </a> */}
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="footer-link">
          <img src={twitterLogo} alt="Twitter" style={{ width: '22px', height: '22px', marginRight: '5px', marginBottom: '-5px' }} />
          Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
