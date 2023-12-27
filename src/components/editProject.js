import { useRef, useContext } from "react";
import TaskContext from "../store/task-context";
import Input from "../utility/input";
import classes from "./css/newProjects.module.css";
function EditProject() {
  const { editTask, onCancelEdit, onAddEdit } = useContext(TaskContext);

  const title = useRef();
  const description = useRef();
  const date = useRef();

  const submitHandler = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    onAddEdit({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  };

  return (
    <div className={classes.newproject_container}>
      <menu className={classes.newproject_control}>
        <li>
          <button onClick={onCancelEdit}>Cancel</button>
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
        value={editTask.title}
      />
      <Input
        ref={description}
        className={classes.textarea}
        label="description"
        textarea
        value={editTask.description}
      />
      <Input
        ref={date}
        className={classes.input}
        label="Due Date"
        type="date"
        value={editTask.date}
      />
    </div>
  );
}

export default EditProject;
