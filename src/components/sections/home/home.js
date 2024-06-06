import React from 'react';
import Pfp from '../../pfp/Pfp.js'
import './home.css'
import ProfileCard from '../../ProfileCard/ProfileCard.js';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import ReactTypingEffect from 'react-typing-effect';



const home = () => {
    return (
    <div className='containerH'>
        <div className='title-name'>
            <p>Howdy, my name is</p>
            <h2>Ethan Dobbin</h2>
            <h4>&lt;
                <ReactTypingEffect
                text={["Computer Science Student","FDA Student Trainee","Developer.","Lifelong Learner","Engineer."]}
                speed={100}
                eraseSpeed={50}
                />&gt;
            </h4>
            <p className='subtext'>I am an aspiring software engineer, always ready to learn.</p>
            <div className='links'>
            <a href='https://www.linkedin.com/in/ethan-dobb/'><FaLinkedin size={50} color='White'/></a>
            <a href='https://github.com/edobbin'><FaGithub size={50} color='White' /></a>
            <a href='https://www.instagram.com/codewith.dob/?hl=en'><FaInstagram size={50} color='White'/></a>
            <a href='mailto:dobbincode@gmail.com'><CiMail size={55} color='White' stroke='white' /></a>
        </div>
      </div>
      <div>
      <ProfileCard  /> 
      </div>
        </div>
    );
};

export default home;