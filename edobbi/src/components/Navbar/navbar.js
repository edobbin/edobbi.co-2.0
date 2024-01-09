import React, { useEffect, useState } from 'react';
import { navData } from "./navData"
import './navbar.css'


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggle = () =>{
    setNavOpen(!navOpen)
  }


  return (
    <div className='navbar'>
    <div className='Title-container'>
      {/* <img></img> */}
      
    </div>
    
    {/* <nav className={'nav ${navOpen ? "nav-open" : "nav-close"}'}> */}
    <div className={navOpen ? "sidebar": "sidebarClosed"}>
    <button className='nav-Tog' onClick={() => toggle()}
    >
      <span className="material-symbols-outlined" Style={navOpen? "font-size: 40px; align-items: center;":"font-size: 36px; align-items: center; "}>
{navOpen? "menu_open":"menu"}
</span>
    </button>
    {navData.map(item =>{
      return <div key={item.id}>
        
        <a href='#section'>{navOpen ? item.text : item.icon}</a>
      </div>   
    })}
      {/* <a href='#section'>About</a>
      <a href='#section'>Projects</a>
      <a href='#section'>Resume</a>
      <a href='#section'>Blog</a> */}
    </div>
    {/* </nav> */}
      </div>
  );
};

export default Navbar;