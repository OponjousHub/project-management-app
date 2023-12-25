import classes from "./css/selectedProject.module.css";
import ButtonSmall from "../utility/buttonSmall";
import { Fragment } from "react";
function SelectedProject({ selectedProject }) {
  console.log(selectedProject);
  const formatedDate = new Date(selectedProject.date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
  return (
    <Fragment>
      <header className={classes.deteils_container}>
        <div className={classes.title_box}>
          <h1 className={classes.title}>{selectedProject.title}</h1>
          <ButtonSmall>Delete</ButtonSmall>
        </div>
        <p className={classes.date}>{formatedDate}</p>
        <p>{selectedProject.description}</p>
      </header>
      <p>Task</p>
    </Fragment>
  );
}

export default SelectedProject;
