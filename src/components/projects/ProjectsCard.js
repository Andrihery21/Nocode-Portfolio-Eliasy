import React from 'react'
const ProjectsCard = ({ title, des, src, imageFit }) => {
  return (
    <article className="project-card group">
      <div className="project-image">
        <img
          className={imageFit === 'contain' ? 'project-logo-preview' : ''}
          src={src}
          alt={title}
        />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{des}</p>
      </div>
    </article>
  );
}

export default ProjectsCard