import React from 'react';
import ProjectTile from './ProjectTile';

const ProjectGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.projects.map((project, i) => <ProjectTile {...this.props} key={i} i={i} project={project} />)}
      </div>
    )
  }
});

export default ProjectGrid;
