import React from 'react';
import data from './Projects.json'
import { ProjectCard } from './ProjectCard';

const project = () => {
    return (
        <div className="containerP">
            <div className='Project-Grid'>
            
      {data.map(obj => 
        <ProjectCard key={obj.id} project={obj} />
      )}
      
        </div>
    </div>
  );
};

export default project;