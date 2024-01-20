import React from 'react';
import './about.css'

const about = () => {
    return (
        <div>
            <h2>About Me</h2>
      <p>Howdy, my name is Ethan and I am a Student at Towson University majoring in Computer Science. I love making projects and learning new skills whether it be in my own freetime or through class projects. I began my programming in high school wher I was able to learn java.</p>
      <br></br>
      <p></p>
      <div className='skills'>
        <div className='lanuages'>
            <h4>Lanuages</h4>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
        </div>
    );
};

export default about;