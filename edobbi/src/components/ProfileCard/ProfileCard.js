import React from 'react';
import './PFC.css'
import Pfp from '../pfp/Pfp.js'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const ProfileCard = () => {
    return (
        <div>
            <div className='pfpCard'>
      <Pfp/>
    <div className='social-back'>
      <div className='socials'>
        {/* Socials */}
        <a href='https://www.linkedin.com/in/ethan-dobb/'><FaLinkedin size={35} color='Black'/></a>
      
        <a href='https://github.com/edobbin'><FaGithub size={35} color='Black' /></a>

        <a href='https://www.instagram.com/codewith.dob/?hl=en'><FaInstagram size={35} color='Black'/></a>

        <a href='mailto:dobbincode@gmail.com'><CiMail size={35} color='Black' stroke='white' /></a>
      
      </div>
      </div>
      </div>
        </div>
    );
};

export default ProfileCard;