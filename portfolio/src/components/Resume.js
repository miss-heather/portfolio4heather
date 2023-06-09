import React from 'react';

function Resume() {
  const proficiencies = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'SQL'];

  return (
    <div>
      <h2>Resume</h2>
      <div class="white-link">
        <a href="/assets/exampleresume.pdf" download style={{ color: 'white' }}>
          Download Heather's Resume
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
