import React from 'react'
import SkillData from './SkillData'
import Skill from './Skill'

const skillContainer = () => {
  return (
    <div>
{
        SkillData.map(item =>{
         return <Skill skill ={item} />
        })
              
        }
    </div>
    
  )
}

export default skillContainer