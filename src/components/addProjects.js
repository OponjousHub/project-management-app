import { React } from "react";
import { Plus } from "@phosphor-icons/react";

import Button from "./button";
import classes from "./css/addProject.module.css";

function AddProjects({ onAddProject }) {
  return (
    <aside className={classes.addProject_container}>
      <h1 className={classes.header}>Your Projects</h1>
      <Button onClick={onAddProject}>
        <Plus />
        <span>Add Project</span>
      </Button>
      <ul>
        <li className={classes.task_list}>Task</li>
      </ul>
    </aside>
  );
}

export default AddProjects;
