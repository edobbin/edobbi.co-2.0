import React from 'react';
import './about.css'
import SkillContainer from '../../Skill/skillContainer'

const about = () => {
    return (
        <div className='containerA'>
          <div className='title'>
            <h2 className>About Me</h2>
           <span><p className='AM'>Howdy, my name is Ethan Dobbin. I’m a Computer Science graduate from Towson University with a passion for software development as well as AI, data science, and cloud computing.  
      Over the past few years, I’ve gained hands-on experience with languages and frameworks such as Java, Python, JavaScript, HTML/CSS, React, and Node.js. 
      I’ve also worked with tools like AWS, SQL, and TensorFlow through both academic projects and personal experiments. I started programming in high school with Java and quickly grew to love solving problems with code. 
      Since then, I’ve built projects ranging from machine learning models to full-stack web apps, and I’m always looking for new opportunities to learn, build, and apply my skills. When I’m not coding, 
      I run a photography and media business that challenges me to think creatively and strategically — skills I bring back into my work as a developer.  </p>
          </span> 
          </div>
      <span><div>
      <SkillContainer />
      </div></span>
        </div>
    );
};

export default about;