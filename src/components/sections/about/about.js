import React from 'react';
import './about.css'
import SkillContainer from '../../Skill/skillContainer'

const about = () => {
    return (
        <div className='containerA'>
          <div className='title'>
            <h2 className>About Me</h2>
           <span><p className='AM'>Howdy, my name is Ethan and I am a Student at Towson University majoring in Computer Science. Throughout my college journey I've built sa strong foundation in HTML, CSS, JavaScript, Java and Python. Along with experience using React.JS, and Node.JS. I love making projects and learning new skills whether it be in my own freetime or through class projects. I began my programming in high school wher I was able to learn java. </p>
          </span> 
          </div>
      <span><div>
      <SkillContainer />
      </div></span>
        </div>
    );
};

export default about;