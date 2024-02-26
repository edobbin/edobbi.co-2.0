import React, { useEffect, useState } from 'react';
import { navData } from "./navData"
import './navvbar.css'

import resume from '../../asset/DobbinResume.pdf'

const Navvbar = () => {
    const [toggle, setToggle] = useState(false)

    const openMenu =()=>{
        setToggle(true);
    }
    const closeMenu =()=>{
        setToggle(false);
    }
  return (
    <div>
        <nav className='NavbarWrap'>
            <div className='Logo'>
                <a href='/'><p>ETHAN DOBBIN</p></a>
            </div>
            <div className='list-option'>
                <ul>
                <li><a href='#section'>About</a></li>
                <li><a href='#section'>Projects</a></li>
                <li><a href='#section'>Resume</a></li>
                <li><a href='#section'>Blog</a></li> 
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navvbar