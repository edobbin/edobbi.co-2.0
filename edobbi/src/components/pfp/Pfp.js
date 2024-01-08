import React from 'react'
import pfp from "./pfp.jpg"


export const Pfp = () => {
  return (
    <div>
        <img src={pfp} alt='Ethan' width="auto" height="300" className='pfp'/>
    </div>
  )
}
