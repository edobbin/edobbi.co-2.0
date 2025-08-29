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
      </div>
        </div>
    );
};

export default ProfileCard;