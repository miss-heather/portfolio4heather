import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar({ activeSection, handleNavigation, linkClassName }) {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/about"
            onClick={() => handleNavigation('about')}
            className={`${activeSection === 'about' ? 'active' : ''} ${linkClassName}`} // Add the class here
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            onClick={() => handleNavigation('portfolio')}
            className={`${activeSection === 'portfolio' ? 'active' : ''} ${linkClassName}`} // Add the class here
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => handleNavigation('contact')}
            className={`${activeSection === 'contact' ? 'active' : ''} ${linkClassName}`} // Add the class here
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            onClick={() => handleNavigation('resume')}
            className={`${activeSection === 'resume' ? 'active' : ''} ${linkClassName}`} // Add the class here
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
