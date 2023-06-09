// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> word.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/components/AboutMe" element={<AboutMe />} />
        <Route path="/components/Portfolio" element={<Portfolio />} />
        <Route path="/components/Contact" element={<Contact />} />
        <Route path="/components/Resume" element={<Resume />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

