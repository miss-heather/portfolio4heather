import React from 'react';

function Resume() {
  const proficiencies = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'SQL'];

  return (
    <div>
      <div>
        <h2>Proficiencies</h2>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
      </div>
      <h2>Resume</h2>
      <div class="white-link">
        <a href="/assets/exampleresume.pdf" download style={{ color: 'white' }}>
          Download Heather's Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
