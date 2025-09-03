import React from 'react'
import './Projects.css'
import { FaGithub } from "react-icons/fa";
import { PiBoxArrowDownBold } from "react-icons/pi";


export const ProjectCard = ( {project}) => {
  return (
    <div className='Projct_Card'>
        <h3>{project["project-Name"]}</h3>
        <p>{project["project-Desc"]}</p>
        <div className="project-tools">
        {project.skills?.map((skill, i) => (
          <span key={i} className="project-tool">
            {skill}
          </span>
        ))}

        </div>
        {/* Links */}
      {/* Links */}
      <div className="project-links">
        {project.links["Github"] && project.links["Github"].trim() !== "" && (
          <a href={project.links["Github"]}>
            <FaGithub size={28}/>
          </a>
        )}

        {project.links["Project-Page"] && project.links["Project-Page"].trim() !== "" && (
          <a href={project.links["Project-Page"]} >
            <PiBoxArrowDownBold size={28}/>
          </a>
        )}
      </div>
    </div>
  )
}
