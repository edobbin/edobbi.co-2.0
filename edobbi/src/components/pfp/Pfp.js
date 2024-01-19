import React from 'react'
import pfp from "./pfp.jpg"
import './Pfp.css'

const Pfp = () => {
  return (
    <div className='imga'>
        <img src={pfp} alt='Ethan' width="auto" height="300" className='pfp'/>
    </div>
  )
}
export default Pfp;