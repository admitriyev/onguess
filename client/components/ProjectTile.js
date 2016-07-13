import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const ProjectTile = React.createClass({
  render() {
    const { project, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${project.code}`}>
            <img src={project.display_src} alt={project.caption} className="grid-photo" />
          </Link>

          <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={project.likes} className="likes-heart">{project.likes}</span>
          </CSSTransitionGroup>

        </div>

        <figcaption>
          <p>{project.caption}</p>
          <div className="control-buttons">
            <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {project.likes}</button>
            <Link className="button" to={`/view/${project.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[project.code] ? comments[project.code].length : 0 }
              </span>
            </Link>
          </div>
        </figcaption>

      </figure>
    )
  }
});

export default ProjectTile;
