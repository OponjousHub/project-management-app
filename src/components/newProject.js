import Input from "../utility/input";
import classes from "./css/newProjects.module.css";
function NewProject() {
  return (
    <div className={classes.newproject_container}>
      <menu className={classes.newproject_control}>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button className={classes.save}>Save</button>
        </li>
      </menu>
      <Input className={`${classes.input} ${classes.title}`} label="Title" />
      <Input className={classes.textarea} label="description" textarea />
      <Input className={classes.input} label="Due Date" type="date" />
    </div>
  );
}

export default NewProject;
