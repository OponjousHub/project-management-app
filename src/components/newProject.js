import { useRef } from "react";
import Input from "../utility/input";
import Modal from "../utility/modal";
import classes from "./css/newProjects.module.css";
function NewProject({ onCreateNewProject, onCancelNewProject }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  const submitHandler = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDate.trim() === "" ||
      enteredDescription.trim() === ""
    ) {
      modal.current.open();
    } else {
      onCreateNewProject({
        title: enteredTitle,
        description: enteredDescription,
        date: enteredDate,
      });
    }
  };

  return (
    <>
      <Modal ref={modal} btnCaption="Okey">
        <h2>Invalid Input</h2>
        <p>Ooops ... looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for a every input.</p>
      </Modal>
      <div className={classes.newproject_container}>
        <menu className={classes.newproject_control}>
          <li>
            <button onClick={onCancelNewProject}>Cancel</button>
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
    </>
  );
}

export default NewProject;
