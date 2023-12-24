import { React } from "react";
import { Plus } from "@phosphor-icons/react";

import Button from "./button";
import classes from "./css/addProject.module.css";

function AddProjects({ onAddProject, projectList }) {
  console.log(projectList);
  return (
    <aside className={classes.addProject_container}>
      <h1 className={classes.header}>Your Projects</h1>
      <div>
        <Button onClick={onAddProject}>
          <Plus />
          <span>Add Project</span>
        </Button>
      </div>
      <ul>
        {projectList.map((project) => (
          <li className={classes.task_list} key={project.id}>
            <button className={classes.projList}>{project.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default AddProjects;
