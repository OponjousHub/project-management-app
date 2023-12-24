import { useRef } from "react";
import Input from "../utility/input";
import classes from "./css/newProjects.module.css";
function NewProject({ onCreateNewProject }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  const submitHandler = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    onCreateNewProject({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  };

  return (
    <div className={classes.newproject_container}>
      <menu className={classes.newproject_control}>
        <li>
          <button onClick={onCreateNewProject}>Cancel</button>
        </li>
        <li>
          <button onClick={submitHandler} className={classes.save}>
            Save
          </button>
        </li>
      </menu>
      <Input
        ref={title}
        className={`${classes.input} ${classes.title}`}
        label="Title"
      />
      <Input
        ref={description}
        className={classes.textarea}
        label="description"
        textarea
      />
      <Input
        ref={date}
        className={classes.input}
        label="Due Date"
        type="date"
      />
    </div>
  );
}

export default NewProject;
