import React from 'react';
import kittyKisses from '../assets/kittykisses.jpg';

function AboutMe() {
  return (
    <div>
      <h2>About Me</h2>
      <div className="profile">
        <img src={kittyKisses} alt="Your Name" style={{ width: '130px', height: '150px' }}/>
        <p>
          Short bio about Heather! And maybe one for her awesome kitty, Sir Kittimus Alfredo BartheloMeow, as well. 
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
