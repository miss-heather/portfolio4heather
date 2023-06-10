import React from 'react';

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio">
        {/* Project 1 */}
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
          <a className="white-link" href="https://example.com/project1" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/project1.jpg" alt="Project 1" />
          </a>
          <a className="white-link" href="https://github.com/miss-heather/weatherdashboard" target="_blank" rel="noopener noreferrer">
            Weather Dashboard GitHub Repository
          </a>
        </div>

        {/* Project 2 */}
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
          <a className="white-link" href="https://example.com/project2" target="_blank" rel="noopener noreferrer">
            <img src="/assets/wdsched.jpeg" alt="Project 2" />
          </a>
          <a className="white-link" href="https://github.com/miss-heather/workdayscheduler" target="_blank" rel="noopener noreferrer">
            Workday Scheduler GitHub Repository
          </a>
        </div>

        {/* Project 3 */}
        <div className="project">
          <h3>Project 3</h3>
          <p>Description of Project 3</p>
          <a className="white-link" href="https://example.com/project3" target="_blank" rel="noopener noreferrer">
            <img src="/assets/smapi.png" alt="Project 3" />
          </a>
          <a className="white-link" href="https://github.com/miss-heather/socialnetworkapi" target="_blank" rel="noopener noreferrer">
            Social Network API GitHub Repository
          </a>
        </div>

        {/* Project 4 */}
        <div className="project">
          <h3>Project 4</h3>
          <p>Description of Project 4</p>
          <a className="white-link" href="https://example.com/project4" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/project4.jpg" alt="Project 4" />
          </a>
          <a className="white-link" href="https://github.com/miss-heather/regextutorial" target="_blank" rel="noopener noreferrer">
            Regex Tutorial GitHub Repository
          </a>
        </div>

        {/* Project 5 */}
        <div className="project">
          <h3>Project 5</h3>
          <p>Description of Project 5</p>
          <a className="white-link" href="https://example.com/project5" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/project5.jpg" alt="Project 5" />
          </a>
          <a className="white-link" href="https://github.com/miss-heather/readmegenerator" target="_blank" rel="noopener noreferrer">
            README Generator GitHub Repository
          </a>
        </div>

        {/* Project 6 */}
        <div className="project">
          <h3>Project 6</h3>
          <p>Description of Project 6</p>
          <a className="white-link" href="https://example.com/project6" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/project6.jpg" alt="Project 6" />
          </a>
          <a className="white-link" href="https://github.com/miss-heather/teamprofilegeneratorhw" target="_blank" rel="noopener noreferrer">
            Team Profile Generator GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
