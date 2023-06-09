// import React, { useState } from 'react';
// // import AboutMe from './AboutMe';
// import NavigationBar from './NavigationBar';

// function Header() {
//   const [activeSection, setActiveSection] = useState('about');

//   const handleNavigation = (section) => {
//     setActiveSection(section);
//   };

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'about':
//         return (
//           <div>
//             <h2>About Me</h2>
//             <div className="profile">
//               <img src="/path/to/your/image.jpg" alt="Your Name" />
//               <p>
//                 Your short bio goes here. Write a few sentences or paragraphs to introduce yourself,
//                 your background, skills, and any other relevant information you'd like to share.
//               </p>
//             </div>
//           </div>
//         );
//       case 'portfolio':
//         // Render Portfolio section
//         break;
//       case 'contact':
//         // Render Contact section
//         break;
//       case 'resume':
//         // Render Resume section
//         break;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <header>
//         <h1>Your Name</h1>
//         <NavigationBar activeSection={activeSection} handleNavigation={handleNavigation} />
//       </header>
//       <div className="content">
//         {/* Existing code */}
//         <header>
//           <h1>Your Name</h1>
//           <nav>
//             <ul>
//               <li>
//                 <a
//                   href="#about"
//                   onClick={() => handleNavigation('about')}
//                   className={activeSection === 'about' ? 'active' : ''}
//                 >
//                   About Me
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#portfolio"
//                   onClick={() => handleNavigation('portfolio')}
//                   className={activeSection === 'portfolio' ? 'active' : ''}
//                 >
//                   Portfolio
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#contact"
//                   onClick={() => handleNavigation('contact')}
//                   className={activeSection === 'contact' ? 'active' : ''}
//                 >
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#resume"
//                   onClick={() => handleNavigation('resume')}
//                   className={activeSection === 'resume' ? 'active' : ''}
//                 >
//                   Resume
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </header>
//         <div className="content">
//           {renderSection()}
//         </div>
//         {/* End of existing code */}
//       </div>
//     </div>
//   );
// }

// export default Header;
import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import '../css/animations.css';
import '../css/header.css';

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
        <h1>Your Name</h1>
        <div className="nav-container">
          <div className="header-links">
            <a href="#about" onClick={() => handleNavigation('about')} className={activeSection === 'about' ? 'active' : ''}>
              About Me
            </a>
            <a href="#portfolio" onClick={() => handleNavigation('portfolio')} className={activeSection === 'portfolio' ? 'active' : ''}>
              Portfolio
            </a>
            <a href="#contact" onClick={() => handleNavigation('contact')} className={activeSection === 'contact' ? 'active' : ''}>
              Contact
            </a>
            <a href="#resume" onClick={() => handleNavigation('resume')} className={activeSection === 'resume' ? 'active' : ''}>
              Resume
            </a>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="swirl" /> {/* Add the swirling animation element here */}
        {renderSection()}
      </div>
    </div>
  );
}

export default Header;

