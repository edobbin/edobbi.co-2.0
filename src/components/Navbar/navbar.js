import React, { useEffect, useState } from 'react';
import { navData } from "./navData"
import { Link } from "react-router-dom"
import './navbar.css'


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggle = () =>{
    setNavOpen(!navOpen)
  }


  return (
    <div className='navbar'>
      <nav>
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
        
        <a href={item.link}>{navOpen ? item.text : item.icon}</a>
      </div>   
    })}
    </div>
    {/* </nav> */}</nav>
      </div>
  );
};

export default Navbar;