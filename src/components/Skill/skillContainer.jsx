import React from "react";
import SkillData from "./SkillData";
import Skill from "./Skill";
import './Skill.css'

const skillContainer = () => {
  return (
    <div className="Skill-Grid" >
      
      {SkillData.map((item, id) => (
        <div>
        <Skill key={id} skill={item} />
        </div>
      ))}
    
    </div>
  );
};

export default skillContainer;
