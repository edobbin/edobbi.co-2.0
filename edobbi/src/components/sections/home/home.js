import React from 'react';
import Pfp from '../../pfp/Pfp.js'
import './home.css'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


const home = () => {
    return (
        <div className='container'>
            <div className='title-name'>
            <p>Howdy, my nam is</p>
      <h2>Ethan</h2>
      </div>
      <div className='pfpCard'>
      <Pfp/>

      <div className='socials'>
        {/* Socials */}
        <a href='https://www.linkedin.com/in/ethan-dobb/'><FaLinkedin /></a>
      
        <a href=''><FaGithub/></a>

        <a href=''><FaInstagram /></a>

        <a href='mailto:dobbincode@gmail.com'><CiMail/></a>
      
      </div>
      </div>
        </div>
    );
};

export default home;