import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <NavLink to={project.url}>View Project</NavLink>
        </div>
      ))}
    </div>
  );
};

export default Projects;
