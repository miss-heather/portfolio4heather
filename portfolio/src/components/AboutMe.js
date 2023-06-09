import React from 'react';
import kittyKisses from '../assets/kittykisses.jpg';

function AboutMe() {
  return (
    <div>
      <h2>About Me</h2>
      <div className="profile">
        <img src={kittyKisses} alt="Your Name" style={{ width: '150px', height: '150px' }}/>
        <p>
          Your short bio goes here. Write a few sentences or paragraphs to introduce yourself,
          your background, skills, and any other relevant information you'd like to share.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
