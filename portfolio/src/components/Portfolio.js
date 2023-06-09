import React from 'react';

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio">
        <div className="project">
          <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/project1.jpg" alt="Project 1" />
          </a>
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
          <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
        <div className="project">
          <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/project2.jpg" alt="Project 2" />
          </a>
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
          <a href="https://github.com/your-username/project2" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
        <div className="project">
          <a href="https://example.com/project3" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/project2.jpg" alt="Project 3" />
          </a>
          <h3>Project 3</h3>
          <p>Description of Project 3</p>
          <a href="https://github.com/your-username/project3" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
        <div className="project">
          <a href="https://example.com/project4" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/project2.jpg" alt="Project 4" />
          </a>
          <h3>Project 4</h3>
          <p>Description of Project 4</p>
          <a href="https://github.com/your-username/project4" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
        <div className="project">
          <a href="https://example.com/project5" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/project5.jpg" alt="Project 5" />
          </a>
          <h3>Project 5</h3>
          <p>Description of Project 5</p>
          <a href="https://github.com/your-username/project5" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
        <div className="project">
          <a href="https://example.com/project6" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/project6.jpg" alt="Project 6" />
          </a>
          <h3>Project 6</h3>
          <p>Description of Project 6</p>
          <a href="https://github.com/your-username/project6" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
