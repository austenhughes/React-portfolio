import React from "react";

function Project(props) {

  return (

    <div >

          {props.projectState.map(project => (

              <div className="projectCard" 
              key={project._id}
              >
              <div className="projectPicture"> 
              <img src={project.img} alt={project.img} height="auto" width="45%"></img>
              </div>
              <div className="projectInfo">
              <div>{project.projectName}</div>
              <a href={project.projectLink} target="_blank"> link : {project.projectName}</a> <br />
              <a href={project.gitHub} target="_blank"> Github : {project.projectName}</a>
              </div>
              </div>
          ))}

    </div>
  );
}

export default Project;

