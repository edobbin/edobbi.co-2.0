import React from 'react'
import './navbar.css'

const navbar = (props) => {
  return (
    <div className='navbar'>
    <div className='Title-container'>
      {/* <img></img> */}
      
    </div>
    <div className='sidebar'>
      <a href='#section'>About</a>
      <a href='#section'>Projects</a>
      <a href='#section'>Resume</a>
      <a href='#section'>Blog</a>
    </div>
      </div>
  );
};

export default navbar;