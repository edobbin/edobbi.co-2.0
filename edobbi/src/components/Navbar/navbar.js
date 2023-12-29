import React from 'react'

function navbar() {
  return (
    <div className='navbar'>
    <a href='javascript:void(0)' className='closeBar' onClick='closeNav()'></a>
    <ul>
      <li>
        Home
      </li>
      <li>
        About me
      </li>
      <li>
        Projects
      </li>
      <li>Resume</li>
    </ul>
      </div>
  )
}

export default navbar;