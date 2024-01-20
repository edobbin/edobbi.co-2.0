import React from 'react';
import Pfp from '../../pfp/Pfp.js'
import './home.css'
import ProfileCard from '../../ProfileCard/ProfileCard.js';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


const home = () => {
    return (
    <div className='containerH'>
        <div className='title-name'>
            <p>Howdy, my name is</p>
            <h2>Ethan Dobbin</h2>
            <h4>Computer Science Student</h4>
            <p className='subtext'>I am an aspiring software engineer, always ready to learn.</p>
      </div>
      <div>
      <ProfileCard  />
      </div>
        </div>
    );
};

export default home;