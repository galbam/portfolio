import React from "react";
import { Link } from "react-router-dom";
import projects from "../projects";

const ProjectDetails = props => {

  let projId = props.match.params.projectId;
  let proj = projects.find(f => f.id === projId);
  
  let foundProject = proj;

  return (
    <div>
      <h2>
        {foundProject.name}{" "}
        <span style={{ fontSize: "14px" }}>{foundProject.year}</span>
      </h2>
      <h3>Used technologies: {foundProject.technologies}</h3>
      <p>{foundProject.description}</p>
      <Link to="/projects">Back</Link>
    </div>
  );
};

export default ProjectDetails;
