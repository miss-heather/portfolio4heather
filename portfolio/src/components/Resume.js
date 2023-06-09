import React from 'react';

function Resume() {
  const proficiencies = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'SQL'];

  return (
    <div>
      <h2>Resume</h2>
      <div>
        <p>Download my resume:</p>
        <a href="/path/to/your/resume.pdf" download>
          Download Resume
        </a>
      </div>
      <div>
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Resume;
