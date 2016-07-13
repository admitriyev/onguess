import React from 'react';
import ProjectTile from './ProjectTile';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { projectId } = this.props.params;

    const i = this.props.projects.findIndex((project) => project.code === projectId);
    const project = this.props.projects[i];

    const postComments = this.props.comments[projectId] || [];

    return (
      <div className="single-photo">
        <ProjectTile i={i} project={project} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});

export default Single;
