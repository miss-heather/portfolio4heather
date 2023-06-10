import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import '../css/animations.css';
import '../css/header.css';
import '../css/style.css'; 

function Header() {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutMe />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return null;
    }
  };

  return (
    <div>
      <header className="header">
        <h1 style={{ fontFamily: 'Tangerine Bold' }}>Heather Hawkes</h1>
        <div className="nav-container">
          <div className="header-links">
            <a
              href="#about"
              onClick={() => handleNavigation('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About Me
            </a>
            <a
              href="#portfolio"
              onClick={() => handleNavigation('portfolio')}
              className={activeSection === 'portfolio' ? 'active' : ''}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={() => handleNavigation('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
            <a
              href="#resume"
              onClick={() => handleNavigation('resume')}
              className={activeSection === 'resume' ? 'active' : ''}
            >
              Resume
            </a>
          </div>
        </div>
      </header>
      <div className="content">{renderSection()}</div>
    </div>
  );
}

export default Header;
