import { useState, useContext } from "react";
import TaskContext from "../store/task-context";
import classes from "./css/task.module.css";

function NewTask() {
  const { onAddTask } = useContext(TaskContext);
  const [enteredTask, setEnteredTask] = useState();

  const taskHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const clickHandler = () => {
    onAddTask(enteredTask);
    setEnteredTask(" ");
  };

  return (
    <div className={classes.task_box}>
      <input
        onChange={taskHandler}
        value={enteredTask}
        type="test"
        className={classes.task_input}
      />
      <button onClick={clickHandler} className={classes.bttn}>
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
