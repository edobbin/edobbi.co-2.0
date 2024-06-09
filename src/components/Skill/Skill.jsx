import React from 'react'
import './Skill.css'

const Skill = ({skill}) => {
  return (
    <div className='Skill-Container'>
        {skill.image}
      <h5>{skill.name}</h5>
    </div>
  )
}

export default Skill
