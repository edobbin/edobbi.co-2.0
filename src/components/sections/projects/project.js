import React from 'react';
import data from './Projects.json'
import { ProjectCard } from './ProjectCard';

const project = () => {
    return (
        <div className="containerP">
            <div className='Project-Grid'>
            <div>
      {data.map(obj => 
        <ProjectCard key={obj.id} project={obj} />
      )}
      </div>
        </div>
    </div>
  );
};

export default project;